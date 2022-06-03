import React, { useEffect } from "react";
import classes from "../CardDetails/CardDetails.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedCard, removeSelectedCard } from "../../redux/actions/cardActions";

const AlbumsDetails = () => {
  const card = useSelector((state) => state.card);
  const {id, userId, title} = card;
  const albumsId = useParams();
  console.log(card);
  console.log(albumsId);
  const dispatch = useDispatch();
  const fetchCardDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/albums/${albumsId.albumsId}`)
      .catch((err) => {
        console.log("Err ", err);
      });
    dispatch(selectedCard(response.data));
  };
  useEffect(() => {
    if (albumsId && albumsId !== "") fetchCardDetail();
    return () => {
      dispatch(removeSelectedCard());
    }
  }, [albumsId]);
  return (
    <div className={classes.flexContainer} key={id}>
      {Object.keys(card).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className={classes.card}>
          <h2>{id}</h2>
          <div>
            <h4>UserId: {userId}</h4>
            <h4>Title: {<p>{title}</p>}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumsDetails;
