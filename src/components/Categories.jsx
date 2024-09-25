import { plantList } from "../data/plantList";

export const Categories = ({ category, setCategory }) => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [],
  );

  return (
    <div className="my-6">
      <label htmlFor="dropdown" className="font-semibold"></label>
      <select
        id="dropdown"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-md border bg-neutral-100 p-2"
      >
        <option value="">Tout</option>
        {categories.map((cat) => (
          <option key={cat} value={cat} className="capitalize">
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
