import React from "react";
import PlusIcon from '../../assets/plus.png'
import './Form.css'

const Form = ({addNewItem}) => {
    const [value, setValue] = React.useState('')
    const handleSubmit = (evento) => {
        evento.preventDefault()
        addNewItem({id:3, value})
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit} class="form">
            <input value={value} onChange={(evento) => setValue(evento.target.value)} type="text" id="form" class="form__input" autocomplete="off" />
            <button class="form__button">
                <img class="form__button-image" src={PlusIcon} alt="Ícone para adição de item" />
            </button>
        </form>
    )
}

export default Form
