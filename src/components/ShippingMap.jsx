import React from "react";
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon issues in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const addisAbaba = [9.0054, 39.7284];      // Addis Ababa, Ethiopia

// Major ports and hubs coordinates with slight offset for better spacing in tooltips if needed
const ports = {
  djibouti: [11.5721, 43.1456],       // Port of Djibouti
  mombasa: [-4.0435, 39.6682],        // Port of Mombasa, Kenya (slightly west adjusted)
  jebelAli: [25.0657, 55.1713],       // Jebel Ali Port, Dubai, UAE
  salalah: [17.0154, 54.0924],        // Port of Salalah, Oman
  shanghai: [31.2304, 121.4737],      // Port of Shanghai, China
  hamburg: [53.5511, 9.9937],         // Port of Hamburg, Germany (slightly east adjusted)
  rotterdam: [51.9225, 4.5790],       // Port of Rotterdam, Netherlands (offset longitude +0.1)
  istanbul: [41.0082, 28.9784],       // Port of Istanbul, Turkey
};

const shippingRoutes = [
  { from: addisAbaba, to: ports.djibouti, label: "Addis Ababa - Port of Djibouti" },
  { from: addisAbaba, to: ports.mombasa, label: "Addis Ababa - Port of Mombasa" },
  { from: addisAbaba, to: ports.jebelAli, label: "Addis Ababa - Jebel Ali Port, Dubai" },
  { from: addisAbaba, to: ports.salalah, label: "Addis Ababa - Port of Salalah, Oman" },
  { from: addisAbaba, to: ports.shanghai, label: "Addis Ababa - Port of Shanghai, China" },
  { from: addisAbaba, to: ports.hamburg, label: "Addis Ababa - Port of Hamburg, Germany" },
  { from: addisAbaba, to: ports.rotterdam, label: "Addis Ababa - Port of Rotterdam, Netherlands" },
  { from: addisAbaba, to: ports.istanbul, label: "Addis Ababa - Port of Istanbul, Turkey" },
];

const certifications = [
  { coordinates: addisAbaba, name: "Dankil HQ - ISO 9001 Certified" },
  { coordinates: ports.djibouti, name: "Port of Djibouti - Major Gateway" },
  { coordinates: ports.jebelAli, name: "Jebel Ali Port - Middle East Hub" },
  { coordinates: ports.shanghai, name: "Port of Shanghai - China Mega Port" },
  { coordinates: ports.hamburg, name: "Port of Hamburg - Europe Gateway" },
];

const ShippingMap = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <h2 className="text-3xl font-bold text-primaryText mb-8 text-center">
        Global Shipping Routes & Certifications
      </h2>

      <MapContainer
        center={[25, 45]} // Moved center north-east for better spread
        zoom={3}         // Zoomed out for wider view
        scrollWheelZoom={false}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />

        {/* Draw Shipping Routes */}
        {shippingRoutes.map(({ from, to, label }, i) => (
          <Polyline
            key={i}
            positions={[from, to]}
            color="#0084A9"
            weight={3}
            opacity={0.7}
          >
            <Tooltip>{label}</Tooltip>
          </Polyline>
        ))}

        {/* Certification Markers */}
        {certifications.map(({ coordinates, name }, i) => (
          <Marker key={i} position={coordinates}>
            <Tooltip>{name}</Tooltip>
          </Marker>
        ))}

        {/* Marker for Addis Ababa */}
        <Marker position={addisAbaba}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            Addis Ababa (HQ)
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ShippingMap;
