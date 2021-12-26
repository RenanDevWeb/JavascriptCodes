const output = document.querySelector(".output");
const txt = document.querySelector("textarea");
/*
txt.addEventListener("change",textCounter);
txt.addEventListener("keyup",textCounter);
txt.addEventListener("keydown",textCounter);
*/
["keyup","keydown","change"].forEach(function(e){
    txt.addEventListener(e,textCounter);
})

const maxLength = 20;
const warnLength = 4;

function textCounter(e){
    let count = txt.value.length;
    if(count > maxLength){
        txt.value = txt.value.substring(0,maxLength);
    }
    if(count > warnLength){
        output.classList.add("red");
    }else{
        output.classList.remove("red");
    }
    output.innerHTML = (maxLength-count) + " characters left";
    
}



