import React, { useState } from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";

const Menu = () => {
  const [img, setImg] = useState(false);

  const handleImageError = (e) => {
    setImg(true);
  };

  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img
                src={listItem.icon}
                alt={listItem.title}
                onError={handleImageError}
                style={{ display: img ? "none" : "block" }}
              />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
