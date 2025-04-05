import { Link,useNavigate  } from "react-router-dom";
import "./card.scss";
import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";


function Card({ item }) {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
    const [saved, setSaved] = useState(item.isSaved);
  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }

    // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: item.id });
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };


  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon" onClick={handleSave}>
          
              <img src="/save.png" alt="" /> 
            </div>
            <div className="icon" onClick={async ()=>{if (!currentUser) {navigate("/login");return;};await apiRequest.post("/chats",{receiverId:item.userId}); navigate("/profile");}}>
           <img src="/chat.png" alt="" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
