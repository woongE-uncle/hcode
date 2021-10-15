const imgBox = document.querySelector(".home_img_box");
const imgNodeList = document.querySelectorAll(".img");


let imgArray = [];
let position = 0;

const nextImg = () =>{
    imgArray[position].classList.add("hidden");
    if(position == imgArray.length-1){
        position = -1;
    }
    imgArray[++position].classList.remove("hidden");
}

const silder = () =>{
    setInterval(nextImg,3000);
}

const createImgArray = () =>{
    imgArray = Array.from(imgNodeList);
}

const init = () =>{
    createImgArray();
    silder();
}

if(imgBox != null){
    init();
}