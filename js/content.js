// 히어로 이미지 및 텍스트 데이터
const heroData = {
    greeting: {
        image: 'hero.png',
        title: '기관안내',
        subtitle: ''
    },
    'program-info': {
        image: 'hero-2.png',
        title: '돌봄프로그램',
        subtitle: ''
    },
    notice: {
        image: 'hero-3.png',
        title: '공지사항',
        subtitle: ''
    }
};

// 콘텐츠 데이터
const contentData = {
    greeting: {
        title: '인사말',
        sidebarTitle: '기관안내',
        sidebarItems: [
            { id: 'greeting', name: '인사말', active: true }
        ],
        content: `
            <div class="greeting-content">
                <h2 class="greeting-title">믿을 수 있는 돌봄, 함께하는 행복</h2>
                <div class="greeting-text">
                    <p>
                        의정부시 다함께돌봄센터 9호점은<br>
                        아이들이 편안하게 쉬고, 마음껏 웃으며 지낼 수 있는 공간,<br>
                        아이들이 오고 싶어 하는 좋아하는 돌봄 공간을 만들어가고 있습니다.
                    </p>
                    <p>
                        쉼과 휴식 속에서 에너지를 회복하며,<br>
                        놀이와 배움을 통해 자연스럽게 성장할 수 있도록<br>
                        아이 한 명 한 명을 존중하는 돌봄을 실천하고 있습니다.
                    </p>
                    <p>
                        아이들은 안전하고 따뜻한 환경에서 즐겁게 지내고,<br>
                        부모님께서는 안심하고 맡길 수 있도록<br>
                        세심한 돌봄을 최우선으로 운영하고 있습니다.
                    </p>
                    <p>
                        아이들의 쉼이 행복이 되고,<br>
                        부모님의 안심이 신뢰가 되는 곳.<br>
                        지역사회와 함께 아이들의 건강한 성장을 응원하는<br>
                        의정부시 다함께돌봄센터 9호점이 되겠습니다.
                    </p>
                    <p class="greeting-signature">
                        감사합니다.
                    </p>
                </div>
            </div>
            
            <div class="organization-info-section">
                <h2 class="section-title">운영법인</h2>
                <div class="info-table-container">
                    <table class="info-table">
                        <tbody>
                            <tr>
                                <th><span class="table-icon">🏢</span> 운영법인</th>
                                <td>사단법인 나눔고용복지재단</td>
                            </tr>
                            <tr>
                                <th><span class="table-icon">📜</span> 설립근거</th>
                                <td>「민법」 제32조, 「고용노동부 소관 비영리법인의 설립 및 감독에 관한 규칙」 제4조</td>
                            </tr>
                            <tr>
                                <th><span class="table-icon">📅</span> 설립일</th>
                                <td>2004년 11월 1일</td>
                            </tr>
                            <tr>
                                <th><span class="table-icon">💝</span> 설립목적</th>
                                <td>본 법인은 사랑과 평화의 정신으로 한국사회의 노동복지발전을 도모하고, 취약계층을 위한 종합적인 사회복지사업을 수행함으로써 복지사회 건설에 이바지함을 목적으로 한다.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    'program-info': {
        title: '다함께돌봄사업 안내',
        sidebarTitle: '돌봄프로그램',
        sidebarItems: [
            { id: 'program-info', name: '다함께돌봄사업 안내', active: true }
        ],
        content: `
            <div class="program-content">
                <div class="program-section">
                    <h2 class="program-section-title">사업개요</h2>
                    <div class="program-section-content">
                        <div class="info-table-container">
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <th><span class="table-icon">📋</span> 사업개요</th>
                                        <td>
                                            다함께돌봄센터는<br>
                                            초등학생 자녀들의 방과 후 및 방학 기간 돌봄 공백을 해소하고,<br>
                                            맞벌이 가정을 포함한 가족들의 양육 부담을 경감하기 위해<br>
                                            지역사회와 지자체가 협력하여 운영하는 공공형 초등돌봄 서비스입니다.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div class="program-section">
                    <h2 class="program-section-title">이용대상</h2>
                    <div class="program-section-content">
                        <div class="info-table-container">
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <th><span class="table-icon">👨‍👩‍👧‍👦</span> 이용대상</th>
                                        <td>
                                            <ul class="program-list">
                                                <li>의정부시 거주 초등학생 (1~6학년)</li>
                                                <li>방과 후 돌봄이 필요한 아동</li>
                                                <li>맞벌이 가정, 한부모 가정, 다문화 가정 등 돌봄이 필요한 가정의 초등학생 아동</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div class="program-section">
                    <h2 class="program-section-title">운영시간</h2>
                    <div class="program-section-content">
                        <div class="info-table-container">
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <th><span class="table-icon">🕐</span> 학기중</th>
                                        <td>13:00 ~ 20:00</td>
                                    </tr>
                                    <tr>
                                        <th><span class="table-icon">☀️</span> 방학중</th>
                                        <td>09:00 ~ 18:00</td>
                                    </tr>
                                    <tr>
                                        <th><span class="table-icon">🏖️</span> 휴무일</th>
                                        <td>주말 및 공휴일</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div class="program-section">
                    <h2 class="program-section-title">주요 프로그램</h2>
                    <div class="program-section-content">
                        <div class="info-table-container">
                            <table class="info-table">
                                <tbody>
                                    <tr>
                                        <th><span class="table-icon">📚</span> 독서활동</th>
                                        <td>자율 독서 및 독서 지도를 통해 사고력·이해력 향상과 독서 습관 형성</td>
                                    </tr>
                                    <tr>
                                        <th><span class="table-icon">🎨</span> 체험활동</th>
                                        <td>다양한 체험 활동을 통한 창의력 및 탐구력 향상</td>
                                    </tr>
                                    <tr>
                                        <th><span class="table-icon">🏃</span> 신체활동</th>
                                        <td>건강한 신체 발달을 위한 다양한 운동 및 놀이 활동</td>
                                    </tr>
                                    <tr>
                                        <th><span class="table-icon">🍎</span> 간식제공</th>
                                        <td>건강하고 안전한 간식 제공</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    notice: {
        title: '공지사항',
        sidebarTitle: '게시판',
        sidebarItems: [
            { id: 'notice', name: '공지사항', active: true }
        ],
        content: `
            <div class="notice-board">
                <div class="notice-board-header">
                    <h2>공지사항</h2>
                    <button class="btn btn-primary" id="writeNoticeBtn" style="display: none;">글쓰기</button>
                </div>
                <div class="notice-table-wrapper">
                    <table class="notice-table">
                        <thead>
                            <tr>
                                <th class="col-no">번호</th>
                                <th class="col-title">제목</th>
                                <th class="col-author">작성자</th>
                                <th class="col-date">작성일</th>
                                <th class="col-views">조회수</th>
                            </tr>
                        </thead>
                        <tbody id="noticeListBody">
                            <!-- JavaScript로 동적 로드 -->
                        </tbody>
                    </table>
                </div>
                <div class="pagination" id="pagination"></div>
            </div>
        `
    }
};

// 서브 메뉴 데이터
const subMenuData = {
    company: [
        { id: 'greeting', name: '인사말' }
    ],
    program: [
        { id: 'program-info', name: '다함께돌봄사업 안내' }
    ],
    community: [
        { id: 'notice', name: '공지사항' }
    ]
};

// 히어로 업데이트 함수
function updateHero(submenuId) {
    const hero = heroData[submenuId];
    if (!hero) return;

    const mainVisual = document.querySelector('.main-visual');
    const visualTitle = document.querySelector('.visual-title');
    const visualSubtitle = document.querySelector('.visual-subtitle');

    if (mainVisual) {
        // 모바일 화면 체크
        const isMobile = window.innerWidth <= 768;
        let imagePath = hero.image;
        
        // 모바일일 때 이미지 경로 변경
        if (isMobile) {
            if (submenuId === 'program-info') {
                imagePath = 'hero-2-m.png';
            } else if (submenuId === 'notice') {
                imagePath = 'hero-3-m.png';
            } else if (submenuId === 'greeting') {
                imagePath = 'hero.png';
            }
        }
        
        mainVisual.style.backgroundImage = `url('${imagePath}')`;
    }
    if (visualTitle) {
        visualTitle.textContent = hero.title;
    }
    if (visualSubtitle) {
        if (hero.subtitle) {
            visualSubtitle.textContent = hero.subtitle;
            visualSubtitle.style.display = 'block';
        } else {
            visualSubtitle.style.display = 'none';
        }
    }
}

// 콘텐츠 로드 함수
function loadContent(submenuId) {
    const content = contentData[submenuId];
    if (!content) return;

    // 히어로 업데이트
    updateHero(submenuId);

    const dynamicContent = document.getElementById('dynamic-content');
    const introSection = document.getElementById('introSection');
    
    if (!dynamicContent) return;

    // 메인 소개 섹션 및 공지사항 섹션 숨기기
    if (introSection) {
        introSection.style.display = 'none';
    }
    const noticeSection = document.getElementById('noticeSection');
    if (noticeSection) {
        noticeSection.style.display = 'none';
    }

    // 동적 콘텐츠 표시
    dynamicContent.style.display = 'block';

    // 서브 메뉴 렌더링
    const menuType = Object.keys(subMenuData).find(key => 
        subMenuData[key].some(item => item.id === submenuId)
    );
    if (menuType) {
        renderSubMenu(menuType, submenuId);
    }

    // 메인 콘텐츠 렌더링 (사이드바 없이 전체 너비)
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = content.content;

    // 공지사항인 경우 추가 초기화
    if (submenuId === 'notice') {
        setTimeout(() => {
            if (typeof renderNoticeList === 'function') {
                renderNoticeList(1);
                const currentUser = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
                const writeBtn = document.getElementById('writeNoticeBtn');
                if (currentUser && currentUser.role === 'admin' && writeBtn) {
                    writeBtn.style.display = 'block';
                    writeBtn.onclick = () => {
                        if (typeof openNoticeModal === 'function') {
                            openNoticeModal();
                        }
                    };
                }
            }
        }, 200);
    }

    // 화면 전환 (애니메이션 없이)
}

// 공지사항 상세 페이지 로드
function loadNoticeDetail(noticeId) {
    const notice = typeof getNoticeById === 'function' ? getNoticeById(noticeId) : null;
    if (!notice) return;

    // 히어로 업데이트
    updateHero('notice');

    const dynamicContent = document.getElementById('dynamic-content');
    const introSection = document.getElementById('introSection');
    const noticeSection = document.getElementById('noticeSection');
    
    if (!dynamicContent) return;

    // 메인 소개 섹션 및 공지사항 섹션 숨기기
    if (introSection) {
        introSection.style.display = 'none';
    }
    if (noticeSection) {
        noticeSection.style.display = 'none';
    }

    // 동적 콘텐츠 표시
    dynamicContent.style.display = 'block';

    // 서브 메뉴 렌더링
    renderSubMenu('community', 'notice');

    // 공지사항 상세 콘텐츠 렌더링
    const mainContent = document.getElementById('mainContent');
    const currentUser = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
    const isAdmin = currentUser && currentUser.role === 'admin';

    mainContent.innerHTML = `
        <div class="notice-detail-page" data-notice-id="${notice.id}">
            <div class="notice-detail-header">
                <h2 class="notice-detail-title">${notice.title}</h2>
                <div class="notice-detail-meta">
                    <span>작성자: ${notice.author}</span>
                    <span>작성일: ${formatDate(notice.date)}</span>
                    <span>조회수: ${notice.views}</span>
                </div>
            </div>
            <div class="notice-detail-body">
                <div class="notice-detail-content">${notice.content.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="notice-detail-footer">
                <button class="btn btn-secondary" onclick="if(typeof loadContent === 'function') { loadContent('notice'); }">목록</button>
                ${isAdmin ? `
                    <div class="notice-detail-actions">
                        <button class="btn btn-primary" onclick="if(typeof editNotice === 'function') { editNotice(${notice.id}); }">수정</button>
                        <button class="btn btn-danger" onclick="if(typeof deleteNoticeConfirm === 'function') { deleteNoticeConfirm(${notice.id}); }">삭제</button>
                    </div>
                ` : ''}
            </div>

            <!-- 댓글 영역 -->
            <div class="notice-comments-section">
                <h3 class="comments-title">댓글 <span class="comments-count" id="commentsCount">0</span></h3>
                
                <!-- 댓글 작성 폼 -->
                ${currentUser ? `
                <div class="comment-form-container">
                    <form id="commentForm" class="comment-form">
                        <textarea id="commentContent" class="comment-input" placeholder="댓글을 입력하세요..." rows="3" required></textarea>
                        <div class="comment-form-actions">
                            <button type="submit" class="btn btn-primary">댓글 등록</button>
                        </div>
                    </form>
                </div>
                ` : `
                <div class="comment-login-message">
                    <p>댓글을 작성하려면 <a href="login.html">로그인</a>이 필요합니다.</p>
                </div>
                `}

                <!-- 댓글 목록 -->
                <div class="comments-list" id="commentsList">
                    <!-- JavaScript로 동적 로드 -->
                </div>
            </div>
        </div>
    `;

    // 현재 공지사항 ID 저장
    window.currentNoticeId = notice.id;

    // 댓글 목록 렌더링
    setTimeout(() => {
        if (typeof renderCommentsList === 'function') {
            renderCommentsList(notice.id);
        }
        
        // 댓글 작성 폼 이벤트
        const commentForm = document.getElementById('commentForm');
        if (commentForm) {
            commentForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const content = document.getElementById('commentContent').value;
                if (typeof addComment === 'function') {
                    const result = addComment(notice.id, content);
                    if (result.success) {
                        document.getElementById('commentContent').value = '';
                        if (typeof renderCommentsList === 'function') {
                            renderCommentsList(notice.id);
                        }
                    } else {
                        alert(result.message);
                    }
                }
            });
        }
    }, 100);

    // formatDate 함수가 없으면 정의
    if (typeof formatDate !== 'function') {
        window.formatDate = function(dateString) {
            const date = new Date(dateString);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}.${month}.${day}`;
        };
    }
}

// 서브 메뉴 렌더링
function renderSubMenu(menuType, activeId) {
    const subMenu = document.getElementById('subMenu');
    const items = subMenuData[menuType];
    const itemWidth = 100 / items.length;
    
    subMenu.innerHTML = `
        <ul>
            ${items.map(item => `
                <li style="width: ${itemWidth}%;" class="sm_nav ${item.id === activeId ? 'active' : ''}">
                    <a href="#" data-submenu="${item.id}">${item.name}</a>
                </li>
            `).join('')}
        </ul>
    `;

    // 서브 메뉴 클릭 이벤트
    subMenu.querySelectorAll('a[data-submenu]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const submenuId = this.getAttribute('data-submenu');
            loadContent(submenuId);
        });
    });
}

// 메인 소개 페이지로 돌아가기
function showMainIntro() {
    const introSection = document.getElementById('introSection');
    const noticeSection = document.getElementById('noticeSection');
    const dynamicContent = document.getElementById('dynamic-content');
    
    if (introSection) {
        introSection.style.display = 'block';
    }
    if (noticeSection) {
        noticeSection.style.display = 'block';
    }
    if (dynamicContent) {
        dynamicContent.style.display = 'none';
    }
    
    // 히어로 메인 이미지로 설정
    const mainVisual = document.querySelector('.main-visual');
    const visualTitle = document.querySelector('.visual-title');
    const visualSubtitle = document.querySelector('.visual-subtitle');
    
    if (mainVisual) {
        // 모바일 화면 체크
        const isMobile = window.innerWidth <= 768;
        const imagePath = isMobile ? 'hero-main-m.png' : 'hero-main.png';
        mainVisual.style.backgroundImage = `url('${imagePath}')`;
    }
    if (visualTitle) {
        visualTitle.textContent = '믿을 수 있는 돌봄, 함께하는 행복';
    }
    if (visualSubtitle) {
        visualSubtitle.textContent = '아이와 부모 모두가 안심할 수 있는 공간';
        visualSubtitle.style.display = 'block';
    }

    // 공지사항 목록 렌더링
    if (typeof renderLatestNotices === 'function') {
        setTimeout(() => {
            renderLatestNotices();
        }, 100);
    }
}

// 메인 메뉴 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    // 페이지 로드 시 메인 소개 페이지 표시 (기본 상태)
    showMainIntro();
    
    // 로고 클릭 시 메인 소개 페이지로 이동
    const logoLink = document.querySelector('#logo a');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            showMainIntro();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 1차 메뉴 클릭
    document.querySelectorAll('.gnb_1da[data-menu]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const menuType = this.getAttribute('data-menu');
            const firstSubmenu = subMenuData[menuType]?.[0];
            if (firstSubmenu) {
                loadContent(firstSubmenu.id);
            }
        });
    });

    // 2차 메뉴 클릭
    document.querySelectorAll('.gnb_2da[data-submenu]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const submenuId = this.getAttribute('data-submenu');
            loadContent(submenuId);
        });
    });

    // 공지사항 모달 초기화 (notice.js가 로드된 후)
    setTimeout(() => {
        initNoticeModals();
    }, 500);
});

// 공지사항 모달 초기화
function initNoticeModals() {
    const noticeForm = document.getElementById('noticeForm');
    if (noticeForm) {
        noticeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('noticeTitle').value;
            const content = document.getElementById('noticeContent').value;
            const noticeId = this.dataset.noticeId;

            if (typeof updateNotice === 'function' && typeof addNotice === 'function') {
                if (noticeId) {
                    // 수정
                    const result = updateNotice(parseInt(noticeId), title, content);
                    if (result.success) {
                        if (typeof showAlert === 'function') {
                            showAlert('공지사항이 수정되었습니다.', '알림');
                        } else {
                            alert('공지사항이 수정되었습니다.');
                        }
                        document.getElementById('noticeModal').style.display = 'none';
                        if (typeof renderNoticeList === 'function') {
                            renderNoticeList(1);
                        }
                    }
                } else {
                    // 작성
                    const result = addNotice(title, content);
                    if (result.success) {
                        if (typeof showAlert === 'function') {
                            showAlert('공지사항이 등록되었습니다.', '알림');
                        } else {
                            alert('공지사항이 등록되었습니다.');
                        }
                        document.getElementById('noticeModal').style.display = 'none';
                        if (typeof renderNoticeList === 'function') {
                            renderNoticeList(1);
                        }
                    } else {
                        if (typeof showAlert === 'function') {
                            showAlert(result.message, '알림');
                        } else {
                            alert(result.message);
                        }
                    }
                }
            }
        });
    }

    // 모달 닫기
    const closeModal = document.getElementById('closeModal');
    const closeDetailModal = document.getElementById('closeDetailModal');
    const cancelBtn = document.getElementById('cancelBtn');

    if (closeModal) {
        closeModal.onclick = () => {
            document.getElementById('noticeModal').style.display = 'none';
        };
    }

    if (closeDetailModal) {
        closeDetailModal.onclick = () => {
            document.getElementById('noticeDetailModal').style.display = 'none';
        };
    }

    if (cancelBtn) {
        cancelBtn.onclick = () => {
            document.getElementById('noticeModal').style.display = 'none';
        };
    }

    // 모달 배경 클릭 시 닫기
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
}

