import Header from './components/Header';
import Img from './components/Cover';
import Footer from './components/Footer';
import Home from './pages/Home';

import './App.css';


function App() {
const name = "Zaras";
const nav = [
  { link: "/", label: "Home" },
  { link: "/carrello", label: "Carrello" },
  { link: "/info", label: "Info" },
];

  return (
    <div>
      <Header   name={name} links={nav}/>

      <Img src="https://images.unsplash.com/photo-1535557597501-0fee0a500c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"/>
       <Home/>
      <Footer/>
    </div>
  );
}

export default App;
