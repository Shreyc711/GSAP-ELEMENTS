function breakText(){
    var h1 = document.querySelector("h1")
var h1tx = h1.textContent
var splTxt = h1tx.split("");
var clutter = "";   
var halfVal = Math.floor(splTxt.length /2)

splTxt.forEach((elem,idx)=>{
   
   if(idx < halfVal){
     clutter += `<span class ="firstHalf">${elem}</span>`
   }
   else{
    clutter += `<span class ="secondHalf">${elem}</span>`
   }
})


h1.innerHTML = clutter
};

breakText();

gsap.from(".firstHalf",{
    y:100,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0
})

gsap.from(".secondHalf",{
    y:100,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})