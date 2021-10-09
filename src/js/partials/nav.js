const navToggle = document.querySelector(".nav_toggle");
const navIconBox = document.querySelector(".nav_icon_box");
const navToggleIcon = document.querySelector("i");
const dropDownContent = document.querySelector(".nav_dropdown");
const navContainer = document.querySelector(".nav_container");

const dropDownMenu = () =>{
    console.log("work");
    if(dropDownContent.classList.contains("show")){
        dropDownContent.classList.remove("show");
        dropDownContent.classList.add("hidden");
    }else{
        dropDownContent.classList.remove("hidden");
        dropDownContent.classList.add("show")
    }
}

const init = () =>{
    navIconBox.addEventListener("click",dropDownMenu);
}

init();