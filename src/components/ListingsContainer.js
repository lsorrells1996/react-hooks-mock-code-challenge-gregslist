import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, deleteItem}) {
  return (
    <main>
      <ul className="cards">
        {items.map(item => <ListingCard key={item.id} item={item} deleteItem={deleteItem} /> )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
