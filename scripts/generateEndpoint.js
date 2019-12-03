//Global arrays
const bloodStatuses = ['pure-blood', 'half-blood', 'muggle-born', 'unknown'];
const strings = ['name', 'patronus', 'species', 'role', 'school', 'alias', 'wand', 'boggart', 'animagus'];
const houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];
const booleans = ['deathEater', 'dumbledoresArmy', 'orderOfThePhoenix', 'ministryOfMagic'];

//New link template
const newLink = function(link, key, parameters){
    link = `${link}&${key}=${parameters[key]}`;
    return link;
}

//Main function that generate link
const generateCharacterEndpoint = function(parameters) {
    parameters = parameters || {}; //parameters are in an object
    let link = 'https://www.potterapi.com/v1/characters/?key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm'; //base-link
    Object.keys(parameters).map(key => {
        if(key === 'house'){
            if(houses.includes(parameters[key])){
                link = newLink(link, key, parameters);
            }
        }
        else if(key === 'bloodStatus'){ 
            if(bloodStatuses.includes(parameters[key])){
                link = newLink(link, key, parameters);
            }
        }
        else if(strings.includes(key)){
            if(typeof parameters[key] === 'string'){
                link = newLink(link, key, parameters);
            }
        }
        else if(booleans.includes(key)){
            if(typeof parameters[key] === 'boolean'){
                link = newLink(link, key, parameters)
            }
        }
    })
    return link;
}

/*

To generate a link, call the function with an object as argument
Template:     generateEndpoint({name: 'name', house: 'Gryffindor', ..., bloodStatus: 'pure-blood', ..., deathEater: true, ...})
All parameters are optional and strictly defined:
name, house, patronus, species, bloodStatus, role, school, alias, wand, boggart, animagus: strings
'house' valid strings: 'Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'
'bloodStatus' valid strings: 'pure-blood', 'half-blood', 'muggle-born', 'unknown'
deathEater, dumbledoresArmy, orderOfThePhoenix, ministryOfMagic: boolean

*/
