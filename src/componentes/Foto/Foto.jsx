import './Foto.css'

const Foto = (props) => {
    return(
        <div className='campo_foto'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} type='file'/>
        </div>
    )
}

export default Foto