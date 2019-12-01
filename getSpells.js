function getSpells() {
    var apiKey = 'key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm'
    var url = `https://www.potterapi.com/v1/spells?${apiKey}`;
    return fetch(url)
        .then(res => res.json())
        .then(res => console.log(res))
}


export default getSpells;

