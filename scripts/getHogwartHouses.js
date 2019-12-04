//function that returns a list of house's objects with all properties

function getAllHouses(){
    let url = `https://www.potterapi.com/v1/houses/?key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm`;
    return fetch(url)
    .then(res => res.json())
    .catch(er => {
        console.log(er);
        return er.message
    })
}
