import React, { useEffect } from 'react';
import axios from 'axios';
import { setCards } from '../../redux/actions/cardActions';
import { useSelector, useDispatch } from 'react-redux';
import CommentsComponent from './CommentsComponent';

const CommentsList = (props) => {
    const cards = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchCards = async () => {
        const response = await axios
        .get(`https://jsonplaceholder.typicode.com/comments`)
        .catch(err => {
            console.log('ERR', err);
        })
        dispatch(setCards(response.data))
    };
    useEffect(() => {
        fetchCards();
    }, [])
    console.log(cards)
  return (
    <div className="ui grid container"> 
       <CommentsComponent />
    </div>
  )
}

export default CommentsList