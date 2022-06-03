import React from 'react';
import classes from '../CardComponent/CardComponent.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AlbumsComponent = () => {
    const cards = useSelector((state) => state.allCards.cards);
    const renderList = cards.map((card) => {
        const {id, title, userId} = card;
        return (
            <div className={classes.flexContainer} key={id}>
                <Link to ={`/albums/${id}`}>
                  <div className={classes.card}>
                      <h2 style={{paddingTop: '1rem'}}>ID: {id}</h2>
                    <div style={{paddingTop: '1.5rem'}}>
                       <h3>UserId: <p>{userId}</p></h3>
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

export default AlbumsComponent