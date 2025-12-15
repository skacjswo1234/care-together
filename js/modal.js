// 모달 유틸리티 함수

// 알림 모달 표시 (alert 대체)
function showAlert(message, title = '알림') {
    const modal = document.getElementById('alertModal');
    const modalTitle = document.getElementById('alertModalTitle');
    const modalMessage = document.getElementById('alertModalMessage');
    const confirmBtn = document.getElementById('alertModalConfirm');
    const closeBtn = document.getElementById('closeAlertModal');

    if (!modal || !modalTitle || !modalMessage) return;

    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'flex';

    // 이벤트 리스너 제거 후 재등록 (중복 방지)
    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
    
    const newCloseBtn = closeBtn.cloneNode(true);
    closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);

    newConfirmBtn.addEventListener('click', function closeModal() {
        modal.style.display = 'none';
    });

    newCloseBtn.addEventListener('click', function closeModal() {
        modal.style.display = 'none';
    });

    // 모달 배경 클릭 시 닫기
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// 확인 모달 표시 (confirm 대체)
function showConfirm(message, title = '확인', onConfirm = null, onCancel = null) {
    const modal = document.getElementById('confirmModal');
    const modalTitle = document.getElementById('confirmModalTitle');
    const modalMessage = document.getElementById('confirmModalMessage');
    const okBtn = document.getElementById('confirmModalOk');
    const cancelBtn = document.getElementById('confirmModalCancel');
    const closeBtn = document.getElementById('closeConfirmModal');

    if (!modal || !modalTitle || !modalMessage) return false;

    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'flex';

    // 이벤트 리스너 제거 후 재등록
    const newOkBtn = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);
    
    const newCancelBtn = cancelBtn.cloneNode(true);
    cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
    
    const newCloseBtn = closeBtn.cloneNode(true);
    closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);

    newOkBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        if (onConfirm) onConfirm();
    });

    newCancelBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        if (onCancel) onCancel();
    });

    newCloseBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        if (onCancel) onCancel();
    });

    // 모달 배경 클릭 시 닫기
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            if (onCancel) onCancel();
        }
    });

    return false; // 동기식 confirm과 달리 즉시 false 반환
}

