let generateHouseButton = document.getElementById('generate-house');
generateHouseButton.addEventListener('click', async () => {
    const houseDiv = document.createElement('div');
    const house = await getSortingHatDecision();
    const houseInfo = (await getHouse(house))[0];
    houseDiv.innerHTML = generateHouseElement(houseInfo);
    generateHouseButton.parentElement.appendChild(houseDiv);
}, { once: true});
