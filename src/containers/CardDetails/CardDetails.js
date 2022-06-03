import React, { useEffect } from "react";
import classes from "./CardDetails.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedCard, removeSelectedCard } from "../../redux/actions/cardActions";

const CardDetails = () => {
  const card = useSelector((state) => state.card);
  const {id, title, body} = card;
  const cardId = useParams();
  console.log(card);
  console.log(cardId);
  const dispatch = useDispatch();
  const fetchCardDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${cardId.cardId}`)
      .catch((err) => {
        console.log("Err ", err);
      });
    dispatch(selectedCard(response.data));
  };
  useEffect(() => {
    if (cardId && cardId !== "") fetchCardDetail();
    return () => {
      dispatch(removeSelectedCard());
    }
  }, [cardId]);
  return (
    <div className={classes.flexContainer} key={id}>
      {Object.keys(card).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className={classes.card}>
          <h2>{id}</h2>
          <div>
            <p>{body}</p>
            <h4>{title}</h4>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
