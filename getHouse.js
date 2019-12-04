//function that gets house's id and returns a house object with all properties

async function getHouse(id){
    let url = `https://www.potterapi.com/v1/houses/${id}/?key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm`;
    return fetch(url)
    .then(res => res.json())
    .then(info => info[0])
    .catch(er => {
        console.log(er);
        return er.message
    })
}