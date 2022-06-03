import React, { useEffect } from 'react';
import axios from 'axios';
import { setCards, fetchCards } from '../../redux/actions/cardActions';
import { useSelector, useDispatch } from 'react-redux';
import PostsComponent from './PostsComponent';

const PostsList = () => {
    const cards = useSelector((state) => state);
    const dispatch = useDispatch();
    /* const fetchCards = async () => {
        const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .catch(err => {
            console.log('ERR', err);
        })
        dispatch(setCards(response.data))
    }; */
    useEffect(() => {
        dispatch(fetchCards());
    }, [])
    console.log(cards)
  return (
    <div className="ui grid container"> 
       <PostsComponent />
    </div>
  )
}

export default PostsList