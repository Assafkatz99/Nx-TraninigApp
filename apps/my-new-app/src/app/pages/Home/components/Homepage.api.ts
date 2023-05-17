import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ITableRow } from './TableRowComponent/TableRowComponent';


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

export const postWorkout = (workoutData:ISubmitFormValue) =>{
    const response = axios.post(
        'http://localhost:3000/api/workouts/createWorkout',workoutData,
        { headers: { 'Content-Type': 'application/json' } }
        )
    
    return response
    }