const btnONas = document.getElementById('btn-o-nas');
const infoBlock = document.getElementById('o-nas-info');
const closeBtn = document.getElementById('close-o-nas');
const btnZakazat = document.getElementById('btn-zakazat');
const zakazatModal = document.getElementById('zakazat-modal');
const closeZakazat = document.getElementById('close-zakazat');
const zakazatForm = document.getElementById('zakazat-form');


btnONas.addEventListener('click', function(){
    infoBlock.classList.toggle('hidden');
});

closeBtn. addEventListener('click', function(){
    infoBlock.classList.add('hidden');
});


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