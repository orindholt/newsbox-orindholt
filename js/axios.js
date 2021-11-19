const key = "CsZGAx8GwP1dlmWuflb94puYcOmdpaXP";
const categories = ["travel", "health", "sports"];

const ax = (category) => {
    let req = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${key}`;
    return axios(req, {mode: "cors"}).then(res => res.data.results);
}

categories.forEach(category => {
    let section = document.createElement("section");
    section.classList.add("Section");
    document.querySelector("#main").append(section);
    section.innerHTML += `
        <div class="d-f gap-3 p-2 bb-1-ice bt-1-ice">
            <div class="Section__icon br-full d-f jc-center ai-center">
                <img src="./assets/icn_surfing.svg" alt="Header Icon" class="w-auto">
            </div>
            <h2 class="Section__header">${category}</h2>
            <button class="ml-auto show-hide Section__btn"><i class="fas fa-chevron-right"></i></button>
        </div>`;
    ax(category).then(arr => {
        arr.forEach(item => {
            if(item.section == category){
                console.log(item);
                section.innerHTML += `
                <article class="Card">
                    <button class="Card__btn bg-sage"><i class="fas fa-inbox fs-l text-snow"></i></button>
                    <div class="Card__text bg-snow p-2">
                        <h3 class="Card__title">${item.title}</h3>
                        <p class="Card__abstract">${item.abstract}</p>
                    </div>
                </article>`;
            }
        });
    })
});





