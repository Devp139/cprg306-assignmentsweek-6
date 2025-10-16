export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 text-white p-4 rounded-md shadow-md">
      <div className="font-bold text-lg">{name}</div>
      <div className="text-gray-300">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}



