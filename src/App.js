import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login"
import Cadastro from "./pages/cadastro";
import Feed from "./pages/feed";
import Perfil from "./pages/perfil";
import Configuracoes from "./pages/configurações";
import Livros from "./pages/livros";
import Reclamacao from "./pages/reclamações";
import Vestibular from "./pages/vestibulares";

function App() {
  return (
    <>
     <Router>
        <Routes>
            <Route index element = {<Login/>}/>
            <Route path="/Cadastro" element={<Cadastro/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/configurações" element={<Configuracoes/>}/>
            <Route path="/livros" element={<Livros/>}/>
            <Route path="/reclamações" element={<Reclamacao/>}/>
            <Route path="/vestibulares" element={<Vestibular/>}/>
        </Routes>
      </Router>
   
    </>
  );
} 

export default App;

