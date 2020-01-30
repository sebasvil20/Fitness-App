import React from 'react'
import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import AddButton from '../components/AddButton';

const Exercises = ({data}) =>(
    <React.Fragment>
        <Welcome
            username='Sebastian'
        />
        <ExerciseList
            exercises={data}
        />
        <AddButton />
    </React.Fragment>
)

export default Exercises