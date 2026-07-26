const btnONas = document.getElementById('btn-o-nas');
const infoBlock = document.getElementById('o-nas-info');
const closeBtn = document.getElementById('close-o-nas');

btnONas.addEventListener('click', function(){
    infoBlock.classList.toggle('hidden');
});

closeBtn. addEventListener('click', function(){
    infoBlock.classList.add('hidden');
});