import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Foto from '../Foto/Foto'
import Enviar from '../Enviar/Enviar'

const Formulario = () => {

    const cargos = [
        'Analista de dados', 
        'Back-End',
        'Ciber Security',
        'Data Science',
        'Front-End',
        'UX e Desing',
    ]

    return (
        <section className='Formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaboradores</h2>
                <CampoTexto label='Nome' placeholder='Digite o seu nome'/>
                <ListaSuspensa label='Seu cargo' item={cargos}/>
                <Foto label='Envie sua foto'/>
                <Enviar texto='Criar card'></Enviar>
            </form>
        </section>
    )
}

export default Formulario