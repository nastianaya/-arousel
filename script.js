const btnLeft = document.querySelector('.btn_left');
const btnRight = document.querySelector('.btn_right');

const bigPhoto = document.querySelector('.top>img');
const photos = document.querySelectorAll('.bottom img'); //перебирает все элементы селектора, формирует из них массив
let index = 0;

btnRight.addEventListener('click', function () {
    index = index + 1;
    if (index == photos.length){
        index = 0;
    }
    bigPhoto.src = photos[index].src;
    
})

btnLeft.addEventListener('click', function () {
    index = index - 1;
    if (index == -1) {
        index = photos.length -1 
    }
    bigPhoto.src = photos[index].src;
})

for (let i=0; i<photos.length; i++){
    photos[i].addEventListener('click', function () {
        index = i;
        bigPhoto.src = photos[i].src;
    })
}