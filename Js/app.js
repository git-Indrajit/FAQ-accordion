
let plus = document.querySelectorAll('.plus');
let cross = document.querySelectorAll('.cross');
let hidden = document.querySelectorAll('.hidden');
let para = document.querySelectorAll('.para');

for(let i = 0; i< plus.length;i++){
    plus[i].addEventListener('click',()=>{
        plus[i].classList.toggle('hidden');
        cross[i].classList.toggle('hidden');
        para[i].classList.toggle('hidden');
    });
}

for(let i=0; i <cross.length;i++){
    cross[i].addEventListener('click', function(){
        cross[i].classList.toggle('hidden');
        plus[i].classList.toggle('hidden');
        para[i].classList.toggle('hidden');
    })
}
