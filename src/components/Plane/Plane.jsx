import React from "react";
import "../styles/plane.css";

const Plane = () => {
  return (
    <div className="cloud cloud1">
      <div className="light"></div>
      <img
        src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png"
        draggable="false"
        width={300}
      />
    </div>
  );
};

export default Plane;
