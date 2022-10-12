import React from 'react'
import PropTypes from 'prop-types'

function UserProfile(props) {
  
  const handleSubmitClick = () =>{
    props.onUpdateClick2("Madusanka"); // arguments can be passed dynamically
  } 

  return (
    <div>
        <h2>Madusanka Nipunajith : {props.company}</h2>
        <h3>University : {props.university}</h3>
        <h4>Good Morning</h4>
        <button onClick={props.onUpdateClick}>Submit</button>
        <button onClick={handleSubmitClick}>Submit</button>
    </div>
  )

}

// prop validation for developers
UserProfile.propTypes = {
   company : PropTypes.string.isRequired,
   name: PropTypes.string,
   address: PropTypes.shape({
      zipCode : PropTypes.number.isRequired,
      city: PropTypes.string.isRequired
   }).isRequired 
}

export default UserProfile;