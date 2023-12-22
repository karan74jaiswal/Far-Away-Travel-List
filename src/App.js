import { useState } from "react";
import "./index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [itemList, setItemList] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ]);

  const addItem = function (item) {
    setItemList((i) => [
      ...i,
      {
        id: i.length + 1,
        quantity: item.quantity,
        description: item.description,
        packed: false,
      },
    ]);
  };

  const removeItem = function (id) {
    const removeItemIndex = itemList.findIndex((item) => item.id === id);
    console.log(removeItemIndex);
    setItemList((items) => {
      items.splice(removeItemIndex, 1);
      return [...items];
    });
  };

  const updateItem = function (id) {
    const itemIndex = itemList.findIndex((item) => item.id === id);
    const updatedItems = itemList.map((item, index) => {
      if (index === itemIndex) item.packed = !item.packed;
      return item;
    });
    setItemList(updatedItems);
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
