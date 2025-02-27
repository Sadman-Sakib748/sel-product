import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import WelcomeContact from "./WelcomeContact/WelcomeContact";

// Define the locations you want to mark
const locations = [
  {
    name: "Odense City Center",
    position: { lat: 55.403756, lng: 10.40237 },
  },
  {
    name: "H.C. Andersens Hus",
    position: { lat: 55.395843, lng: 10.388336 },
  },
  {
    name: "Kvickly Odense",
    position: { lat: 55.403756, lng: 10.41237 },
  },
];

const WelcomePage = () => {
  return (
    <div className="max-w-full mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Locations</h2>
      <div style={{ width: "100%", height: "100vh" }} className="relative">
        <MapContainer
          center={[55.403756, 10.40237]} // Odense coordinates
          zoom={13}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((location) => (
            <Marker key={location.name} position={location.position}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <WelcomeContact></WelcomeContact>
    </div>
  );
};

export default WelcomePage;
