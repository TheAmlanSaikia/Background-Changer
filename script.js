var btnClick = document.querySelector("#clickBtn");
var outputBody = document.querySelector("body");
var arrayColor = ["red","blue", "green", "light blue","violet","yellow"];


btnClick.addEventListener("click", ()=>{

    var mainIndex = Math.floor(Math.random()*arrayColor.length);
    console.log(mainIndex);
    console.log(arrayColor[mainIndex]);
    outputBody.style.backgroundColor = arrayColor[mainIndex];
    btnClick.style.backgroundColor = arrayColor[mainIndex];
})