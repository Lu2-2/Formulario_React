import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return(
    <div className="lista_suspensa">
        <label>{props.label}</label>
        <select required={props.obriagatorio}>
            {props.item.map(itens => <option key={itens}>{itens}</option>)}
        </select>
    </div>
    )
}

export default ListaSuspensa 