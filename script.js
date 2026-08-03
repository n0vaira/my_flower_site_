const btnONas = document.getElementById('btn-o-nas');
const infoBlock = document.getElementById('o-nas-info');
const closeBtn = document.getElementById('close-o-nas');

btnONas.addEventListener('click', function(){
    infoBlock.classList.toggle('hidden');
});

closeBtn. addEventListener('click', function(){
    infoBlock.classList.add('hidden');
});

const btnZakazat = document.getElementById('btn-zakazat');
const zakazatModal = document.getElementById('zakazat-modal');
const closeZakazat = document.getElementById('close-zakazat');
const zakazatForm = document.getElementById('zakazat-form');

btnZakazat.addEventListener('click', function(){
    zakazatModal.classList.toggle('hidden');
});

closeZakazat.addEventListener('click', function(){
    zakazatModal.classList.add('hidden');
});

zakazatForm.addEventListener('submit', function(event){
    event.preventDefault();
    zakazatForm.reset();
    zakazatModal.classList.add('hidden');
});

const btnBuket = document.getElementById('btn-buket');
const btnModal = document.getElementById('buket-modal');
const btnClose = document.getElementById('close-buket');
const buketForm = document.getElementById('buket-form');

btnBuket.addEventListener('click', function(){
    btnModal.classList.toggle('hidden');
});
btnClose.addEventListener('click', function(){
    btnModal.classList.add('hidden');
});
buketForm.addEventListener('submit', function(event){
    event.preventDefault();
    buketForm.reset();
    btnModal.classList.add('hidden');
});

const successModal = document.getElementById('success-modal')
const closeSuccess = document.getElementById('close-success')

closeSuccess.addEventListener('click', function(){
    successModal.classList.add('hidden');
});

zakazatForm.addEventListener('submit', function(event){
    event.preventDefault();
    zakazatForm.reset();
    zakazatModal.classList.add('hidden');
    successModal.classList.remove('hidden');
});

buketForm.addEventListener('submit', function(event){
    event.preventDefault();
    buketForm.reset();
    btnModal.classList.add('hidden');
    successModal.classList.remove('hidden');
});

const toTopBtn = document.getElementById('to-top');

window.addEventListener('scroll', function(){
    if (window.scrollY > 400) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
});

toTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});