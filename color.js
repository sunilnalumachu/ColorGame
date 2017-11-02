/**
 * Created by Sunil on 10/4/2017.
 */
var numsquares=6;
var colors = generaterandomcolors(numsquares);
var pickedcolor=pickcolor();
var ColorDisplay=document.querySelector("#ColorDisplay");
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var h1=document.querySelector("#h1");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function () {
     hardbtn.classList.remove("selected");
     easybtn.classList.add("selected");
    resetbutton.classList.remove("selected");
    message.textContent="";
     numsquares=3;
    colors = generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    ColorDisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})

hardbtn.addEventListener("click",function () {
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    resetbutton.classList.remove("selected");
    message.textContent="";
    numsquares=6;
    colors = generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    ColorDisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){

            squares[i].style.background=colors[i];
            squares[i].style.display="block";
    }
})

resetbutton.addEventListener("click", function () {
   colors= generaterandomcolors(numsquares);
   pickedcolor= pickcolor();
   ColorDisplay.textContent=pickedcolor;
   resetbutton.textContent="NewColor";
   h1.style.background="steelblue";
    message.textContent="";


    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }

})
ColorDisplay.textContent=pickedcolor;

for(var i=0;i< squares.length;i++){
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click", function() {
        var clickedcolor = this.style.background;
        if(clickedcolor === pickedcolor){
            message.textContent="Correct";
           changecolors(clickedcolor);
resetbutton.textContent="PlayAgain!!";
        }else
        {
            message.textContent="Try Again";
            this.style.background="black";

        }

    });
}

function changecolors(color){
    for(var i=0;i< squares.length;i++) {
            squares[i].style.background=color;
    }
    h1.style.background=color;
}

function pickcolor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generaterandomcolors(num){
    var arr=[]
    for(var i=0;i<num;i++){
arr.push(randomcolors())
    }
    return arr;
}
function randomcolors(){
    var r= Math.floor(Math.random() * 255);
    var g= Math.floor(Math.random() * 255);
    var b= Math.floor(Math.random() * 255);
    return"rgb(" + r + ", " + g + ", " + b + ")";
}