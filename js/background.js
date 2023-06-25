const imagesList = ["1.jpg", "2.jpg", "3.jpg"];
const bgImage = document.querySelector(".background .background__img");

const chosenImage = imagesList[Math.floor(Math.random() * imagesList.length)]; //이미지 랜덤
bgImage.src = `img/${chosenImage}`; //이미지 경로
