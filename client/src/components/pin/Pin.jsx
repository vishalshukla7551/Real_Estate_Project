import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

// Define a custom Leaflet icon

const customIcon = L.icon({
  iconUrl: "/pin.png",
  iconSize: [60, 55], // Adjust size as needed
  iconAnchor: [16, 32], // Center the icon properly
  popupAnchor: [0, -32], // Adjust popup position
});
function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]} icon={customIcon} eventHandlers={{
      mouseover: (e) => {
        e.target.openPopup();
      },
      mouseout: (e) => {
        e.target.closePopup();
      },
    }}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
