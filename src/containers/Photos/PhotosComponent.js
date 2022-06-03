import React from 'react';
import classes from '../CardComponent/CardComponent.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PhotosComponent = () => {
    const cards = useSelector((state) => state.allCards.cards);
    const renderList = cards.map((card) => {
        const {id, url} = card;
        return (
            <div className={classes.flexContainer} key={id}>
                <Link to ={`/Getting-Items-List/photos/${id}`}>
                  <div className={classes.card}>
                      <h2 style={{paddingTop: '1rem'}}>ID: {id}</h2>
                      <img src={url} alt="picture" />
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

export default PhotosComponent