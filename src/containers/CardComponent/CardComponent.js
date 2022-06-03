import React from 'react';
import classes from './CardComponent.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CardComponent = () => {
    const cards = useSelector((state) => state.allCards.cards);
    const renderList = cards.map((card) => {
        const {id, title, userId} = card;
        return (
            <div className={classes.flexContainer} key={id}>
                <Link to ={`/Getting-Items-List/card/${id}`}>
                  <div className={classes.card}>
                      <h2 style={{paddingTop: '1rem'}}>ID: {id}</h2>
                    <div style={{paddingTop: '1.5rem'}}>
                       <h3>{userId}</h3>
                       <h4>Title: {<p>{title}</p>}</h4>
                       
                    </div>
                  </div>
                </Link>
            </div>
          )
    })
    return (
        <>
          {renderList}
        </>
    )
  
}

export default CardComponent