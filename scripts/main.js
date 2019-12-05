//Characters Logic
let f1 = document.getElementById('search-name');
let f2 = document.getElementById('search-filters');
function disable (f) {
    for (let i = 0; i < f.children.length; i++) {
        f.children[i].children[0].disabled = true;
    }
};
function unable (f) {
    for (let i = 0; i < f.children.length; i++) {
        f.children[i].children[0].disabled = false;
    }
};
let f1Active = true;
disable(f2);
f1.addEventListener('click', (e) => {
    if (!f1Active) {
        f1Active = true;
        disable(f2);
        unable(f1);
    }
});
f2.addEventListener('click', (e) => {
    if (f1Active) {
        f1Active = false;
        disable(f1);
        unable(f2);
    }
});
let btn = document.getElementById('find');
btn.addEventListener('click', (e) => {
    e.stopPropagation();
    let name = document.getElementById('name');
    let characterName = name.value.trim();
    name.innerText = "";
    //To Do: Display character with that charcterName
    console.log(characterName);
});


//Houses Logic
let generateHouseButton = document.getElementById('generate-house');
generateHouseButton.addEventListener('click', async () => {
    const houseDiv = document.createElement('div');
    const house = await getSortingHatDecision();
    const houseInfo = (await getHouse(house))[0];
    houseDiv.innerHTML = generateHouseElement(houseInfo);
    generateHouseButton.parentElement.appendChild(houseDiv);
}, { once: true});
