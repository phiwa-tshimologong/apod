const renderData = document.getElementById('renderData');


let date = '';
// eslint-disable-next-line no-undef
let APP_URL = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`;


const getApodPicture = (APP_URL) =>{
    fetch(APP_URL)
    .then(res => res.json())
    .then(data => processApodData(data))
    .catch(e => console.log(e));
};

const processApodData = data =>{
    const apodTitle = document.createElement('h2');
    apodTitle.classList.add('apod-title');
    const apodImg = document.createElement('img');
    apodImg.classList.add('apod-img');
    const apodDescription = document.createElement('p');
    apodDescription.classList.add('apod-description');

    apodTitle.innerHTML = data.title;
    apodImg.src = data.url;
    apodDescription.innerHTML = data.explanation;


    renderData.appendChild(apodTitle);
    renderData.appendChild(apodImg); 
    renderData.appendChild(apodDescription);
};

const form = document.getElementById('filterDate');
form.addEventListener('submit', (e) =>{
    // console.log(form.elements['dob'].value);

    date = form.elements['dob'].value;
    renderData.innerHTML = '';
    // eslint-disable-next-line no-undef
    APP_URL = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`;
    getApodPicture(APP_URL);
    e.preventDefault();
});

// eslint-disable-next-line no-undef
window.onload = getApodPicture(APP_URL);