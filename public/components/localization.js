
var send_local = document.getElementById("send_local");
send_local.onclick = async function () {
    sendLocation();
};

function sendLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = await position.coords.latitude;
            const lng = await position.coords.longitude;
            const timestamp = Date.now();
            const data = { lat, lng, timestamp };
            displayUserLocation(data);
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", //Só sinaliza que estou enviando um JSON
                },
                body: JSON.stringify(data),
            };
            //Cliente envia algo para este endpoint com um POST
            //fetch() tbm funciona com POST, porém é necessário esse segundo parâmetro 'OPTIONS'
            fetch("/pessoa", options).then(response => response.json()).then(pessoa => console.log(pessoa));
        });
    } else {
        console.log("Geolocation NOT Available.");
    }
}
function displayUserLocation(pessoa) {
    document.getElementById("lat").textContent = pessoa.lat;
    document.getElementById("lng").textContent = pessoa.lng;
    centerView(pessoa.lat, pessoa.lng);
}
function centerView(globalLat, globalLng) {
    map.setView([globalLat, globalLng], 20);
}
