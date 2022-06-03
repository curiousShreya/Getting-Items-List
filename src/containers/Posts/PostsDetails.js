import React, { useEffect } from "react";
import classes from "../CardDetails/CardDetails.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedCard, removeSelectedCard } from "../../redux/actions/cardActions";

const PostsDetails = () => {
  const card = useSelector((state) => state.card);
  const {id, title, body} = card;
  const postsId = useParams();
  console.log("card data is: ", card);
  console.log("postsId is: ", postsId);
  const dispatch = useDispatch();
  const fetchCardDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postsId.postsId}`)
      .catch((err) => {
        console.log("Err ", err);
      });
      console.log("response is: ", response);
    dispatch(selectedCard(response.data));
  };
  useEffect(() => {
    if (postsId && postsId !== "") fetchCardDetail();
    return () => {
      dispatch(removeSelectedCard());
    }
  }, [postsId]);
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

export default PostsDetails;
