import { Home } from "./containers/Home.jsx";
import { BrowserRouter,Routes, Route, HashRouter } from "react-router-dom";
import { Register } from "./containers/Register.jsx"
export function App() {
  return( 
    <HashRouter>
     <Routes>
     <Route path="register" element={<Register/>}/>
     <Route path="/" element={<Home/>}/>
      
    </Routes>
    </HashRouter> 
  );
}
