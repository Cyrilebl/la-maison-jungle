import { useEffect, useState } from "react";

export const Cart = ({ cart, updateCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0,
  );

  useEffect(() => {
    if (total !== 0) {
      document.title = `LMJ: ${total}€ d'achats`;
    } else {
      document.title = `LMJ: Panier vide`;
    }
    setIsEmpty(total === 0);
  }, [total]);

  const removeFromCart = (name) => {
    updateCart((prevItems) => prevItems.filter((i) => i.name !== name));
  };

  return isOpen ? (
    <div
      className={`w-56 transform bg-green-600 transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-1 translate-x-0" : "-translate-x-[100%] opacity-0"
      }`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="mb-6 rounded-t-none px-6"
      >
        Fermer
      </button>
      <div className="px-6 py-2 text-neutral-50">
        {cart.map(({ name, price, amount }, index) => (
          <div key={`${name}-${index}`} className="my-2 capitalize">
            <p className="font-semibold">{name}</p>
            <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
              <div className="flex">
                <p className="mr-1">{amount}x</p>
                <p>{price}€</p>
              </div>
              <div className="flex items-center gap-5">
                <p>{price * amount}€</p>
                <button
                  onClick={() => removeFromCart(name)}
                  className="px-1 py-0"
                >
                  x
                </button>
              </div>
            </div>
          </div>
        ))}
        {isEmpty ? (
          <p className="text-center">Votre panier est vide</p>
        ) : (
          <>
            <h3 className="my-3 font-semibold">Total : {total}€</h3>
            <button
              onClick={() => updateCart([])}
              className="mx-auto mt-5 block bg-green-700 text-center hover:bg-green-800"
            >
              Vider le panier
            </button>
          </>
        )}
      </div>
    </div>
  ) : (
    <div className="w-40 transition-all duration-500 ease-in-out">
      <button onClick={() => setIsOpen(true)} className="rounded-t-none">
        Ouvrir le Panier
      </button>
    </div>
  );
};
