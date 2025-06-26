const clicProfil = document.getElementById('profil');
const fon = document.getElementById('teni');
const cart = document.getElementById('profil-lol');
const zac = document.getElementById('zacrit');
const upload = document.getElementById('upload');
const sertt = document.getElementById('sertt');
const avtor = document.getElementById('avtor');

// Показать модальное окно
clicProfil.addEventListener('click', () => {
  fon.style.display = 'block';
  cart.style.display = 'block';
});

// Закрыть модалку
zac.addEventListener('click', () => {
  fon.style.display = 'none';
  cart.style.display = 'none';
});

// Загрузка фото из localStorage
const savedImage = localStorage.getItem('userPhoto');
if (savedImage) {
  insertImage(savedImage);
}

// Клик по "+"
sertt.addEventListener('click', () => {
  upload.click();
});

// Клик по фото = тоже открыть загрузку
avtor.addEventListener('click', () => {
  upload.click();
});

// Загрузка нового изображения
upload.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      const imageData = this.result;
      insertImage(imageData);
      localStorage.setItem('userPhoto', imageData);
    });
    reader.readAsDataURL(file);
  }
});

// Функция вставки изображения
function insertImage(imageData) {
  avtor.innerHTML = `
    <img src="${imageData}" alt="Фото"  style="
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      display: block;
    ">
    <div class="dobav" id="sertt">+</div>
  `;
  // Переназначить обработчик (т.к. добалвили кнопку динамически)
  document.getElementById('sertt').addEventListener('click', () => {
    upload.click();
  });
}

