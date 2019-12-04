//function that gets a character object and returns the div element with all information about character

const generatedDetailsCharacterView = function(character){
    let element = `<div>`;
    Object.keys(character).map(key => element = `${element}
    <h5>${key}: ${character[key]}</h5>`);
    element = `${element}
    </div>`;
    return element;
}
