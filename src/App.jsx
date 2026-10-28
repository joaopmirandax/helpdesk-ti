import { useState } from 'react';
import NavBar from './components/NavBar';
import FormChamado from './components/FormChamado';
import ListaChamados from './components/ListaChamados';
import { useFetch } from './hooks/useFetch';

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState('lista');
  const { data: chamados, setData: setChamados, loading } = useFetch('http://localhost:3000/chamados');

  const handleAdicionarChamado = (novoChamado) => {
    setChamados((prev) => [...prev, novoChamado]);
  };

  return (
    <div>
      <NavBar paginaAtiva={paginaAtiva} onMudarPagina={setPaginaAtiva} />
      
      {paginaAtiva === 'lista' && (
        <ListaChamados chamados={chamados} loading={loading} />
      )}
      
      {paginaAtiva === 'form' && (
        <FormChamado 
          onAdicionarChamado={handleAdicionarChamado} 
          onMudarPagina={setPaginaAtiva} 
        />
      )}
    </div>
  );
}

export default App;