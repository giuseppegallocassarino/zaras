import Header from './components/Header';
import Cover from './components/Cover';
import Footer from './components/Footer';
import './App.css';


const INIT_STATE = {
  name: "Zaras",
  nav: [
    { link: "/", label: "Home" },
    { link: "/chisiamo", label: "Chi siamo" },
    { link: "/products", label: "I nostri prodotti" },
  ],
  friendsPreview: [],
  fontFamily: "",
};



function App() {


  return (
    <div>
      <Header name={INIT_STATE.name} links={INIT_STATE.nav} />
      
      <Cover />
       
      <Footer/>
    </div>
  );
}

export default App;
