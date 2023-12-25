import "./index.css";

const Stats = function ({ items }) {
  function statStr() {
    const packedItems = items.filter((item) => item.packed);
    if (!items.length) return "Start adding some items to your packing list 🚀";
    if (items.every((item) => item.packed))
      return "You got everything! Ready to go ✈️";
    return `💼 You have ${
      items.length
    } items on your list, and you already packed ${
      packedItems.length
    } (${Math.trunc((packedItems.length / items.length) * 100)}%)`;
  }

  return (
    <footer className="stats">
      <em>{statStr()}</em>
    </footer>
  );
};
export default Stats;
