const cardStorage = localStorage["cards"] ? JSON.parse(localStorage["cards"] ) : [];

document.querySelector(".Main").addEventListener("touchstart", (e)=>{
    let touchElement = e.target.parentElement;
    let parentElement = e.target.closest(".Card");
    if(touchElement.classList.contains("Card__text") || 
    touchElement.parentElement.classList.contains("Card__text")){
        touchElement = e.target.closest(".Card__text")
        let touchCordStart = Math.floor(e.touches[0].clientX);
        let touchCordMove;
        let delBtn = parentElement.querySelector(".Card__btn");
        let btnWidth = delBtn.offsetWidth;

        // touch move
        touchElement.addEventListener("touchmove", (e) => {
            touchCordMove = Math.floor(e.touches[0].clientX);
            // move functionality 
            if(touchCordMove < touchCordStart 
            && touchCordMove > touchCordStart-btnWidth){
                touchElement.style.transform = `translateX(${touchCordMove-touchCordStart}px)`;
            }
        });

        // touch end
        touchElement.addEventListener("touchend", () => {
            if(touchCordMove < touchCordStart-(btnWidth / 3)){
                // snap to child
                touchElement.style.transform = `translateX(-${btnWidth}px)`;
            } else {
                // snap to 0
                touchElement.style.transform = "translateX(0px)";
            }
        });
        //del btn onclick
        delBtn.onclick = () => {
            delBtn.disabled = true;
            cardStorage.push(parentElement.getAttribute("data-id"));
            localStorage["cards"] = JSON.stringify(cardStorage);
            parentElement.classList.add("del-animation");
            parentElement.style.pointerEvents = "none";
            setTimeout(()=>{
                parentElement.remove();
            }, 1200);
        };
    // show/hide
    } else if(touchElement.classList.contains("show-hide")){
        touchElement.onclick = ()=>{
            parentElement = e.target.closest(".Section");
            if(e.target.style.transform != "rotate(90deg)"){
                e.target.style.transform = "rotate(90deg)";
                parentElement.querySelectorAll(".Card").forEach(element => {
                    element.classList.remove("hide-animation");
                    element.style.pointerEvents = "auto";
                });
            } else {
                e.target.style.transform = "rotate(0deg)";
                parentElement.querySelectorAll(".Card").forEach(element => {
                    element.classList.add("hide-animation");
                    element.style.pointerEvents = "none";
                });
            }
        };
    }
});