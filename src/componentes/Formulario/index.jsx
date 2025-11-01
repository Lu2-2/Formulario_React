import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Foto from '../Foto/Foto'
import Enviar from '../Enviar/Enviar'
import { useState } from 'react'

const Formulario = (props) => {

    const cargos = [
        'Analista de dados', 
        'Back-End',
        'Ciber Security',
        'Data Science',
        'Front-End',
        'UX e Desing',
    ]
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
        })
    }

    return (
        <section className='Formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaboradores</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite o seu nome' 
                valor={nome} aoAlterado={valor => setNome(valor)}/>
                <ListaSuspensa obrigatorio={true} label='Seu cargo' item={cargos} 
                valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <Foto obrigatorio={true} label='Envie sua foto' valor={imagem} 
                aoAlterado={valor => setImagem(valor)}/>
                <Enviar texto='Criar card'></Enviar>
            </form>            
        </section>
    )
}

export default Formulario