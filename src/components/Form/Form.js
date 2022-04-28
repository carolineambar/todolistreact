import React from "react";
import PlusIcon from '../../assets/plus.png'
import './Form.css'

const Form = () => (
    <form class="form" data-form>
        <input data-input type="text" id="form" class="form__input" autocomplete="off" />
        <button class="form__button">
            <img class="form__button-image" src={PlusIcon} alt="Ícone para adição de item" />
        </button>
    </form>
)

export default Form
