import React from 'react';
import classes from '../CardComponent/CardComponent.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TodosComponent = () => {
    const cards = useSelector((state) => state.allCards.cards);
    const renderList = cards.map((card) => {
        const {id, title, userId} = card;
        return (
            <div className={classes.flexContainer} key={id}>
                <Link to ={`/Getting-Items-List/todos/${id}`}>
                  <div className={classes.card}>
                      <h2 style={{paddingTop: '1rem'}}>ID: {id}</h2>
                      
                    <div style={{paddingTop: '1.5rem'}} className={classes.container}>
                        <h3>UserId: {userId}</h3>
                       <h3>Title: <p>{title}</p></h3>
                      
                       
                       
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

export default TodosComponent