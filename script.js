var map = L.map('map').setView([43.055154617955, 12.409731080977739], 6);
const ctx = document.getElementById('myChart');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



function creaTabella(){
    let nomi = [];
    let abitanti = [];
    for(let i = 0; i < comuni.length; i++){
        let comune = comuni[i];
        nomi.push(comune.nome);
        abitanti.push(comune.abitanti);
    }
    new Chart(ctx, {
        type: 'bar',
        data: {
          labels: nomi,
          datasets: [{
            label: 'Numero di abitanti',
            data: abitanti,
            borderWidth: 3,
            backgroundColor: "#749332",
            borderColor: '#000000'
          }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Top 10 città italiane per popolazione',
                    align: "start",
                    font: {size: 20}
                }
            }
        }
      });
}


function creaPuntatori(){
    for(let i = 0; i < comuni.length; i++){
        let comune = comuni[i];
        let coordinate = comune.coordinate;
        let nome = comune.nome;
        let abitanti = comune.abitanti;
        var marker = L.marker([coordinate.lat, coordinate.lon]).addTo(map);
        marker.bindPopup(`<b>${nome}</b><br>${abitanti} abitanti.`).openPopup();

    }
}


creaPuntatori();
creaTabella();







