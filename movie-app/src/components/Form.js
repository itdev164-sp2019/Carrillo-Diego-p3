import React from 'react';
import '../App.css'



const Form = props => (
      <form className="form-container" onSubmit={props.getMovie}>
        <input className="form-input" type="text" placeholder="Search Movie" name="movieName" />
        <button className="form-button">Search</button>
      </form>
)
  


export default Form;
