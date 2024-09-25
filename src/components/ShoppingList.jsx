import { useState } from "react";
import { Categories } from "./Categories.jsx";
import { plantList } from "../data/plantList.js";
import { PlantItem } from "./PlantItem.jsx";

export const ShoppingList = ({ cart, updateCart }) => {
  const [category, setCategory] = useState("");

  const filteredPlants = category
    ? plantList.filter((plant) => plant.category === category)
    : plantList;

  const addToCart = (name, price) => {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const filteredCurrentPlant = cart.filter((plant) => plant.name !== name);
      updateCart([
        ...filteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  };

  return (
    <div>
      <Categories category={category} setCategory={setCategory} />
      <ul className="my-10 grid w-full grid-cols-3 justify-center justify-items-center gap-7">
        {filteredPlants.map(({ id, cover, name, water, light, price }) => (
          <div key={id}>
            <PlantItem
              id={id}
              cover={cover}
              name={name}
              water={water}
              light={light}
              price={price}
            />
            <button
              className="mx-auto mt-2 block px-8"
              onClick={() => addToCart(name, price)}
            >
              Ajouter
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
