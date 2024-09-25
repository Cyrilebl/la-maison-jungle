import { useEffect, useState } from "react";
import "../styles/App.css";
import { Cart } from "./Cart";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ShoppingList } from "./ShoppingList";

export default function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header />
      <div className="flex gap-20">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </>
  );
}
