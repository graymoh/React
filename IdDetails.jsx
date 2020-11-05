import React from 'react'

function IdDetails(props){
return props.user.firstname +' '+ props.user.lastName +' '+ props.user.dateOfBirth
+' '+ props.user.subLocation

}

export default IdDetails;