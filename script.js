const modals = {
    about: document.getElementById('o-nas-info'),
    order: document.getElementById('zakazat-modal'),
    custom: document.getElementById('buket-modal'),
    success: document.getElementById('success-modal')
};

const successTitle = document.getElementById('success-title');
const successText = document.getElementById('success-text');

function closeAll() {
    Object.values(modals).forEach(function (modal) {
        modal.classList.add('hidden');
    });
}

function openModal(modal) {
    closeAll();
    modal.classList.remove('hidden');
}

function bindOpen(buttonId, modal) {
    document.getElementById(buttonId).addEventListener('click', function () {
        if (modal.classList.contains('hidden')) {
            openModal(modal);
        } else {
            modal.classList.add('hidden');
        }
    });
}

function bindClose(closeId, modal) {
    const closeEl = document.getElementById(closeId);
    closeEl.addEventListener('click', function () {
        modal.classList.add('hidden');
    });
    closeEl.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            modal.classList.add('hidden');
        }
    });
}

bindOpen('btn-o-nas', modals.about);
bindOpen('btn-zakazat', modals.order);
bindOpen('btn-buket', modals.custom);

bindClose('close-o-nas', modals.about);
bindClose('close-zakazat', modals.order);
bindClose('close-buket', modals.custom);
bindClose('close-success', modals.success);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeAll();
    }
});

function showSuccess(title, text) {
    successTitle.textContent = title;
    successText.textContent = text;
    openModal(modals.success);
}

function bindForm(formId, title, text) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.reset();
        showSuccess(title, text);
    });
}

bindForm('zakazat-form', 'Успешно!', 'Данные отправлены. Ожидайте звонка оператора.');
bindForm('buket-form', 'Успешно!', 'Данные отправлены. Ожидайте звонка оператора.');
bindForm('letter-form', 'Успешно!', 'Данные отправлены. Ожидайте звонка оператора.');

const toTopBtn = document.getElementById('to-top');

function updateToTop() {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150;
    if (window.scrollY > 400 && !nearBottom) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
}

window.addEventListener('scroll', updateToTop, { passive: true });
updateToTop();

toTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
