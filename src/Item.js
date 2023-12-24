import "./index.css";

const Item = function ({ item, removeItem, updateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        name={item.description}
        onClick={(e) => {
          updateItem(item.id);
        }}
      />
      <span
        style={{
          textDecoration: item.packed ? "line-through" : "none",
        }}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => removeItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
