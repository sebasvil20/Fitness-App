import React from 'react'
import ReactDOM from 'react-dom'




const user={
    firstName: 'Sebastian',
    lastName: 'Villegas',
    avatar: 'https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-22-512.png'
}

function getName(user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
    if(user){
        return <h1>Hello {getName(user)} </h1>
    }
    return <h1>Hello Stranger </h1>
}


const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} />
    </div>
)
const container = document.getElementById('root')

ReactDOM.render(element,container);