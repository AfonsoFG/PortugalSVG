let init = () => {
    getMapas();
}

async function getZonasJson(path, callback) {
    return callback(await fetch(path).then(r => r.json()));
}

async function getMapasJson(path, callback) {
    return callback(await fetch(path).then(r => r.json()));
}

async function getMapSvg(path, callback) {
    return callback(await fetch(path).then(r => r.text()));
}

let showZonas = (input) => {
    let mapa_id = JSON.parse(input).id;
    getZonasJson('../data/json/zonas.json', (json) => {
        let mapZonas = document.getElementById("mapZonasLista");
        mapZonas.innerHTML = '';
        json.zonas.map(
            (item) => {
                if (item.mapa_id === mapa_id) {
                    let option = document.createElement("div");
                    option.setAttribute('data-zona_id', item.id);
                    option.textContent = item.nome;
                    option.addEventListener("mouseenter", function (e) {
                        document.querySelectorAll('[data-z="' + item.id + '"]')[0].classList.add("zCheck");
                    });
                    option.addEventListener("mouseleave", function (e) {
                        document.querySelectorAll('[data-z="' + item.id + '"]')[0].classList.remove("zCheck"); 
                    });
                    mapZonas.appendChild(option);
                }
            }
        );
    });
}

let getMapas = () => {
    getMapasJson('../data/json/mapas.json', (json) => {
        json.mapas.map(
            (item) => {
                let selectMapa = document.getElementById("mapSelect");
                let option = document.createElement("option");
                option.text = item.nome;

                option.value = JSON.stringify({
                    id: item.id,
                    path: '/assets/' + item.svg
                })

                if (item.nomeVector === 'novaFlora') {
                    showMap(option.value); // Mapa inicial
                    option.setAttribute('selected', 'selected');
                }
                selectMapa.add(option);
            }
        );
    });
}

let showMap = (input) => {
    showZonas(input);
    getMapSvg(JSON.parse(input).path, (svg) => {
        let divMapa = document.getElementById('mapPortugal');
        divMapa.innerHTML = '';

        let svgMap = document.createElement('div');
        svgMap.className = 'svgMap';
        svgMap.innerHTML = svg;

        divMapa.appendChild(svgMap);
    });
}

document.getElementById('mapSelect').addEventListener('change', function () {
    showMap(this.value);
});