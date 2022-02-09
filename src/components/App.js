import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([])
  

  useEffect( () => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(data => setItems(data))
  }, [] )

  //only on DELETE requests do you not need the '.then's

  const deleteItem = item => {
    const newItems = items.filter(itemobj => itemobj.id !== item.id)
    setItems(newItems)

    fetch('http://localhost:6001/listings' + `/${item.id}`, {
      method: 'DELETE'
    })
  }

  const [search, setSearch] = useState('')

  const handlesSearch = string => setSearch(string)

  const filteredItems = items.filter(item => item.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header handlesSearch={handlesSearch}/>
      <ListingsContainer items={filteredItems} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
