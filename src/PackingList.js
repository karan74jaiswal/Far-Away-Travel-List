import { useState } from "react";
import "./index.css";
import Item from "./Item";
const PackingList = function ({ items, removeItem, updateItem, clearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItemList =
    sortBy === "input"
      ? items
      : sortBy === "description"
      ? [...items].sort(({ description: a }, { description: b }) =>
          a.localeCompare(b)
        )
      : [...items].sort(({ packed: a }, { packed: b }) => +a - +b);
  return (
    <div className="list">
      <ul>
        {items.length > 0
          ? sortedItemList.map((item) => (
              <Item
                item={item}
                removeItem={removeItem}
                updateItem={updateItem}
                key={item.id}
              />
            ))
          : ""}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
};
export default PackingList;
