import React from 'react'
import circlesImg from '../images/circles.png'
import EmptyImg from '../images/empty.png'
import './Styles/Card.css'

const Card = ({ title, description, img, leftColor, rightColor}) => (
    <div className='card mx-auto Fitness-Card'
         style={{
             backgroundImage:`url(${circlesImg}), linear-gradient(to right, ${leftColor || '#57e2e5'}, ${rightColor || '#45cb85'})`
         }}
    >
        <div className='card-body'>
            <div className='row center'>
                <div className='col-6'>
                    <img src={img || EmptyImg} className='float-right imag' alt=""/>
                </div>
                <div className='col-6 Fitness-Card-Info'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)

export default Card