import React from "react";
import './Title.css';

const Title = () => {
    const [value, setValue] = React.useState('My List')
    return (
        <input type="text" value={value} onChange={(evento) => setValue(evento.target.value)} placeholder="My List" class="title"/>
    )
}

export default Title
