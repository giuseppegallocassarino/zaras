import { Product } from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://fakestoreapi.com/products";

const ProductsPrew = (props) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    // const prod = response.data
    setProducts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  //   element={articles.map((article, index) => (
  //     <ChiSiamo key={index} data={article} />
  //   ))}
  return (
    <ul>
      {products.map((prod) => (
        <Product
          key={prod.id}
          title={prod.title}
          description={prod.description}
          price={prod.price}
          image={prod.image}
        />
      ))}
    </ul>
  );
};

export { ProductsPrew };
