function loadopenmaps() {
    fetch('https://api.openchargemap.io/v3/poi/?output=json&latitude=40.7859464&longitude=-73.97418739999999&connectiontypeid=30&distance=10')
        .then(response => response.json())
        .then(responseJson => renderResults(responseJson))
        .catch(error => alert(error));
}

function renderResults(responseJson) {
    let data = document.getElementById('data');
    let markers = responseJson
    let html = "";
    for (let i = 0; i < markers.length; i++) {
        html += (markers[i].OperatorInfo.Title) + ':-';
        html += (markers[i].AddressInfo.Latitude) + ':';
        html += (markers[i].AddressInfo.Longitude) + '<br/>';
    }

    data.innerHTML = html;
}

loadopenmaps();