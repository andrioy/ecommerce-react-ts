import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
const App = () => {
  const [viewCart, setViewCart] = useState(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  );

  return content;
};

export default App;
