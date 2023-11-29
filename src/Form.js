import "./index.css";

const Form = function () {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        <option value={1}>1</option>
      </select>
      <input placeholder="Item..."></input>
      <button>ADD</button>
    </div>
  );
};
export default Form;
