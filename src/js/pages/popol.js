const popolTitleImgBox = document.querySelector(".popol_title_box");
let popolTitleImg;

const init = () =>{
    console.log("work")
    popolTitleImg.addEventListener("contextmenu",e=>e.preventDefault());
}

if(popolTitleImgBox != null){
    popolTitleImg =  popolTitleImgBox.querySelector(".img_box");
    init();
}
console.log(popolTitleImgBox)