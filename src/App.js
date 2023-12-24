import { useState } from "react";
import "./index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [itemList, setItemList] = useState([]);

  const addItem = function (item) {
    setItemList((i) => [
      ...i,
      {
        id: Date.now(),
        quantity: item.quantity,
        description: item.description,
        packed: false,
      },
    ]);
  };

  const removeItem = function (id) {
    console.log(id);
    setItemList((items) => items.filter((item) => item.id !== id));
  };

  const updateItem = function (id) {
    setItemList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearList = function () {
    if (window.confirm("Are you sure you want to delete all items?") === true)
      setItemList([]);
    else return;
  };

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        items={itemList}
        removeItem={removeItem}
        updateItem={updateItem}
        clearList={clearList}
      />
      <Stats items={itemList} />
    </div>
  );
}
export default App;
