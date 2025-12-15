// 모바일 메뉴 토글
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link[data-menu]');
    const mobileSubmenuLinks = document.querySelectorAll('.mobile-submenu a[data-submenu]');

    // 모바일 메뉴 열기
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            mobileMenuToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // 모바일 메뉴 닫기
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
        // 모든 서브메뉴 닫기
        document.querySelectorAll('.mobile-menu-item').forEach(item => {
            item.classList.remove('active');
        });
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    }

    // 메인 메뉴 링크 클릭 (서브메뉴 자동 펼침)
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const menuItem = this.closest('.mobile-menu-item');
            const hasSubmenu = menuItem.querySelector('.mobile-submenu');
            
            if (hasSubmenu) {
                e.preventDefault();
                // 다른 메뉴 닫기
                document.querySelectorAll('.mobile-menu-item').forEach(item => {
                    if (item !== menuItem) {
                        item.classList.remove('active');
                    }
                });
                // 현재 메뉴 토글
                menuItem.classList.toggle('active');
            } else {
                // 서브메뉴가 없으면 바로 이동
                const menuType = this.getAttribute('data-menu');
                if (menuType && typeof subMenuData !== 'undefined') {
                    const firstSubmenu = subMenuData[menuType]?.[0];
                    if (firstSubmenu && typeof loadContent === 'function') {
                        e.preventDefault();
                        loadContent(firstSubmenu.id);
                        closeMobileMenu();
                    }
                }
            }
        });
    });

    // 서브메뉴 링크 클릭
    mobileSubmenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const submenuId = this.getAttribute('data-submenu');
            if (submenuId && typeof loadContent === 'function') {
                e.preventDefault();
                loadContent(submenuId);
                closeMobileMenu();
            }
        });
    });

    // HOME 링크 클릭
    const mobileHomeLink = document.getElementById('mobileHomeLink');
    if (mobileHomeLink) {
        mobileHomeLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeMobileMenu();
            
            // 현재 페이지가 index.html이면 최초 페이지로 이동
            const currentPath = window.location.pathname;
            const isIndexPage = currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/') || currentPath === '';
            
            if (isIndexPage) {
                // index.html에 있으면 최초 페이지(메인 인트로)로 이동
                if (typeof showMainIntro === 'function') {
                    showMainIntro();
                }
                // 히어로 이미지를 메인 이미지로 변경
                const mainVisual = document.querySelector('.main-visual');
                if (mainVisual) {
                    const isMobile = window.innerWidth <= 768;
                    const imagePath = isMobile ? 'hero-main-m.png' : 'hero-main.png';
                    mainVisual.style.backgroundImage = `url('${imagePath}')`;
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // 다른 페이지(login.html, signup.html 등)면 index.html로 이동
                window.location.href = 'index.html';
            }
        });
    }

    // 로그인 상태 확인 및 헤더 업데이트
    updateHeaderForAuth();

    // TOP 버튼 스크롤 이벤트
    const topBtn = document.getElementById('topBtn');
    if (topBtn) {
        // 스크롤 시 TOP 버튼 표시/숨김
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                topBtn.style.display = 'flex';
            } else {
                topBtn.style.display = 'none';
            }
        });

        // TOP 버튼 클릭 시 맨 위로 스크롤
        topBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// 인증 상태에 따른 헤더 업데이트
function updateHeaderForAuth() {
    const currentUser = getCurrentUser();
    const loginLink = document.getElementById('smLoginLink');
    const mobileLoginLink = document.getElementById('mobileLoginLink');
    
    if (currentUser) {
        if (loginLink) {
            loginLink.textContent = '로그아웃';
            loginLink.href = '#';
            loginLink.onclick = function(e) {
                e.preventDefault();
                logout();
            };
        }
        if (mobileLoginLink) {
            mobileLoginLink.textContent = '로그아웃';
            mobileLoginLink.href = '#';
            mobileLoginLink.onclick = function(e) {
                e.preventDefault();
                logout();
            };
        }
    }
}

// 로그아웃
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

