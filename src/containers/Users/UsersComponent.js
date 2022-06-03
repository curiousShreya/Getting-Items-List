import React from 'react';
import classes from '../CardComponent/CardComponent.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UsersComponent = () => {
    const cards = useSelector((state) => state.allCards.cards);
    const renderList = cards.map((card) => {
        const {id, username, email, name, phone} = card;
        return (
            <div className={classes.flexContainer} key={id}>
                <Link to ={`/Getting-Items-List/users/${id}`}>
                  <div className={classes.card}>
                      <h2 style={{paddingTop: '1rem'}}>Name: {name}</h2>
                      
                    <div style={{paddingTop: '1.5rem'}} className={classes.container}>
                        <h3>UserName: {username}</h3>
                        <h3>Email: <p>{email}</p></h3>
                        <h3>{phone}</h3>
                       
                       
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

export default UsersComponent