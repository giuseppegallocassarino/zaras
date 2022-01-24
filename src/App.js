import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Products } from "./pages/Products/Products";
import { Home } from "./pages/Home/Home";
import { ChiSiamo } from "./pages/ChiSiamo/ChiSiamo";
import Footer from "./components/Footer";

const INIT_STATE = {
  name: "Zaras",
  nav: [
    { link: "/", label: "Home" },
    { link: "/chisiamo", label: "Chi siamo" },
    { link: "/products", label: "I nostri prodotti" },
  ],
  productsPreview: [],
};

const articles = [
  {
    id: "1a",
    title: "Il Brand",
    bodytext:
      "Siamo un brand italiano di abbigliamento, di proprietà della Ennepi Spa, nato dall’iniziativa creativa dei fratelli Nunziata. Di origine campana, la storia dell’azienda inizia proprio a Napoli nel 2003 con l’apertura del primo monomarca nel cuore della città.",
  },
  {
    id: "2a",
    title: "La Storia",
    bodytext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ex cursus, elementum ligula ac, auctor dolor. Ut tincidunt pretium feugiat. Nam fringilla dictum dolor malesuada volutpat. Vestibulum at ligula vel sapien dapibus commodo at in felis. Phasellus ac feugiat ex. Vestibulum condimentum felis sem, nec semper lorem rhoncus ac. Vestibulum eu aliquam elit. Fusce orci sem, pellentesque vel arcu mollis, auctor aliquam sapien. ",
  },
  {
    id: "3a",
    title: "I Prodotti",
    bodytext:
      "Sed ut viverra nisl. Vivamus eu neque dolor. Morbi maximus viverra diam sit amet volutpat. Donec varius pellentesque lacus. Morbi in auctor neque. In egestas dui enim, vitae congue eros pellentesque vitae. Pellentesque elementum et sem nec sollicitudin. Nunc feugiat gravida orci, quis eleifend tellus aliquet quis. Quisque facilisis est ac tellus facilisis condimentum. ",
  },
];

function App() {
  return (
    <div>
      <Header name={INIT_STATE.name} links={INIT_STATE.nav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/chisiamo"
          element={articles.map((article, index) => (
            <ChiSiamo key={index} data={article} />
          ))}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
