document.querySelector(".Main").addEventListener("touchstart", (e)=>{
    let touchElement = e.target.parentElement;
    let parentElement = touchElement.closest(".Card");
    if(e.target.parentElement.classList.contains("Card__text")){
        let touchCordStart = Math.floor(e.touches[0].clientX);
        let touchCordMove;
        let delBtn = parentElement.querySelector(".Card__btn");
        let btnWidth = delBtn.offsetWidth;

        if(touchElement.classList.contains("Card__text")){
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
            touchElement.addEventListener("touchend", (e) => {
                if(touchCordMove < touchCordStart-(btnWidth / 3)){
                    // snap to child
                    touchElement.style.transform = `translateX(-${btnWidth}px)`;
                } else {
                    // snap to 0
                    touchElement.style.transform = "translateX(0px)";
                }
            });
        }
        //del btn onclick
        delBtn.onclick = () => {
            delBtn.disabled = true;
            let userObj = {
                id: parentElement.getAttribute("data-number"),
                name: parentElement.querySelector(".Card__text").textContent
            }
            localStorage[`${userObj.id}`] = JSON.stringify(userObj);
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
                    element.classList.add("hide-animation");
                    element.style.pointerEvents = "none";
                });
            } else {
                e.target.style.transform = "rotate(0deg)";
                parentElement.querySelectorAll(".Card").forEach(element => {
                element.classList.remove("hide-animation");
                element.style.pointerEvents = "auto";
                });
            }
        };
        timePointerEvents(e.target, 1200);
    }
});

function timePointerEvents(element, time){
    element.style.pointerEvents = "none";
    setTimeout(()=>{
        element.style.pointerEvents = "auto"; 
    }, time);
}