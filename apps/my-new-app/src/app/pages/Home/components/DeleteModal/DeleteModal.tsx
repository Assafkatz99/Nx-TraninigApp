import React from 'react'
import { FormGroupWrapper } from '../CreateEditModalForm/CreateEditModalForm.styles'
import { Button } from '@mui/material'
import { deleteWorkout } from '../../Homepage.api'
import { useQueryClient } from '@tanstack/react-query'


const DeleteModal: React.FC<{toggleFn:(a:boolean)=>void, workoutId?:string}> = (props) => {
  const clientQuery = useQueryClient();
  
  const handleClick = async (decision:boolean) => {

    if(decision && props.workoutId){
      await deleteWorkout(props.workoutId)
    }
    clientQuery.refetchQueries(['getWorkouts']);

    props.toggleFn(false)
  }

  return (
    <>
     <h2>Would you like to delete this workout?</h2>
     <FormGroupWrapper>
      <Button variant='outlined' onClick={()=>handleClick(false)}>CANCEL</Button>
      <Button variant='contained' onClick={()=>handleClick(true)}>DELETE</Button>
     </FormGroupWrapper>
    </>

  )
}

export default DeleteModal
