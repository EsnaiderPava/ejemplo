const tilesPrivider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([4.733734827337581, -74.07664968490933], 13)

L.tileLayer(tilesPrivider, {
    mapZoom: 18,
}).addTo(myMap)

let marker = L.marker([4.733734827337581, -74.07664968490933]).addTo(myMap) 

let iconMarker = L.icon({
    iconUrl: 'Ubi.png', 
    iconSize: [60, 60],
    iconAnchor: [30, 60]
})

let marker2 = L.marker([4.7491284,-74.0974939], {icon: iconMarker}).addTo(myMap)

myMap.doubleClickZoom.disable()
myMap.on('dblclick', e => {
    let latLng = myMap.mouseEventTolatLng(e.originalEvent)
    L.marker([latLng.lat, latLng.lng], { icon: iconMarker }).addTo(myMap)
})

navigator.geolocation.getCurrentPosition(
    (pos) => {
        const { coords } = pos
        console.log (coords)
        L.marker([coords, latitude, coords.longitude], {icon: iconMarker}).addTo(myMap)
    },
    (err) => {
        console.log(err)
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
)