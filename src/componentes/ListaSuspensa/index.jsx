import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    //console.log(props.itens)
    return(
    <div className="lista_suspensa">
        <label>{props.label}</label>
        <select>
            {props.item.map(itens => <option key={itens}>{itens}</option>)}
        </select>
    </div>
    )
}

export default ListaSuspensa 