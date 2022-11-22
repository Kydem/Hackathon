// Leaflet API Project (Maps)

// The boilerplate map options
let map = L.map('map', {
    center: [32.2540, -110.9742],
    zoom: 12
});

// A place holder for hotel markers
let mark;

//Pre-built Travel Options
let options = {
    anchorage: [61.217381, -149.863129],
    prague: [50.073658, 14.418540],
    guant: [20.0117, -75.1216]
}

// The map that is displayed, currently using Open Street Map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// The button takes you to a "random" location
trip.addEventListener("click", () => {

    let i = Math.ceil(Math.random() * 10)

    if (i <= 4) {
        //Flys you to to a new location, and adds a mark where a hotel is
        map.flyTo(new L.LatLng(options.anchorage[0], options.anchorage[1]), 12, {duration: 2});
        mark = L.marker([61.217381, -149.863129]).addTo(map)
    } else if (i > 4 && i <= 8) {
        map.flyTo(new L.LatLng(options.prague[0], options.prague[1]), 12, {duration: 2});
        mark = L.marker([50.082260, 14.429870]).addTo(map)
    } else {
        map.flyTo(new L.LatLng(options.guant[0], options.guant[1]), 12, {duration: 2});
        mark = L.marker([20.0117, -75.1216]).addTo(map)
    }

    // map.flyTo(new L.LatLng(61.217381, -149.863129), 10, {duration: 2});
    // mark = L.marker([61.217381, -149.863129]).addTo(map);
})



