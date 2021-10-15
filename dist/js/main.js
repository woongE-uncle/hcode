(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";require("./partials/nav"),require("./pages/home");

},{"./pages/home":2,"./partials/nav":3}],2:[function(require,module,exports){
"use strict";var imgBox=document.querySelector(".home_img_box"),imgNodeList=document.querySelectorAll(".img"),imgArray=[],position=0,nextImg=function(){imgArray[position].classList.add("hidden"),position==imgArray.length-1&&(position=-1),imgArray[++position].classList.remove("hidden")},silder=function(){setInterval(nextImg,3e3)},createImgArray=function(){imgArray=Array.from(imgNodeList)},init=function(){createImgArray(),silder()};null!=imgBox&&init();

},{}],3:[function(require,module,exports){
"use strict";var navToggle=document.querySelector(".nav_toggle"),navIconBox=document.querySelector(".nav_icon_box"),navToggleIcon=document.querySelector("i"),dropDownContent=document.querySelector(".nav_dropdown"),navContainer=document.querySelector(".nav_container"),dropDownMenu=function(){console.log("work"),dropDownContent.classList.contains("show")?(dropDownContent.classList.remove("show"),dropDownContent.classList.add("hidden")):(dropDownContent.classList.remove("hidden"),dropDownContent.classList.add("show"))},init=function(){navIconBox.addEventListener("click",dropDownMenu)};

},{}]},{},[1]);
