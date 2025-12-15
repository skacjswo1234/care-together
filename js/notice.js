// 공지사항 데이터 관리
const NOTICE_STORAGE_KEY = 'care_together_notices';
const COMMENT_STORAGE_KEY = 'care_together_comments';

// 초기 공지사항 데이터 설정
function initializeNotices() {
    const notices = getNotices();
    if (notices.length === 0) {
        // 샘플 공지사항 생성
        const sampleNotices = [
            {
                id: 1,
                title: '의정부시 다함께돌봄센터 9호점 개소 안내',
                content: '의정부시 다함께돌봄센터 9호점이 개소되었습니다.\n\n아이들과 부모님들께 따뜻하고 안전한 돌봄 서비스를 제공하겠습니다.\n\n많은 관심과 이용 부탁드립니다.',
                author: '관리자',
                date: new Date('2024-01-15').toISOString(),
                views: 125
            },
            {
                id: 2,
                title: '2024년 상반기 프로그램 안내',
                content: '2024년 상반기 돌봄 프로그램을 안내드립니다.\n\n- 학습 지원 프로그램\n- 체험 활동 프로그램\n- 신체 활동 프로그램\n\n자세한 내용은 센터로 문의해 주시기 바랍니다.',
                author: '관리자',
                date: new Date('2024-01-20').toISOString(),
                views: 98
            },
            {
                id: 3,
                title: '방학 기간 운영 시간 안내',
                content: '방학 기간 중 운영 시간이 변경됩니다.\n\n- 평일: 오전 9시 ~ 오후 6시\n- 주말 및 공휴일: 휴관\n\n이용에 참고하시기 바랍니다.',
                author: '관리자',
                date: new Date('2024-01-25').toISOString(),
                views: 87
            }
        ];
        saveNotices(sampleNotices);
    }
}

// 공지사항 목록 가져오기
function getNotices() {
    const noticesJson = localStorage.getItem(NOTICE_STORAGE_KEY);
    return noticesJson ? JSON.parse(noticesJson) : [];
}

// 공지사항 저장
function saveNotices(notices) {
    localStorage.setItem(NOTICE_STORAGE_KEY, JSON.stringify(notices));
}

// 공지사항 추가
function addNotice(title, content) {
    const notices = getNotices();
    const currentUser = getCurrentUser();
    
    if (!currentUser) {
        return { success: false, message: '로그인이 필요합니다.' };
    }

    const newNotice = {
        id: notices.length > 0 ? Math.max(...notices.map(n => n.id)) + 1 : 1,
        title: title,
        content: content,
        author: currentUser.name || currentUser.id,
        date: new Date().toISOString(),
        views: 0
    };

    notices.unshift(newNotice); // 최신 글이 위로
    saveNotices(notices);
    return { success: true, notice: newNotice };
}

// 공지사항 수정
function updateNotice(id, title, content) {
    const notices = getNotices();
    const noticeIndex = notices.findIndex(n => n.id === id);
    
    if (noticeIndex === -1) {
        return { success: false, message: '공지사항을 찾을 수 없습니다.' };
    }

    notices[noticeIndex].title = title;
    notices[noticeIndex].content = content;
    saveNotices(notices);
    return { success: true };
}

// 공지사항 삭제
function deleteNotice(id) {
    const notices = getNotices();
    const filteredNotices = notices.filter(n => n.id !== id);
    saveNotices(filteredNotices);
    return { success: true };
}

// 공지사항 조회수 증가
function incrementViews(id) {
    const notices = getNotices();
    const notice = notices.find(n => n.id === id);
    if (notice) {
        notice.views++;
        saveNotices(notices);
    }
}

// 공지사항 상세 가져오기
function getNoticeById(id) {
    const notices = getNotices();
    return notices.find(n => n.id === id);
}

// 날짜 포맷팅
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

// 날짜 시간 포맷팅 (댓글용)
function formatDateTime(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}`;
}

// 댓글 관리 함수들
function getComments(noticeId) {
    const commentsJson = localStorage.getItem(COMMENT_STORAGE_KEY);
    const allComments = commentsJson ? JSON.parse(commentsJson) : [];
    return allComments.filter(c => c.noticeId === noticeId).sort((a, b) => new Date(a.date) - new Date(b.date));
}

function saveComments(comments) {
    localStorage.setItem(COMMENT_STORAGE_KEY, JSON.stringify(comments));
}

function getAllComments() {
    const commentsJson = localStorage.getItem(COMMENT_STORAGE_KEY);
    return commentsJson ? JSON.parse(commentsJson) : [];
}

function addComment(noticeId, content) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return { success: false, message: '로그인이 필요합니다.' };
    }

    if (!content || content.trim() === '') {
        return { success: false, message: '댓글 내용을 입력해주세요.' };
    }

    const allComments = getAllComments();
    const newComment = {
        id: allComments.length > 0 ? Math.max(...allComments.map(c => c.id)) + 1 : 1,
        noticeId: noticeId,
        author: currentUser.name || currentUser.id,
        authorId: currentUser.id,
        content: content.trim(),
        date: new Date().toISOString()
    };

    allComments.push(newComment);
    saveComments(allComments);
    return { success: true, comment: newComment };
}

function updateComment(commentId, content) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return { success: false, message: '로그인이 필요합니다.' };
    }

    const allComments = getAllComments();
    const commentIndex = allComments.findIndex(c => c.id === commentId);
    
    if (commentIndex === -1) {
        return { success: false, message: '댓글을 찾을 수 없습니다.' };
    }

    const comment = allComments[commentIndex];
    if (comment.authorId !== currentUser.id && currentUser.role !== 'admin') {
        return { success: false, message: '댓글을 수정할 권한이 없습니다.' };
    }

    allComments[commentIndex].content = content.trim();
    allComments[commentIndex].date = new Date().toISOString();
    saveComments(allComments);
    return { success: true };
}

function deleteComment(commentId) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        return { success: false, message: '로그인이 필요합니다.' };
    }

    const allComments = getAllComments();
    const commentIndex = allComments.findIndex(c => c.id === commentId);
    
    if (commentIndex === -1) {
        return { success: false, message: '댓글을 찾을 수 없습니다.' };
    }

    const comment = allComments[commentIndex];
    if (comment.authorId !== currentUser.id && currentUser.role !== 'admin') {
        return { success: false, message: '댓글을 삭제할 권한이 없습니다.' };
    }

    allComments.splice(commentIndex, 1);
    saveComments(allComments);
    return { success: true };
}

// 댓글 목록 렌더링
function renderCommentsList(noticeId) {
    const commentsList = document.getElementById('commentsList');
    const commentsCount = document.getElementById('commentsCount');
    if (!commentsList) return;

    const comments = getComments(noticeId);
    const currentUser = getCurrentUser();

    if (commentsCount) {
        commentsCount.textContent = comments.length;
    }

    if (comments.length === 0) {
        commentsList.innerHTML = '<p class="no-comments">등록된 댓글이 없습니다.</p>';
        return;
    }

    commentsList.innerHTML = comments.map(comment => `
        <div class="comment-item" data-comment-id="${comment.id}">
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-date">${formatDateTime(comment.date)}</span>
            </div>
            <div class="comment-content-wrapper">
                <div class="comment-content" id="commentContent_${comment.id}">${comment.content.replace(/\n/g, '<br>')}</div>
                <textarea class="comment-edit-input" id="commentEdit_${comment.id}" style="display: none;">${comment.content}</textarea>
            </div>
            ${currentUser && (currentUser.id === comment.authorId || currentUser.role === 'admin') ? `
                <div class="comment-actions">
                    <button class="comment-edit-btn" onclick="editComment(${comment.id})">수정</button>
                    <button class="comment-delete-btn" onclick="deleteCommentConfirm(${comment.id})">삭제</button>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// 댓글 수정 모드 전환
function editComment(commentId) {
    const contentDiv = document.getElementById(`commentContent_${commentId}`);
    const editTextarea = document.getElementById(`commentEdit_${commentId}`);
    const commentItem = document.querySelector(`[data-comment-id="${commentId}"]`);
    
    if (!contentDiv || !editTextarea) return;

    if (contentDiv.style.display === 'none') {
        // 저장 모드
        const newContent = editTextarea.value.trim();
        if (!newContent) {
            if (typeof showAlert === 'function') {
                showAlert('댓글 내용을 입력해주세요.', '알림');
            } else {
                alert('댓글 내용을 입력해주세요.');
            }
            return;
        }

        if (typeof updateComment === 'function') {
            const result = updateComment(commentId, newContent);
            if (result.success) {
                const noticeId = parseInt(commentItem.closest('.notice-detail-page')?.getAttribute('data-notice-id') || 
                    window.currentNoticeId);
                if (noticeId && typeof renderCommentsList === 'function') {
                    renderCommentsList(noticeId);
                }
            } else {
                if (typeof showAlert === 'function') {
                    showAlert(result.message, '알림');
                } else {
                    alert(result.message);
                }
            }
        }
    } else {
        // 수정 모드
        contentDiv.style.display = 'none';
        editTextarea.style.display = 'block';
        editTextarea.focus();
        
        // 버튼 텍스트 변경
        const editBtn = commentItem.querySelector('.comment-edit-btn');
        if (editBtn) {
            editBtn.textContent = '저장';
            editBtn.onclick = () => editComment(commentId);
        }
    }
}

// 댓글 삭제 확인
function deleteCommentConfirm(commentId) {
    const confirmMessage = '정말 삭제하시겠습니까?';
    
    if (typeof showConfirm === 'function') {
        showConfirm(confirmMessage, '확인', function() {
            if (typeof deleteComment === 'function') {
                const result = deleteComment(commentId);
                if (result.success) {
                    const commentItem = document.querySelector(`[data-comment-id="${commentId}"]`);
                    const noticeId = parseInt(commentItem?.closest('.notice-detail-page')?.getAttribute('data-notice-id') || 
                        window.currentNoticeId);
                    if (noticeId && typeof renderCommentsList === 'function') {
                        renderCommentsList(noticeId);
                    }
                } else {
                    if (typeof showAlert === 'function') {
                        showAlert(result.message, '알림');
                    } else {
                        alert(result.message);
                    }
                }
            }
        });
    } else if (confirm(confirmMessage)) {
        if (typeof deleteComment === 'function') {
            const result = deleteComment(commentId);
            if (result.success) {
                const commentItem = document.querySelector(`[data-comment-id="${commentId}"]`);
                const noticeId = parseInt(commentItem?.closest('.notice-detail-page')?.getAttribute('data-notice-id') || 
                    window.currentNoticeId);
                if (noticeId && typeof renderCommentsList === 'function') {
                    renderCommentsList(noticeId);
                }
            } else {
                alert(result.message);
            }
        }
    }
}

// 공지사항 목록 렌더링 (메인 페이지용 - 최신 5개)
function renderLatestNotices() {
    const noticeList = document.getElementById('latestNotices');
    if (!noticeList) return;

    const notices = getNotices().slice(0, 5);
    
    if (notices.length === 0) {
        noticeList.innerHTML = '<p class="no-notice">등록된 공지사항이 없습니다.</p>';
        return;
    }

    noticeList.innerHTML = notices.map(notice => `
        <div class="notice-item" onclick="if(typeof loadContent === 'function') { loadContent('notice'); } else { window.location.href='index.html'; }">
            <div class="notice-item-title">${notice.title}</div>
            <div class="notice-item-meta">
                <span>${formatDate(notice.date)}</span>
                <span>조회수: ${notice.views}</span>
            </div>
        </div>
    `).join('');
}

// 공지사항 목록 렌더링 (공지사항 페이지용)
function renderNoticeList(page = 1, itemsPerPage = 10) {
    const tbody = document.getElementById('noticeListBody');
    if (!tbody) return;

    const notices = getNotices();
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageNotices = notices.slice(startIndex, endIndex);
    const totalPages = Math.ceil(notices.length / itemsPerPage);

    if (pageNotices.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 40px;">등록된 공지사항이 없습니다.</td></tr>';
        return;
    }

    tbody.innerHTML = pageNotices.map((notice, index) => `
        <tr>
            <td class="col-no">${notices.length - startIndex - index}</td>
            <td class="col-title">
                <a href="#" onclick="event.preventDefault(); if(typeof loadNoticeDetail === 'function') { loadNoticeDetail(${notice.id}); } else if(typeof showNoticeDetail === 'function') { showNoticeDetail(${notice.id}); }">${notice.title}</a>
            </td>
            <td class="col-author">${notice.author}</td>
            <td class="col-date">${formatDate(notice.date)}</td>
            <td class="col-views">${notice.views}</td>
        </tr>
    `).join('');

    // 페이지네이션 렌더링
    renderPagination(page, totalPages);
}

// 페이지네이션 렌더링
function renderPagination(currentPage, totalPages) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';
    
    // 이전 페이지 버튼
    paginationHTML += `<button onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>이전</button>`;

    // 페이지 번호 버튼
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            paginationHTML += `<button onclick="goToPage(${i})" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            paginationHTML += `<button disabled>...</button>`;
        }
    }

    // 다음 페이지 버튼
    paginationHTML += `<button onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>다음</button>`;

    pagination.innerHTML = paginationHTML;
}

// 페이지 이동
let currentPage = 1;
function goToPage(page) {
    const notices = getNotices();
    const totalPages = Math.ceil(notices.length / 10);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderNoticeList(currentPage);
}

// 공지사항 상세 보기
function showNoticeDetail(id) {
    const notice = getNoticeById(id);
    if (!notice) return;

    incrementViews(id);

    // 동적 콘텐츠로 전환
    if (typeof loadNoticeDetail === 'function') {
        loadNoticeDetail(id);
    } else {
        // fallback: 모달로 표시
        const modal = document.getElementById('noticeDetailModal');
        const detailTitle = document.getElementById('detailTitle');
        const detailAuthor = document.getElementById('detailAuthor');
        const detailDate = document.getElementById('detailDate');
        const detailViews = document.getElementById('detailViews');
        const detailContent = document.getElementById('detailContent');
        const detailActions = document.getElementById('detailActions');

        detailTitle.textContent = notice.title;
        detailAuthor.textContent = `작성자: ${notice.author}`;
        detailDate.textContent = `작성일: ${formatDate(notice.date)}`;
        detailViews.textContent = `조회수: ${notice.views}`;
        detailContent.textContent = notice.content;

        // 관리자만 수정/삭제 버튼 표시
        const currentUser = getCurrentUser();
        if (currentUser && currentUser.role === 'admin') {
            detailActions.style.display = 'flex';
            document.getElementById('editBtn').onclick = () => editNotice(id);
            document.getElementById('deleteBtn').onclick = () => deleteNoticeConfirm(id);
        } else {
            detailActions.style.display = 'none';
        }

        modal.style.display = 'flex';
    }
}

// 공지사항 작성 모달 열기
function openNoticeModal(noticeId = null) {
    const modal = document.getElementById('noticeModal');
    const form = document.getElementById('noticeForm');
    const modalTitle = document.getElementById('modalTitle');
    const titleInput = document.getElementById('noticeTitle');
    const contentInput = document.getElementById('noticeContent');

    if (noticeId) {
        // 수정 모드
        const notice = getNoticeById(noticeId);
        modalTitle.textContent = '공지사항 수정';
        titleInput.value = notice.title;
        contentInput.value = notice.content;
        form.dataset.noticeId = noticeId;
    } else {
        // 작성 모드
        modalTitle.textContent = '공지사항 작성';
        titleInput.value = '';
        contentInput.value = '';
        delete form.dataset.noticeId;
    }

    modal.style.display = 'flex';
}

// 공지사항 수정
function editNotice(id) {
    document.getElementById('noticeDetailModal').style.display = 'none';
    openNoticeModal(id);
}

// 공지사항 삭제 확인
function deleteNoticeConfirm(id) {
    if (confirm('정말 삭제하시겠습니까?')) {
        deleteNotice(id);
        // 모달이 열려있으면 닫기
        const modal = document.getElementById('noticeDetailModal');
        if (modal) {
            modal.style.display = 'none';
        }
        // 상세 페이지가 열려있으면 목록으로 이동
        if (document.getElementById('mainContent') && document.querySelector('.notice-detail-page')) {
            if (typeof loadContent === 'function') {
                loadContent('notice');
            }
        } else {
            renderNoticeList(currentPage);
        }
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeNotices();

    // 공지사항 페이지인 경우
    if (document.getElementById('noticeListBody')) {
        renderNoticeList(1);

        // 글쓰기 버튼 표시 (관리자만)
        const currentUser = getCurrentUser();
        const writeBtn = document.getElementById('writeNoticeBtn');
        if (currentUser && currentUser.role === 'admin' && writeBtn) {
            writeBtn.style.display = 'block';
            writeBtn.onclick = () => openNoticeModal();
        }

        // 공지사항 작성 폼 처리
        const noticeForm = document.getElementById('noticeForm');
        if (noticeForm) {
            noticeForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const title = document.getElementById('noticeTitle').value;
                const content = document.getElementById('noticeContent').value;
                const noticeId = this.dataset.noticeId;

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
                        // 상세 페이지가 열려있으면 상세 페이지로 다시 이동
                        if (document.getElementById('mainContent') && document.querySelector('.notice-detail-page')) {
                            if (typeof loadNoticeDetail === 'function') {
                                loadNoticeDetail(parseInt(noticeId));
                            }
                        } else {
                            renderNoticeList(currentPage);
                        }
                    } else {
                        if (typeof showAlert === 'function') {
                            showAlert(result.message, '알림');
                        } else {
                            alert(result.message);
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
                        renderNoticeList(1);
                    } else {
                        if (typeof showAlert === 'function') {
                            showAlert(result.message, '알림');
                        } else {
                            alert(result.message);
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

    // 메인 페이지인 경우
    if (document.getElementById('latestNotices')) {
        renderLatestNotices();
    }
});

