const generatedDetailsCharacterView = function(character){
    let element = `<div>`;
    Object.keys(character).map(key => element = `${element}
    <h5>${key}: ${character[key]}</h5>`);
    element = `${element}
    </div>`;
    console.log(element);
}

generatedDetailsCharacterView({ _id: "5a05e2b252f721a3cf2ea33f", name: "Gryffindor", mascot: "lion", headOfHouse: "Minerva McGonagall", houseGhost: "Nearly Headless Nick", founder: "Goderic Gryffindor"});