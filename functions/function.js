window.onload = tagElements();


function tagElements(){
    var item = document.getElementsByClassName("firstButton");
    for(var i = 0; i<item.length;i++){
        item[i].addEventListener("click", generateImages);
    }
}


function generateImages(){
    var fileCount = 5;
    i=1;
    var year = this.innerHTML;
    console.log(year);
    if(document.getElementById("img1")){
        while(i<fileCount){
            var elem = document.getElementById("img"+i)
            elem.parentNode.removeChild(elem);
            i=i+1;
        }
    }
    i=1;
    while(i<fileCount){
        var image = document.createElement("img");
        document.getElementById("col-sm-9").appendChild(image);
        image.id = "img"+i;
        image.src = year +"/download"+i+".jpg";
        image.addEventListener("click",centerImage);
        i=i+1; 
    }
}

var repeater = 0;

function centerImage(){
    var image = this.src;
    var pointer = this.id;
    console.log("click");
    var element = document.getElementById(pointer);
    console.log(element);
    if (repeater == 0){
        element.style.position = "absolute";
        element.style.left = "10%";
        element.style.top = "20%";
        element.style.height = "600px";
        element.style.width = "900px";
        repeater = 1;
    }
    else{
        element.style.position = "static";
        element.style.left = "0%";
        element.style.top = "0%";
        element.style.height = "200px";
        element.style.width = "200px";
        repeater = 0;
    }

}