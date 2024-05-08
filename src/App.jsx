import { useState } from "react";
import Collections from "./sections/Collections";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Popup from "./components/Popup";

function App() {
  const [cart, setCart] = useState([]);
  const [isPopup, setIsPopup] = useState(false);

  return (
    <>
      <Header cart={cart} setIsPopup={setIsPopup} isPopup={isPopup} />
      <Collections cart={cart} setCart={setCart} />
      <Popup setCart={setCart} cart={cart} isPopup={isPopup} setIsPopup={setIsPopup} />
      <Footer />
    </>
  );
}

export default App;
