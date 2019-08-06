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
    const mapa_id = JSON.parse(input).id;
    getZonasJson('data/json/zonas.json', (json) => {
        let mapZonas = document.getElementById("mapZonasLista");
        mapZonas.innerHTML = '';

        const zonas = json.zonas.filter(
            zona => zona.mapa_id === mapa_id
        );

        zonas.map(
            (item) => {
                let option = document.createElement("div");
                option.setAttribute('data-zona_id', item.id);
                option.textContent = item.nome;
                option.addEventListener("mouseenter", function (e) {
                    document.querySelector('[data-z="' + item.id + '"]').classList.add("zCheck");
                });
                option.addEventListener("mouseleave", function (e) {
                    document.querySelector('[data-z="' + item.id + '"]').classList.remove("zCheck"); 
                });
                mapZonas.appendChild(option);
            }
        );
    });
};

(getMapas = () => {
    getMapasJson('data/json/mapas.json', (json) => {
        json.mapas.map(
            (item) => {
                let selectMapa = document.getElementById("mapSelect");
                let option = document.createElement("option");
                option.text = item.nome;

                option.value = JSON.stringify({
                    id: item.id,
                    path: item.svg
                });
                
                /* TODO: Remover IF de dentro do map. Fazer filter() antes */
                if (item.nomeVector === 'novaFlora') {
                    showMap(option.value); // Mapa inicial
                    option.setAttribute('selected', 'selected');
                }
                selectMapa.add(option);
            }
        );
    });
})();

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
};

document.getElementById('mapSelect').addEventListener('change', function () {
    showMap(this.value);
});