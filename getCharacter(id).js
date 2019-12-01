function getCharacter(id) {
    const url = 'https://www.potterapi.com/v1/characters';
    const apiKey = '&key=$2a$10$Wi6/X4phtSJZhvyw4tR7ee1XMjXEk666iRW/USyA59MxRXdWUlePK';
    const link = url + "?" + apiKey + "&_id=" + id;
    return fetch(link)
        .then(res => res.json())
        .then(data => data[0])
}


export default getCharacter;
