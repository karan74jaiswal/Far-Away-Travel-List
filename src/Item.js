import "./index.css";

const Item = function ({ item, removeItem, updateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        name={item.description}
        onClick={(e) => {
          // console.log(e.target.checked);
          updateItem(item.id);
        }}
      />
      <span
        style={
          item.packed
            ? {
                textTransform: "line-through",
              }
            : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => removeItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
