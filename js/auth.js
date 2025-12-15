// 사용자 데이터 관리
const USER_STORAGE_KEY = 'care_together_users';
const CURRENT_USER_KEY = 'currentUser';

// 초기 사용자 데이터 설정 (관리자 계정)
function initializeUsers() {
    const users = getUsers();
    if (users.length === 0) {
        // 기본 관리자 계정 생성
        const adminUser = {
            id: 'admin',
            password: 'admin123', // 실제 운영 시에는 해시화 필요
            name: '관리자',
            email: 'admin@care-together.or.kr',
            phone: '031-XXX-XXXX',
            role: 'admin',
            createdAt: new Date().toISOString()
        };
        users.push(adminUser);
        saveUsers(users);
    }
}

// 사용자 목록 가져오기
function getUsers() {
    const usersJson = localStorage.getItem(USER_STORAGE_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
}

// 사용자 목록 저장
function saveUsers(users) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
}

// 현재 로그인한 사용자 가져오기
function getCurrentUser() {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
}

// 현재 사용자 저장
function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

// 회원가입
function signup(userData) {
    const users = getUsers();
    
    // 아이디 중복 확인
    if (users.find(u => u.id === userData.id)) {
        return { success: false, message: '이미 사용 중인 아이디입니다.' };
    }

    // 비밀번호 확인
    if (userData.password !== userData.passwordConfirm) {
        return { success: false, message: '비밀번호가 일치하지 않습니다.' };
    }

    // 비밀번호 길이 확인
    if (userData.password.length < 6) {
        return { success: false, message: '비밀번호는 6자 이상이어야 합니다.' };
    }

    // 새 사용자 생성
    const newUser = {
        id: userData.id,
        password: userData.password, // 실제 운영 시에는 해시화 필요
        name: userData.name,
        nickname: userData.nickname || '',
        email: userData.email,
        phone: userData.phone || '',
        mobile: userData.mobile || '',
        mailService: userData.mailService || false,
        smsService: userData.smsService || false,
        infoPublic: userData.infoPublic || false,
        role: 'user',
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    return { success: true, message: '회원가입이 완료되었습니다.' };
}

// 로그인
function login(id, password) {
    const users = getUsers();
    const user = users.find(u => u.id === id && u.password === password);

    if (user) {
        // 비밀번호 제외하고 저장
        const { password: _, ...userWithoutPassword } = user;
        setCurrentUser(userWithoutPassword);
        return { success: true, user: userWithoutPassword };
    } else {
        return { success: false, message: '아이디 또는 비밀번호가 올바르지 않습니다.' };
    }
}

// 로그인 폼 처리
document.addEventListener('DOMContentLoaded', function() {
    initializeUsers();

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const id = document.getElementById('loginId').value;
            const password = document.getElementById('loginPassword').value;
            const errorDiv = document.getElementById('loginError');

            const result = login(id, password);
            
            if (result.success) {
                // 로그인 성공 시 메인 페이지로 이동
                window.location.href = 'index.html';
            } else {
                errorDiv.textContent = result.message;
                errorDiv.style.display = 'block';
            }
        });
    }

    // 약관 동의 버튼 처리
    const termsAgreeBtn = document.getElementById('termsAgreeBtn');
    const termsBox = document.getElementById('termsBox');
    const signupBox = document.getElementById('signupBox');
    const termsAgree = document.getElementById('termsAgree');
    const termsAgreeAll = document.getElementById('termsAgreeAll');
    const backToTermsBtn = document.getElementById('backToTermsBtn');

    // 전체 동의 체크박스 처리
    if (termsAgreeAll && termsAgree) {
        termsAgreeAll.addEventListener('change', function() {
            termsAgree.checked = this.checked;
        });
        
        termsAgree.addEventListener('change', function() {
            if (!this.checked) {
                termsAgreeAll.checked = false;
            } else {
                // 개별 약관도 체크되어 있는지 확인
                if (termsAgree.checked) {
                    termsAgreeAll.checked = true;
                }
            }
        });
    }

    if (termsAgreeBtn && termsBox && signupBox) {
        termsAgreeBtn.addEventListener('click', function() {
            if (!termsAgreeAll.checked || !termsAgree.checked) {
                if (typeof showAlert === 'function') {
                    showAlert('회원가입 약관에 모두 동의해주세요.', '알림');
                } else {
                    alert('회원가입 약관에 모두 동의해주세요.');
                }
                return;
            }
            
            // 약관 동의 후 회원가입 폼 표시
            termsBox.style.display = 'none';
            signupBox.style.display = 'block';
        });
    }

    // 약관으로 돌아가기 버튼 처리
    if (backToTermsBtn && termsBox && signupBox) {
        backToTermsBtn.addEventListener('click', function() {
            signupBox.style.display = 'none';
            termsBox.style.display = 'block';
        });
    }

    // 캡차 생성
    let captchaAnswer = '';
    function generateCaptcha() {
        captchaAnswer = Math.floor(100000 + Math.random() * 900000).toString();
        const captchaDisplay = document.getElementById('captchaDisplay');
        if (captchaDisplay) {
            captchaDisplay.textContent = captchaAnswer;
            captchaDisplay.style.fontSize = '24px';
            captchaDisplay.style.fontWeight = 'bold';
            captchaDisplay.style.letterSpacing = '5px';
            captchaDisplay.style.textAlign = 'center';
            captchaDisplay.style.padding = '10px';
            captchaDisplay.style.backgroundColor = '#f0f0f0';
            captchaDisplay.style.border = '1px solid #ddd';
            captchaDisplay.style.borderRadius = '5px';
        }
    }

    // 캡차 새로고침
    const refreshCaptcha = document.getElementById('refreshCaptcha');
    if (refreshCaptcha) {
        refreshCaptcha.addEventListener('click', generateCaptcha);
    }

    // 캡차 음성 재생 (간단한 구현)
    const audioCaptcha = document.getElementById('audioCaptcha');
    if (audioCaptcha) {
        audioCaptcha.addEventListener('click', function() {
            if (typeof showAlert === 'function') {
                showAlert('캡차 숫자: ' + captchaAnswer, '캡차 숫자');
            } else {
                alert('캡차 숫자: ' + captchaAnswer);
            }
        });
    }

    // 페이지 로드 시 캡차 생성
    if (signupBox) {
        generateCaptcha();
    }

    // 회원가입 폼 처리
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 약관 동의 확인
            if (!termsAgree || !termsAgree.checked) {
                if (typeof showAlert === 'function') {
                    showAlert('개인정보 약관에 동의해주세요.', '알림');
                } else {
                    alert('개인정보 약관에 동의해주세요.');
                }
                signupBox.style.display = 'none';
                termsBox.style.display = 'block';
                return;
            }

            // 캡차 확인
            const captchaInput = document.getElementById('captchaInput');
            if (captchaInput && captchaInput.value !== captchaAnswer) {
                errorDiv.textContent = '자동등록방지 숫자가 일치하지 않습니다.';
                errorDiv.style.display = 'block';
                successDiv.style.display = 'none';
                generateCaptcha(); // 새 캡차 생성
                captchaInput.value = '';
                return;
            }
            
            const userData = {
                id: document.getElementById('signupId').value,
                password: document.getElementById('signupPassword').value,
                passwordConfirm: document.getElementById('signupPasswordConfirm').value,
                name: document.getElementById('signupName').value,
                nickname: document.getElementById('signupNickname').value,
                email: document.getElementById('signupEmail').value,
                phone: document.getElementById('signupPhone').value,
                mobile: document.getElementById('signupMobile').value,
                mailService: document.getElementById('signupMailService').checked,
                smsService: document.getElementById('signupSmsService').checked,
                infoPublic: document.getElementById('signupInfoPublic').checked
            };

            // 닉네임 유효성 검사
            const nickname = userData.nickname;
            const koreanRegex = /[가-힣]/g;
            const englishRegex = /[a-zA-Z]/g;
            const koreanCount = (nickname.match(koreanRegex) || []).length;
            const englishCount = (nickname.match(englishRegex) || []).length;
            
            if (koreanCount > 0 && koreanCount < 2) {
                errorDiv.textContent = '닉네임은 한글 2자 이상이어야 합니다.';
                errorDiv.style.display = 'block';
                successDiv.style.display = 'none';
                return;
            }
            
            if (englishCount > 0 && englishCount < 4) {
                errorDiv.textContent = '닉네임은 영문 4자 이상이어야 합니다.';
                errorDiv.style.display = 'block';
                successDiv.style.display = 'none';
                return;
            }

            // 아이디 형식 확인
            if (userData.id.length < 3) {
                errorDiv.textContent = '아이디는 3자 이상이어야 합니다.';
                errorDiv.style.display = 'block';
                successDiv.style.display = 'none';
                return;
            }

            const errorDiv = document.getElementById('signupError');
            const successDiv = document.getElementById('signupSuccess');

            // 아이디 형식 확인
            if (userData.id.length < 4) {
                errorDiv.textContent = '아이디는 4자 이상이어야 합니다.';
                errorDiv.style.display = 'block';
                successDiv.style.display = 'none';
                return;
            }

            const result = signup(userData);
            
            if (result.success) {
                successDiv.textContent = result.message;
                successDiv.style.display = 'block';
                errorDiv.style.display = 'none';
                
                // 2초 후 로그인 페이지로 이동
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else {
                errorDiv.textContent = result.message;
                errorDiv.style.display = 'block';
                successDiv.style.display = 'none';
            }
        });
    }
});

