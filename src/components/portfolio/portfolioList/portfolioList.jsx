import React from 'react';
import './portfolioList.scss';

export default function PortfolioList(props) {

    const listClickHandler = () => {
        props.onClick(props.listTitle);
    }

    console.log(props);
    return (
        <li
        className={`list ${props.selected === props.listTitle ? 'selected' : ''}`}
        onClick={listClickHandler}
        
        >{props.listTitle}</li>
    )
}
