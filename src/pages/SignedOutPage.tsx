import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/loginlogout.css";

function SignedOutPage() {
  return (
    <>
      <div className='center'>
        <h1>You have been signed out</h1>
        <FontAwesomeIcon icon={faCircleCheck} id='checkbtn'/>
      </div>
    </>
  )
}

export default SignedOutPage