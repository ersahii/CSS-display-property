function handleChange (element){
    switch(element.id){
        case "blockHeight":
            document.querySelector(".red").style.height = element.value+"px";
            break;
        case "blockWidth":
            document.querySelector(".red").style.width = element.value+"px";
            break;
        case "inlineHeight":
            document.querySelector(".green").style.height = element.value+"px";
            break;
        case "inlineWidth":
            document.querySelector(".green").style.width = element.value+"px";
            break;
        case "inlineBlockHeight":
            document.querySelector(".blue").style.height = element.value+"px";
            break;
        case "inlineBlockWidth":
            document.querySelector(".blue").style.width = element.value+"px";
            break;
        default: 
        console.log("error");
        break;
    }
}
function block(){
    let Elements =document.querySelectorAll('.box');
    for( let i = 0; i < Elements.length; i++){
        Elements[i].style.display = "block";
    }
}
function inline(){
    let Elements =document.querySelectorAll('.box');
    for( let i = 0; i < Elements.length; i++){
        Elements[i].style.display = "inline";
    }
}
function inlineBlock(){
    let Elements =document.querySelectorAll('.box');
    for( let i = 0; i < Elements.length; i++){
        Elements[i].style.display = "inline-block";
    }
}