import React from "react";
import TrashIcon from "../../assets/trash.png";
import './Item.css';

const Item = ({value, id, handleDelete}) => (
    <li className="item">
        <input type="checkbox" id={id} className="item__input"/>
        <label className="item__label" htmlFor={id}>
            <i className="item__check"></i>
            {value}
        </label>
        <button onClick={() => handleDelete(id)} className="item__button">
            <img className="item__button-image" src={TrashIcon} alt="Ícone de lixeira para deletar item"/>
        </button>
    </li>
)

export default Item
