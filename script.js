//your JS code here. If required.

let html = document.getElementsByTagName("html");

let body = document.getElementsByTagName("body")[0];

let ul = document.getElementsByTagName("ul")[0];

let element = document.getElementsByTagName("li")[4];


function domLevel(){
    let level = 1;
    while(element.parentElement){
        level++;
        element = element.parentElement;
    }
    return level;
}

alert("The Level of Element is " + domLevel());