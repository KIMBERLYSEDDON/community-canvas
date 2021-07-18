
const mapFormHandler = async (event) => {
    event.preventDefault();
    console.log("coordinates submission")
    const lat = document.querySelector('#lat-input').nodeValue.trim();
    const lon = document.querySelector('#lon-input').nodeValue.trim();
    console.log(lat, lon);


}


 document
 .querySelector('.map')
 .addEventListener('submit', mapFormHandler);