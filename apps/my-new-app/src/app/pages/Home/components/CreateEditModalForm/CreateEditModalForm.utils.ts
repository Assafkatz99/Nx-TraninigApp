import { ITableRow, IWorkout, WorkoutTypes } from '@nx-test/types';
import { convertDurationToString } from '../../utils';



export const convertWorkoutDataToRender = (
  workoutData?: ITableRow
): IWorkout => {
  let convertedData: IWorkout;

  if (workoutData) {
    convertedData = {
      date: workoutData.date.split('T')[0],
      type: workoutData.type,
      description: workoutData.description,
      duration: convertDurationToString(workoutData.duration),
      difficulty: workoutData.difficulty,
    };
    return convertedData;
  } else {
    convertedData = {
      date: new Date().toISOString().split('T')[0],
      type: WorkoutTypes.POWER_LIFTING,
      description: '',
      duration: '00:00',
      difficulty: '',
    };
    return convertedData;
  }
};

export const convertDurationStringToNumber = (
  DurationString: string
): number => {
  const [hours, minutes] = DurationString.split(':');
  const totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
  return totalMinutes;
};

export const convertDateToISOString = (dateValue: string) => {
  return new Date(
    new Date(dateValue).setTime(new Date().getTime())
  ).toISOString();
};
