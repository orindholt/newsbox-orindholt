const headerElement = document.querySelector(".Header");
const bodyElement = document.querySelector(".Body");
const rootElement = document.querySelector("html");

const arrowContainer = document.createElement("aside");
const arrowElement = document.createElement("div");
arrowElement.classList.add("arrow-round");
arrowContainer.classList.add("arrow-container");
bodyElement.append(arrowContainer);
arrowContainer.append(arrowElement);

let arrowHeight = arrowElement.offsetHeight;
let maxScroll = arrowHeight;
let touchStart;
let touchMove;
let interval;
let rotateAmount;
let opacityAmount;


bodyElement.addEventListener("touchstart", (e) => {
    touchStart = Math.floor(e.touches[0].clientY); 
    rotateAmount = 0;
    opacityAmount = 0;
});

bodyElement.addEventListener("touchmove", (e) => {
    touchMove = Math.floor(e.touches[0].clientY);
    if(touchMove>touchStart){
        bodyElement.style.overflow = "hidden";
        interval = (touchMove-touchStart)-arrowHeight*2;
        rotateAmount += 1.5;
        if(opacityAmount < 1) parseFloat((opacityAmount += 0.01).toFixed(3));
        if(rootElement.scrollTop == 0
            && interval < maxScroll
            && interval > -(maxScroll*3)){
            arrowContainer.style.top = `${interval}px`;  
            arrowElement.style.opacity = `${opacityAmount}`;
            arrowContainer.style.transform = `rotate(${rotateAmount}deg)`;
        }
    }
});

bodyElement.addEventListener("touchend", (e) => {
    if(interval >= maxScroll){
        arrowElement.style.opacity = "1";
        arrowContainer.classList.add("rotate-animation");
        setTimeout(()=>{
            window.location.reload();
        }, 1000);
    } else {
        bodyElement.style.removeProperty("overflow");
        arrowContainer.removeAttribute("style");
        arrowElement.removeAttribute("style");
    }
});
    