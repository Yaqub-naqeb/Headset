"use strict";

const header = document.querySelector(".header"); 
const butns = document.querySelector(".men"); 


const close = document.querySelector(".cl");


butns.addEventListener("click", function () {
  
    header.classList.add("nav-open"); 

  });
close.addEventListener("click", function () {
  
    header.classList.remove("nav-open"); 

  });