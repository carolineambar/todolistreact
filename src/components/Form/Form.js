import React from "react";
import { postItems } from "../../api/config";
import PlusIcon from '../../assets/plus.png'
import './Form.css'

const Form = ({addNewItem}) => {
    const [value, setValue] = React.useState('')
    const handleSubmit = async (evento) => {
        evento.preventDefault()
        const newItem = await postItems({value})
        addNewItem(newItem)
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input value={value} onChange={(evento) => setValue(evento.target.value)} type="text" id="form" className="form__input" autoComplete="off" />
            <button className="form__button">
                <img className="form__button-image" src={PlusIcon} alt="Ícone para adição de item" />
            </button>
        </form>
    )
}

export default Form
