
import MyNavbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Container from "./Components/Container"
import './App.css';

function App() {
  return (
    <>

      <BrowserRouter>
      <MyNavbar/>
        <Routes>
          <Route path='/' element={<Container/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
