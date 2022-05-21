import { useEffect, useState } from "react";

const LoadProducts = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://electra-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [Products, setProducts];
};
export default LoadProducts;
