import { useState } from 'react'
import Enviar from '../Enviar/Enviar'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

import './Formulario.css'

const Formulario = (props) => {
   
const [nome, setNome] = useState('');
const [Cargo, setCargo] = useState('');
const [imagem, setImagem] = useState('');

const [time, setTime] = useState('');


    const aoSalvar = (evento) => {
        evento.preventDefault()
         props.aoColaboradorCadastrado({
            nome,
            Cargo,
            imagem,
            time
            
         })
    }

    return (
        <section className='Formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaboradores</h2>
                <CampoTexto
                 obrigatorio={true} 
                 label="Nome" 
                 placeholder="Digite o seu nome" 
                 valor={nome}
                 aoAlterado={valor => setNome(valor)}
                 />

                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                valor={Cargo}
                 aoAlterado={valor => setCargo(valor)}
                 />

                <CampoTexto label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor={imagem}
                 aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa
                obrigatorio={true}
                label="Time"
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />

                <Enviar text='Criar Card'/> 

            </form>
        </section>
    )
}

export default Formulario
