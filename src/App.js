import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Login from './pages/login/login';
import Turma from './pages/classes/turmas';
import Boletim from './pages/bulletin/boletim';
import Biblioteca from './pages/libraryP/biblioteca';
import Comunicado from './pages/comunicados/comunicados';


import './app.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/turmas" element={<Turma />}></Route>
        <Route path="/boletim" element={<Boletim />}></Route>
        <Route path="/biblioteca" element={<Biblioteca />}></Route>
        <Route path="/comunicado" element={<Comunicado />}></Route>
        {/* Adicionando a rota de detalhes da turma */}
        <Route path="/detalhes-turma/:turma" element={<Comunicado />} />
      </Routes>
    </Router>
  );
}

export default App;
