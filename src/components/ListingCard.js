import React, {useState} from "react";

function ListingCard({item, deleteItem}) {

  const [starred, setStarred] = useState(false)

  const favoriteItem = () => {
    setStarred(!starred)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {starred ? (
          <button onClick={favoriteItem} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={favoriteItem} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={() => deleteItem(item)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
