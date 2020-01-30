import React from 'react'
import './Styles/Welcome.css'

const Welcome = (props) =>(
    <div className='container'>
        <div  className='Fitness-User-Info'>
            <h1>Hello {props.username}!</h1>
            <p>Let's workout to get some gains</p>
        </div>
    </div>
)

export default Welcome
