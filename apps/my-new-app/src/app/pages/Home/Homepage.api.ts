import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ITableRow, IWorkout } from '@nx-test/types';
interface ISubmitFormValue extends Omit<IWorkout, 'duration'> {
  duration: number;
}


export const useGetWorkouts = (skipAmount = 0, limitAmount = 0) => {
  const body = {
    skipAmount: skipAmount,
    limitAmount: limitAmount,
  };

  return useQuery({
    queryKey: ['getWorkouts'],
    queryFn: () =>
      axios.post<ITableRow[]>(`${import.meta.env.VITE_NX_APP_BASE_URL}/api/workouts`, body, {
        headers: { 'Content-Type': 'application/json' },
      }),
  });
};

export const postWorkout = async (workoutData: ISubmitFormValue) => {
  const response = await axios.post(
    `${import.meta.env.VITE_NX_APP_BASE_URL}/api/workouts/createWorkout`,
    workoutData,
    { headers: { 'Content-Type': 'application/json' } }
  );

  return response;
};

export const editWorkout = async (
  workoutData: ISubmitFormValue,
  workoutId: string
) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_NX_APP_BASE_URL}/api/workouts/${workoutId}`,
    workoutData,
    { headers: { 'Content-Type': 'application/json' } }
  );

  return response;
};

export const deleteWorkout = async (workoutId: string) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_NX_APP_BASE_URL}/api/workouts/${workoutId}`,
    { headers: { 'Content-Type': 'application/json' } }
  );
  return response;
};
