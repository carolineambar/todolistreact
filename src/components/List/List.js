import React from "react";
import Item from "../Item/Item";

const List = ({items, setItems}) => {
    const handleDelete = (id) => {
        const newItems = items.filter((item) => item.id !== id)
        setItems(newItems)
    }
    return (
        <ul>
            {
                items.map((item) => (
                    <Item handleDelete={handleDelete} value={item.value} id={item.id}/>
                ))
            }
        </ul>
    )
}

export default List
