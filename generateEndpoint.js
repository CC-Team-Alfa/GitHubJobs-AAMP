//function that add '?' or '&' between link and parameters
const addSymbols = function(link, pointer) {
    if(pointer === false) {
        link = `${link}?`;
    }
    else {
        link = `${link}&`;
    }
    return link;
}

//function that replace all spaces to '+' character
const removeSpaces = function(sentence) {
    while(sentence.includes(' ')) {
        sentence = sentence.replace(' ', '+');
    }
    return sentence;
}

const generateEndpoint = function(parameters) {
    parameters = parameters || {}; //parameters are in an object
    let description = parameters.description || undefined;
    if(typeof description === 'string') {
        description = removeSpaces(description.toLowerCase());
    }
    let location = parameters.location || undefined;
    if(typeof location === 'string') {
        location = removeSpaces(location.toLowerCase());
    }
    const lat = parameters.lat || undefined;
    const long = parameters.long || undefined;
    const full_time = parameters.full_time || false;
    let link = 'https://jobs.github.com/positions.json'; //base-link
    let pointer = false; //pointer tells if a parameter is first or not, and then verified in 'addSymbols'
    if(typeof description === 'string') {
        link = addSymbols(link, pointer);
        pointer = true;
        link = `${link}description=${description}`;
    }
    if(typeof location === 'string') {
        link = addSymbols(link, pointer);
        pointer = true;
        link = `${link}location=${location}`;
    }
    else if(typeof lat === 'number' && typeof long === 'number') {
        link = addSymbols(link, pointer);
        pointer = true;
        link = `${link}lat=${lat}`;
        link = `${link}&long=${long}`;
    }
    if(full_time === true) {
        link = addSymbols(link, pointer);
        pointer = true;
        link = `${link}full_time=true`;
    }
    return link;
}

/*

To generate a link, call the function with an object as argument
Template:     generateEndpoint({description: 'description', location: 'location', lat: lat, long: long, full_time: true})
All parameters are optional and strictly defined:
description, location - string
lat, long - number
full_time - boolean
To add lat/long must take both arguments
If location was taken, then lat/long are skipped
Don't need to type 'full_time: false' - it is by default

*/
