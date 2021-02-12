import defaultRef from './gallery-items.js';

//Делаем функцию c коснтурктором разметки==================
const makeLiImage = value => {
  //Создаю разметку================
  const liRef = document.createElement('li');
  liRef.classList.add('gallery__item');
  //console.log(liRef);

  const aRef = document.createElement('a');
  aRef.classList.add('gallery__link');
  aRef.setAttribute('href', `${value.original}`);

  const imgRef = document.createElement('img');
  imgRef.classList.add('gallery__image');
  imgRef.setAttribute('src', `${value.preview}`);
  imgRef.setAttribute('data-source', `${value.original}`);
  imgRef.setAttribute('alt', `${value.description}`);

  liRef.appendChild(aRef);
  aRef.appendChild(imgRef);

  return liRef;
};
//Нашли ЮЛ наш=================
const divRef = document.querySelector('ul');
//Проходим по массиву объектов мапОм и создаем разметку для каждого объекта
const imageList = defaultRef.map(value => makeLiImage(value));
console.log(imageList);
//Добавляю в ДОМ=============
divRef.append(...imageList);
