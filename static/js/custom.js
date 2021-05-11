function changeVisibility(item){
    var x = document.getElementById(item);
    if(x.className == "w3-show"){
        x.className = "w3-hide"
    }
    else if (x.className == "w3-hide"){
        x.className = "w3-show"
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style = "background-color:rgba(15, 15, 15, 0.98); transition-property: background-color; transition-duration: 1s;"
    } 
    else {
        document.getElementById("navbar").style = "background-color:rgba(15, 15, 15, 0.85); transition-property: background-color; transition-duration: 1s;"
  }
}