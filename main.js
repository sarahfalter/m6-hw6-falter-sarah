
var background = document.getElementsByClassName("bg-box");

document.background.addEventListener("mouseenter", function () {
   document.getElementsByClassName("bg-box").style.backgroundColor = "red";
}, false
);






var newPara = document.createElement("p");

document.getElementById('box1').addEventListener("click"
,function() {
    newPara.innerHTML = "Oooh - so close, but no cigar";
    document.getElementById('new1').appendChild(newPara);
}, false
);

document.getElementById('box2').addEventListener("click"
, function () {
    newPara.innerHTML = "DING DING DING - We have a winner";
    document.getElementById('new2').appendChild(newPara);
}, false
);

document.getElementById('box3').addEventListener("click"
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
