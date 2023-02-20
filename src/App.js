import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./componentes/Footer/Footer"
import Main from "./componentes/Main/Main"
import ListComplete from "./componentes/ListComplete/ListComplete"
import NavBar from './componentes/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Main /> }/>
          <Route path="/completed" element={ <ListComplete /> } />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
