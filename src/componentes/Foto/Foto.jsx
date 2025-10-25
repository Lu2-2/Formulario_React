import './Foto.css'

const Foto = (props) => {
    return(
        <div className='campo_foto'>
            <label>{props.label}</label>
            <input type="file"/>
        </div>
    )
}

export default Foto