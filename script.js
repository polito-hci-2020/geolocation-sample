function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const coords = document.querySelector('#coords');
    const lat = document.querySelector('#lat');
    const long = document.querySelector('#long');

    mapLink.href = '';
    mapLink.innerHTML = '';

    if(!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.innerHTML = `Location retrieved`;
        status.style.setProperty('color', '#28A745');

        coords.style.setProperty('display', 'block');
        lat.innerHTML = `${latitude}°`;
        long.innerHTML = `${longitude}°`;

        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.innerHTML = `Show in OpenStreetMap`;
    }

    function error() {
        status.innerHTML = 'Unable to retrieve your location';
        status.style.setProperty('color', '#DC3545');
    }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
