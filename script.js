function handleGeolocation() {

    let status = document.querySelector('#status');
    let mapLink = document.querySelector('#map-link');
    let coords = document.querySelector('#coords');
    let lat = document.querySelector('#lat');
    let long = document.querySelector('#long');

    mapLink.href = '';
    mapLink.innerHTML = '';

    if(!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
        let latitude  = position.coords.latitude;
        let longitude = position.coords.longitude;

        status.innerHTML = '';

        coords.style.setProperty('display', 'block');
        lat.innerHTML = `${latitude}°`;
        long.innerHTML = `${longitude}°`;

        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.innerHTML = `Show in OpenStreetMap`;
    }

    function error() {
        status.innerHTML = '';
        window.alert("Error: the browser cannot access the location. Change the" +
            " browser permission settings and reload the page.");
    }

}

document.querySelector('#find-me').addEventListener('click', handleGeolocation);
