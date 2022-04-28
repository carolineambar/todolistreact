import React from "react";
import TrashIcon from "../../assets/trash.png";
import './Item.css';

const Item = ({value, id}) => (
    <li class="item">
        <input type="checkbox" id={id} class="item__input"/>
        <label class="item__label" for={id}>
            <i class="item__check"></i>
            {value}
        </label>
        <button class="item__button">
            <img class="item__button-image" src={TrashIcon} alt="Ícone de lixeira para deletar item"/>
        </button>
    </li>
)

export default Item
