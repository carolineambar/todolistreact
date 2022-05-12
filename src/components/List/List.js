import React from "react";
import Item from "../Item/Item";
import { deleteItem } from "../../api/config";

const List = ({items, setItems}) => {
    const handleDelete = (id) => {
        const newItems = items.filter((item) => item.id !== id)
        setItems(newItems)
        deleteItem(id)
    }
    return (
        <ul>
            {
                items.map((item) => (
                    <Item key={item.id} handleDelete={handleDelete} value={item.value} id={item.id}/>
                ))
            }
        </ul>
    )
}

export default List
