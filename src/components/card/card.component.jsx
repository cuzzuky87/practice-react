import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}/>
        <h1 key={props.monsters.id}>{props.monsters.name}</h1>
    </div>
)