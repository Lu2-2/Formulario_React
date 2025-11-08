import Colaborador from '../Colaborador/Colaborador'
import './Time.css'


const Time = (props) => {
    const css = {backgroundColor: props.corSegundaria}

    return(
        <div className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <Colaborador/>
        </div>
    )
}

export default Time