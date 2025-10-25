import './Enviar.css'

const Enviar = (props) => {
    return(
        <div className='enviar_btn'>
            <button type='submit'>{props.texto}</button>
        </div>
    )
}

export default Enviar