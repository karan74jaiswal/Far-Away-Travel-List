import "./index.css";

const PackingList = function () {
  return (
    <div className="list">
      <ul></ul>
      <div className="actions">
        <select>
          <option value={1}>Sort by input Order</option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
};
export default PackingList;
