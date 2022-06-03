import React, { useEffect } from "react";
import classes from "../CardDetails/CardDetails.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedCard, removeSelectedCard } from "../../redux/actions/cardActions";

const CommentsDetails = () => {
  const card = useSelector((state) => state.card);
  const {id, title, body, name, email} = card;
  const commentsId = useParams();
  console.log(card);
  console.log(commentsId);
  const dispatch = useDispatch();
  const fetchCardDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/comments/${commentsId.commentsId}`)
      .catch((err) => {
        console.log("Err ", err);
      });
    dispatch(selectedCard(response.data));
  };
  useEffect(() => {
    if (commentsId && commentsId !== "") fetchCardDetail();
    return () => {
      dispatch(removeSelectedCard());
    }
  }, [commentsId]);
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
            <h4>{name}</h4>
            <h4>{email}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsDetails;
