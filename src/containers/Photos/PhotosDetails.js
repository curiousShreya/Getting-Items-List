import React, { useEffect } from "react";
import classes from "../CardDetails/CardDetails.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedCard, removeSelectedCard } from "../../redux/actions/cardActions";

const PhotosDetails = () => {
  const card = useSelector((state) => state.card);
  const {id, title, url} = card;
  const photosId = useParams();
  console.log(card);
  console.log(photosId);
  const dispatch = useDispatch();
  const fetchCardDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/photos/${photosId.photosId}`)
      .catch((err) => {
        console.log("Err ", err);
      });
    dispatch(selectedCard(response.data));
  };
  useEffect(() => {
    if (photosId && photosId !== "") fetchCardDetail();
    return () => {
      dispatch(removeSelectedCard());
    }
  }, [photosId]);
  return (
    <div className={classes.flexContainer} key={id}>
      {Object.keys(card).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className={classes.card}>
          <h2>{id}</h2>
          <img src={url} alt="picture" />
          <div className={classes.container}>
            <h4>{title}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosDetails;
