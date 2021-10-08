const dropDownBtn = document.querySelector(".nav_dropdown");
const dropDownContent = document.querySelector(".nav_dropdown");


const dropDownMenu = () =>{
    console.log("hello");
    if(dropDownContent.className == "show"){
        dropDownContent.className = "hidden";
    }else{
        dropDownContent.className = "show";
    }
}

const init = () =>{
    dropDownBtn.addEventListener("click",dropDownMenu)
}

// init();