// eslint-disable-next-line no-unused-vars
import React from 'react'
import {MapContainer,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Mapa () {
    return (
        <MapContainer center={{lat: '51.505',lng: '-0.09'}} zoom={12}>
            <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
        </MapContainer>
    )
}

export default Mapa