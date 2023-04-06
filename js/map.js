let map = L.map("map", { zoomControl: false }).setView(
  [55.559247, 37.872829],
  13
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let myMarker = L.icon({
  iconUrl: "./img/map-icon.svg",
  iconSize: [63, 92],
  iconAnchor: [22, 94],
  popupAnchor: [12, -80],
});

let marker = L.marker([55.559247, 37.872829]).addTo(map);

marker.bindPopup("Улица Ленина, 84").openPopup();
