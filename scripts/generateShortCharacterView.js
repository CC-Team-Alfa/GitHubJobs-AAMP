// array with properties that are accepted by the function
const chosenProperties = ['name', 'house', 'school', 'wand'];

//function that gets a character object and returns the div element with only few information about character
const generatedShortCharacterView = function(character){
    let element = `<div>`;
    Object.keys(character).map(key => {
        if(chosenProperties.includes(key)){
            element = `${element}
                <h6>${key}: ${character[key]}</h6>`;
        }
    });
    element = `${element}
            </div>`;
    return element;
}
