// 공통 헤더 HTML 생성 함수
function createHeader(activeMenu) {
    const headerHTML = `
    <div id="hd_wrapper">
        <div id="logo">
            <a href="index.html"><img src="care-togeter-logo-white.jpg" alt="의정부시 다함께돌봄센터 9호점"></a>
        </div>
        <nav id="hd_gnb">
            <div class="gnb_wrap">
                <ul id="pc_gnb_1dul">
                    <li class="gnb_1dli ${activeMenu === 'company' ? 'gnb_1dli_on' : ''}">
                        <a href="greeting.html" class="gnb_1da">기관안내</a>
                        <span class="bg">하위분류</span>
                        <ul class="gnb_2dul">
                            <li class="gnb_2dli"><a href="greeting.html" class="gnb_2da">인사말</a></li>
                        </ul>
                    </li>
                    <li class="gnb_1dli ${activeMenu === 'program' ? 'gnb_1dli_on' : ''}">
                        <a href="program.html" class="gnb_1da">돌봄 프로그램</a>
                        <span class="bg">하위분류</span>
                        <ul class="gnb_2dul">
                            <li class="gnb_2dli"><a href="program.html" class="gnb_2da">다함께돌봄사업 안내</a></li>
                        </ul>
                    </li>
                    <li class="gnb_1dli ${activeMenu === 'community' ? 'gnb_1dli_on' : ''}">
                        <a href="notice.html" class="gnb_1da">커뮤니티</a>
                        <span class="bg">하위분류</span>
                        <ul class="gnb_2dul">
                            <li class="gnb_2dli"><a href="notice.html" class="gnb_2da">공지사항</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="sm_menu">
                    <ul class="sns_icon">
                        <li><a href="javascript:void(0);" onclick="if(typeof showAlert === 'function') { showAlert('준비 중입니다.', '알림'); } else { alert('준비 중입니다.'); }"><i class="fa fa-instagram"></i><br><p>인스타그램</p></a></li>
                        <li><a href="javascript:void(0);" onclick="if(typeof showAlert === 'function') { showAlert('준비 중입니다.', '알림'); } else { alert('준비 중입니다.'); }"><i class="fa fa-facebook"></i><br><p>페이스북</p></a></li>
                    </ul>
                    <div class="sm_menu_links">
                        <a href="index.html">HOME</a> | 
                        <a href="login.html" id="smLoginLink">로그인</a> | 
                        <a href="signup.html">회원가입</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    `;
    return headerHTML;
}

