//function that gets house's (id) changed to house name and returns a house object with all properties

async function getHouse(name){
    let id = 0;

    const houses = await getHogwartHouses();
    for (let house of houses) {
        if (house.name == name) {
            id = house._id;
            break;
        }
    }
    let url = `https://www.potterapi.com/v1/houses/${id}/?key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm`;
    return fetch(url)
    .then(res => res.json())
    //.then(info => info[0]) <- Takie coś zwraca nam póżniej Promise który jest resolved!
    .catch(er => {
        console.log(er);
        return er.message
    });
}


//dodałem funkcję tutaj, bo kolejny plik jest nam potrzebny jak kolejny Horkruks...
function generateHouseElement(house){
    return `<p>Your house is:</p>
            <img src="./assets/images/${house.name}.jpg" alt="${house.name} house logo">
            <h2>${house.name}</h2>
            <p>
                Mascot: ${house.mascot}<br>
                Head of House: ${house.headOfHouse}<br>
                House Ghost: ${house.houseGhost}<br>
                Founder: ${house.founder}<br>
            </p>`
}
