import Banner from './componentes/banner/banner';
import Formulario from './componentes/Formulario';
import Colaboradores from './componentes/Colaboradores/Colaboradores';
import { useState } from 'react';
import Time from './componentes/Time';

function App() {


  
  const times = [
    {
      nome:'Analisa de dados',
      corPrimaria:'',
      corSegundaria:''
    },

    {
      nome:'Back-End',
      corPrimaria:'',
      corSegundaria:''
    },
    
    {
      nome:'Ciber Security',
      corPrimaria:'',
      corSegundaria:''
    },

    {
      nome:'Data Science',
      corPrimaria:'',
      corSegundaria:''
    },

    {
      nome:'Front-End',
      corPrimaria:'',
      corSegundaria:''
    },

    {
      nome:'Ux e Desing',
      corPrimaria:'',
      corSegundaria:''
    }
  ]

  const [colaoradores, setColaboradores] = useState([])
  
  const aoNovoColaboradorAdicioonado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicioonado}/>
      <Colaboradores label='Cartão de funcionário'></Colaboradores>
      <Time nome='Programação'></Time>
      <Time nome='Front-End'></Time>

    </div>
  );
}

export default App;
