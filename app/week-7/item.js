export default function Item({ item }) {
  const { name, quantity, category } = item;
  return (
    <div className="flex justify-center items-center   text-black font-serif">
      <ul className="text-center w-70 h-15 p-1 m-2 bg-gray-400 rounded-lg shadow-lg">
        <li>
          <h1 className="font-extrabold text-2x1"> {item.name} </h1>
          <p>
            Buy {item.quantity} in {item.category}
          </p>
        </li>
      </ul>
    </div>
  );
}
