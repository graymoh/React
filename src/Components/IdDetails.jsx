import React from 'react'

function IdDetails(props){
return <h3>Hi, My user details as they appear on my id are as below<br></br>Firstname: {props.user.firstname} <br></br>Lastname: { props.user.lastName} <br></br>Date Of Birth: {props.user.dateOfBirth}
<br></br>SubLocation: { props.user.subLocation}</h3>

}

export default IdDetails;