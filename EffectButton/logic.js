
let btn = document.querySelector("#btn");

btn.addEventListener("mouseover" ,(event)=>{
    let X = event.pageX - btn.offsetLeft;
    let Y = event.pageY - btn.offsetTop;
    console.log("X:",X,"Y:",Y)
    btn.style.setProperty("--xPos",X+"px")
    btn.style.setProperty("--yPos",Y+"px")
})
