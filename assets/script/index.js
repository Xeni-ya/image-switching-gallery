let showMessage = () => console.log('Я учу JavaScript!');
showMessage();

// Создай галерею переключения изображений. В ней будет две кнопки: вперёд и назад, которые должны переключать изображение (в галерее пока будет 2 картинки, но если можете больше, то делайте).

const image = document.getElementById('elem-img');
console.log(image);

function addImage() {
  image.src = './assets/img/zoe-gayah-jonker-G7kUPmzi80E.jpg';
}