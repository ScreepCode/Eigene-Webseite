function changeVisibility(item){
    var x = document.getElementById(item);
    if(x.className == "w3-show"){
        x.className = "w3-hide"
    }
    else if (x.className == "w3-hide"){
        x.className = "w3-show"
    }
}