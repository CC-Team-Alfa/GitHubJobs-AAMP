//Function; gets the random house name
//Returns a promise conatning a string
const getSortingHatDecision = function() {
   return fetch('https://www.potterapi.com/v1/sortingHat') //does not requiare a key
    .then(res => res.json() )
    .catch(er => {
        console.log(er);
        return er.message;
    });
};

//Testing:
/*async function y() {
    let x = await getSortingHatDecision();
    console.log('x :', x);
    console.log('x type :', typeof x);
}
y();*/

