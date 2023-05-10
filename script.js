let btn = document.querySelector(".btn")
let box = document.querySelector(".box")



function  colorful() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}


btn.onclick = () =>{
    box.style.backgroundColor = "#" + colorful();
}