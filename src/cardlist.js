import React, { Component } from 'react';
import './App.css';


const Card = (props) => {
	return (
  	<div>
      <img width="75" src={props.person.avatar_url} alt="logo"/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.person.name}
        </div>
        <div>{props.person.email}</div>
      </div>
    </div>
  );
};

export default Card;
