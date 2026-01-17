const noBtn=document.getElementById("no");
noBtn.addEventListener("mouseenter",()=>{
    const x=Math.random()*100-225;
    const y=Math.random()*250-125;
    noBtn.style.transform=`translate(${x}px,${y}px)`;
});