const key = "CsZGAx8GwP1dlmWuflb94puYcOmdpaXP";
const categories = ["health", "sports", "travel"];

const ax = (category) => {
    let req = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${key}`;
    return axios(req, {mode: "cors"}).then(res => res.data.results);
}

function shortenStr(str, max){
    if(str.length <= max) return str;
    return str.substr(0, str.lastIndexOf(" ", max));
}

categories.forEach(category => {
    let section = document.createElement("section");
    section.classList.add("Section");
    document.querySelector("#main").append(section);
    section.innerHTML += `
    <div class="d-f gap-3 p-2 bb-1-ice bt-1-ice ai-center">
        <div class="Section__icon br-full d-f jc-center ai-center">
            <img src="./assets/icn_surfing.svg" alt="Header Icon" class="w-auto">
        </div>
        <h2 class="Section__header">${category}</h2>
        <button class="ml-auto Section__btn show-hide"><i class="fas fa-chevron-right"></i></button>
    </div>`;
    ax(category).then(arr => {
        arr.forEach(article => {
            if(article.section != "admin"){
                let cardElement = document.createElement("article");
                cardElement.classList.add("Card");
                cardElement.classList.add("hide-animation");
                cardElement.setAttribute("data-id", article.short_url);
                cardElement.innerHTML += `
                <button class="Card__btn bg-sage"><i class="fas fa-inbox fs-l text-snow"></i></button>
                <div class="Card__text bg-snow p-2">
                    <img src="${article.multimedia[0].url}" class="Card__img">
                    <div>
                        <h3 class="Card__title">${article.title}</h3>
                        <p class="Card__abstract">${shortenStr(article.abstract, 30)}...</p>
                    </div>
                </div>`;
                section.append(cardElement);
            }
        }); 
    });
});





