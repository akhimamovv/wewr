let slider = document.getElementsByClassName('scrol__leng')[0];
let img = document.getElementsByClassName('scrol__img');
let left = document.getElementsByClassName('scrol__left')[0]
let right = document.getElementsByClassName('scrol__right')[0]
let leng = img.length;
let qq0 = 0

function fu() {
    slider.style.transform = `translateX(-${qq0 * 78}vw)`;
}

left.addEventListener('click', () => {
    qq0 = (qq0 - 1 + leng) % leng;
    fu();
});

right.addEventListener('click', () => {
qq0 = (qq0 + 1) % leng;
fu();
});