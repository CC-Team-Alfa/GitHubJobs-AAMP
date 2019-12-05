//Characters Logic
let f1 = document.getElementById('search-name');
let f2 = document.getElementById('search-filters');
function disable (f) {
    for (let i = 0; i < f.children.length; i++) {
        f.children[i].children[0].disabled = true;
        f.children[i].children[0].style.opacity = 0.5;
    }
};
function allow (f) {
    for (let i = 0; i < f.children.length; i++) {
        f.children[i].children[0].disabled = false;
        f.children[i].children[0].style.opacity = 1;
    }
};
let f1Active = true;
disable(f2);
f1.addEventListener('click', (e) => {
    if (!f1Active) {
        f1Active = true;
        disable(f2);
     allow(f1);
    }
});
f2.addEventListener('click', (e) => {
    if (f1Active) {
        f1Active = false;
        disable(f1);
     allow(f2);
    }
});

let btn = document.getElementById('find');
let result = document.getElementById('result');

async function findAndGenerateByName (name) {
    let character = (await getCharacters({name: name}))[0];
    if (!character) {
        return `There is no such character as '${name}'`
    }
    return generatedDetailsCharacterView(character);
}

async function findAndGenerateByFilters (filters) {
    let characters = await getCharacters(filters);
    return generateCharactersList(characters);
}

btn.addEventListener('click', async () => {
    if(f1Active) {
        result.innerHTML = "";
        let name = document.getElementById('name');
        let characterName = name.value.trim();
        result.innerHTML = await findAndGenerateByName(characterName);
    }
    else {
        result.innerHTML = "";
        filters = {};
        for (let i = 0; i < f2.children.length-1; i++) {
            let filter = f2.children[i].children[0];
            if(filter.value === 'true'){
                filters[filter.name] = true;
            }
            else if(filter.value === 'false'){
                filters[filter.name] = false;   
            }
            else {
                filter.value != 'none' ? filters[filter.name] = filter.value : null;
            }
        }
        result.innerHTML = await findAndGenerateByFilters(filters);
    }
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

document.body.addEventListener('dblclick', (e) => {
   if (e.shiftKey)
    document.body.innerHTML = `<img src="./assets/images/hariPota.jpg">`
});
