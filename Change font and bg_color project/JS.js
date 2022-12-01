let fontSizeEl = document.getElementById('fontSize');
let colorOptionsEl = document.getElementById('colorOptions')
let buttonEl = document.getElementById('button');
let textEl = document.getElementById('text')

function changeColor (event){
    let color = event.value;
    textEl.style.backgroundColor = color;
    textEl.style.color='white'
}
function changeFont(event){
    let fontEl = event.value;
    textEl.style.fontSize = fontEl+"px";
}

buttonEl.onclick = function(){
    textEl.style.backgroundColor = 'fuchsia';
    textEl.style.fontSize = '15px';
    textEl.style.color = 'black'
}
