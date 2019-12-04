/*
Function; gets the list of characters matching the objcet parameter condition
Parameter is an object with strictly defined key value pairs
1) FOR KEYS = name, house, patronus, species, bloodStatus, role, school, alias, wand, boggart, VALUE IS: string
2) FOR KEYS = deathEater, dumbledoresArmy, orderOfThePhoenix, ministryOfMagic VALUE IS: boolean
3) FOR KEYS = house VALUES ARE: 'Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'
4) FOR KEYS = bloodStatus VALUES ARE: 'pure-blood', 'half-blood', 'muggle-born', 'unknown'
Returns a promise contaning array of objects
*/
const getCharacters = function (condition) {
    let link = generateCharacterEndpoint(condition);
    return fetch(link)
    .then(res => res.json())
    .catch(er => {
        console.log(er);
        return er.message;
    });
};

//Testing:
/*async function y() {
    let x = await getCharacters({'house': 'Gryffindor'});
    console.log('x :', x);
}
y();*/