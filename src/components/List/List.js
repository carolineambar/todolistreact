import React from "react";
import Item from "../Item/Item";

const List = ({items}) => (
    <ul>
        {
            items.map((item) => (
                <Item value={item.value} id={item.id}/>
            ))
        }
    </ul>
)

export default List
