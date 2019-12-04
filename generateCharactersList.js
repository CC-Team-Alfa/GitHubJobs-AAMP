//Function that with support from 'generatedShortCharacterView' returns a full list of characters (in short view)

const generateCharactersList = function(charactersList){
    let listElement = `<div>
    <ul>`; 
    charactersList.map(character => {
        listElement = `${listElement}
        <li>
            ${generatedShortCharacterView(character)}
        </li>`;
    });
    listElement = `${listElement}
    </ul>
</div>`;
    return listElement;
}
