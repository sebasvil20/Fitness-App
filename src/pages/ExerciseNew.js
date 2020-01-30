import React from 'react'
import Card from '../components/Card'
import ExerciseForm from '../components/ExerciseForm'


const ExerciseNew = ({form, onChange,onSubmit}) => (
    <div className='ExerciseNew_Lateral_Spaces row'>
        <div className='col-sm ExerciseNew_Card_Space'>
            <Card {...form}/>
        </div>
        <div className='col-sm ExerciseNew_Form_Space'>
            <ExerciseForm
                onChange = {onChange}
                onSubmit = {onSubmit}
                form = {form}
            />
        </div>
    </div>
)

export default ExerciseNew