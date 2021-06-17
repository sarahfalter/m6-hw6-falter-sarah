
var change_color = document.getElementsByClassName('bg-box')

function changeColor() {
    for (i = 0; i < change_color.length; i++) {
        change_color[i].classList.toggle('bgcolor');
    }
}


for (i = 0; i < change_color.length; i++) {
    change_color[i].addEventListener('mouseenter', changeColor);
    change_color[i].addEventListener('mouseleave', changeColor);
}


var newPara = document.createElement("p");

document.getElementsByClassName('box1')[0].addEventListener("click"
,function() {
    newPara.innerHTML = "Oooh - so close, but no cigar";
    document.getElementById('new1').appendChild(newPara);
}, false
);

document.getElementsByClassName('box2')[0].addEventListener("click"
, function () {
    newPara.innerHTML = "DING DING DING - We have a winner";
    document.getElementById('new2').appendChild(newPara);
}, false
);

document.getElementsByClassName('box3')[0].addEventListener("click"
, function () {
    newPara.innerHTML = "Oops, butter luck next time";
    document.getElementById('new3').appendChild(newPara);
}, false
);

var btn = document.createElement("button");

document.getElementById('main').addEventListener("click"
, function() {
    btn.innerHTML = "<a href='index.html'>Start Over</a>";
    document.getElementById('main').appendChild(btn);
}, false 
); 
