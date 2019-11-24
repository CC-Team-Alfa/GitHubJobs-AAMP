const addSymbols = function(link, pointer) {
    if(pointer === false) {
        link = `${link}?`;
    }
    else {
        link = `${link}&`;
    }
    return link;
}

const generateEndpoint = function(parameters) {
    parameters = parameters || {};
    const description = parameters.description || undefined;
    const location = parameters.location || undefined;
    const lat = parameters.lat || undefined;
    const long = parameters.long || undefined;
    const full_time = parameters.full_time || false;
    let link = 'https://jobs.github.com/positions.json';
    let pointer = false;
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
    console.log(typeof lat);
    return link;
}

console.log(generateEndpoint({description: 'Python', lat: '123.09427', long: '-23.78874', full_time: false}));