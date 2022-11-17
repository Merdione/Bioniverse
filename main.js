function dropdown() {
    var buttons = document.getElementById('buttons');
    if(buttons.style.display == "block") {
        buttons.style.display = "none";
        document.getElementById("buttons_menu_btn").style.rotate = "360deg";
   
        document.getElementById("buttons_view").style.display = "block";
     
    }
    else {
        buttons.style.display = "block";
        document.getElementById("buttons_menu_btn").style.rotate = "180deg";
        document.getElementById("buttons_view").style.display = "none";
       
    }
}

var control = 0;

setInterval(function() {
 
if(control == 3) {
    control = 0;
}
else {
    control++;
}

switch(control){
    case 1: img1();
    break;
    case 2: img2();
    break;
    case 3: img3();
    break;
    
}
  
},3000)

function img1() {
    document.getElementById("slider").style.backgroundImage ="url('img1.png')"
}
function img2() {
    document.getElementById("slider").style.backgroundImage ="url('img2.png')"
}
function img3() {
    document.getElementById("slider").style.backgroundImage ="url('img3.png')"
}

function btn4() {

}
function btn5() {
    
}

