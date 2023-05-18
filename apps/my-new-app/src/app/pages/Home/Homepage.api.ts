import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ITableRow } from './components/TableRowComponent/TableRowComponent';


interface ISubmitFormValue {
    date: string;
    type: string;
    description: string;
    duration: number  ;
    difficulty: string;
}

export const useGetWorkouts = (skipAmount = 0, limitAmount = 0) => {
  const body = {
    "skipAmount": skipAmount,
    "limitAmount": limitAmount,
  };
  return useQuery({
    queryKey: ['getWorkouts'],
    queryFn: () =>
      axios.post<ITableRow[]>(
        'http://localhost:3000/api/workouts',body,
        { headers: { 'Content-Type': 'application/json' } }
        
      ),
  });
};

export const postWorkout = async (workoutData:ISubmitFormValue) =>{
    const response = await axios.post(
        'http://localhost:3000/api/workouts/createWorkout',workoutData,
        { headers: { 'Content-Type': 'application/json' } }
        )
    
    return response
    }

export const editWorkout = async (workoutData:ISubmitFormValue,workoutId:string) =>{
    const response = await axios.patch(
        `http://localhost:3000/api/workouts/${workoutId}`,workoutData,
        { headers: { 'Content-Type': 'application/json' } }
        )
    
    return response
    }

export const deleteWorkout = async (workoutId:string) =>{
    const response = await axios.delete(
        `http://localhost:3000/api/workouts/${workoutId}`,
        { headers: { 'Content-Type': 'application/json' } }
        )
    return response
    }

  