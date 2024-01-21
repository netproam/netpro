"use client"
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet';
import  "leaflet/dist/leaflet.css"
import {Icon} from "leaflet"
import { HiLocationMarker } from "react-icons/hi";
import { useMediaQuery } from 'react-responsive'
export default function MapComponent() {
  
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // Set the initial center and zoom level of the map
  const center = {lat:   43.07262559162912, lng:1.644519415057166}; // Montreal coordinates
  const zoom = 13;
 const iconTest=new Icon({
    iconSize:[40,30]
    ,iconUrl:"/SVG/location.svg"
 })

 const [isPcSize,setIsPcSize]=useState(80)

useEffect(()=>{
if(isTabletOrMobile)
{
setIsPcSize(5)
}

},[isTabletOrMobile])
console.log(isTabletOrMobile)
  return (
    <div className=' h-[300px] w-full relative z-20 '>
    <MapContainer center={center} zoom={zoom} style={{height: "100%",
     width: "100%" ,borderRadius:"2%" }} scrollWheelZoom={false}>
      {/* Add a tile layer to show the base map */}
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
       
      />
      {/* Add a marker to show a point of interest */}
      <Marker position={center} icon={iconTest}>
        {/* Add a popup to display some information */}
        <Popup  minWidth={isPcSize}>
            <p  className='hidden font-sans lg:flex font-semibold lg:text-[16px]'> Parc Technologique Delta Sud,<br/> 10 Rue Jean Mermoz,<br/>09340 Verniolle <br/>France</p>
            <p  className='text-[10px]  font-sans font-semibold lg:hidden'>Parc Technologique<br/> Delta Sud,<br/> 10 Rue Jean Mermoz,<br/>09340 Verniolle <br/>France</p>
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}


