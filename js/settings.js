const categories = ["world", "health", "sports", "business",  "travel"];
categories.forEach(category => {
    document.querySelector("#setting-container").innerHTML += `
    <section class="Setting bb-1-ice">
        <h3 class="Setting__header">${category}</h3>
        <button class="Setting__btn">
            <div class="Setting__slider"></div>
        </button>
    </section>`;
});

document.querySelectorAll(".Setting__btn").forEach(btn => {
    let parentElement = btn.closest(".Setting");
    let headerTxt = parentElement.querySelector(".Setting__header").textContent;
    let slider = parentElement.querySelector(".Setting__slider");
    let button = parentElement.querySelector(".Setting__btn");
    if(localStorage[`${headerTxt}`] === "off"){
        slider.style.transform = "translateX(0)";
        button.style.backgroundColor = "#C8D1D3";
    }
    btn.addEventListener("click", (e)=>{        
        parentElement = e.target.closest(".Setting");
        headerTxt = parentElement.querySelector(".Setting__header").textContent;
        slider = parentElement.querySelector(".Setting__slider");
        button = parentElement.querySelector(".Setting__btn");
        if(localStorage[`${headerTxt}`] != "off"){
            localStorage[`${headerTxt}`] = "off";
            slider.style.transform = "translateX(0)";
            button.style.backgroundColor = "#C8D1D3";
        } else {
            localStorage[`${headerTxt}`] = "on";
            slider.removeAttribute("style");
            button.removeAttribute("style");
        }
    });
});

document.querySelector("#dark-mode").addEventListener("click", ()=>{
        if(localStorage["darkmode"] != "on"){
            localStorage["darkmode"] = "on";
        } else {
            localStorage["darkmode"] = "off";
        }
});