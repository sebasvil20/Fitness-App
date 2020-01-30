import React from 'react'
import './Styles/AddButton.css'
import buttomImg from '../images/add.png'
import { Link } from 'react-router-dom'


const AddButton = () => (
    <Link to="/exercise/new">
        <img src={buttomImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)

export default AddButton