import React, { useEffect } from "react";
import classes from "../CardDetails/CardDetails.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedCard, removeSelectedCard } from "../../redux/actions/cardActions";

const UsersDetails = () => {
  const card = useSelector((state) => state.card);
  const {id, name, address, website, phone} = card;
  const usersId = useParams();
  console.log(card);
  console.log(usersId);
  const dispatch = useDispatch();
  const fetchCardDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${usersId.usersId}`)
      .catch((err) => {
        console.log("Err ", err);
      });
    dispatch(selectedCard(response.data));
  };
  useEffect(() => {
    if (usersId && usersId !== "") fetchCardDetail();
    return () => {
      dispatch(removeSelectedCard());
    }
  }, [usersId]);
  return (
    <div className={classes.flexContainer} key={id}>
      {Object.keys(card).length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className={classes.card}>
          <h2>{name}</h2>
          
          <div className={classes.container}>
            <h4>Address: {<p>{address.street + " " + address.city + " " + address.zipcode}</p>}</h4>
            <h4>Website: {<p>{website}</p>}</h4>
            <h4>Phone: {<p>{phone}</p>}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersDetails;
