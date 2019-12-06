//Function that with support from 'generatedShortCharacterView' returns a full list of characters (in short view)

const generateCharactersList = function(charactersList){
    if (charactersList.length == 0) return 'Could not find any character matching specified filters';
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
