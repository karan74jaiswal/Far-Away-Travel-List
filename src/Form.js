import { useState } from "react";
import "./index.css";

const Form = function ({ addItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const handleSubmit = function (e) {
    e.preventDefault();
    // console.log(description);
    if (description) {
      addItem({
        quantity,
        description,
      });
      setQuantity(1);
      setDescription("");
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(+e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <option value={index + 1} key={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button>ADD</button>
    </form>
  );
};
export default Form;
