import "./index.css";
import Item from "./Item";
const PackingList = function ({ items, removeItem, updateItem, clearList }) {
  return (
    <div className="list">
      <ul>
        {items.length > 0
          ? items.map((item) => (
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
        <select>
          <option value={1}>Sort by input Order</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
};
export default PackingList;
