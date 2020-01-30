import React from "react";
import '../components/Styles/Errors.css'
import FatalErrorImg from '../images/500.png'

const FatalError = () => (
    <div className='text-center'>
        <h1 className='Error_Text'>Error: 500 Unexpected Error</h1>
        <img src={FatalErrorImg} alt="500UnexpectedError" className='Error_Image'/>
    </div>
)

export default FatalError