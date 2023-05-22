import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import React from 'react';
import { ITableRow } from '../TableRowComponent/TableRowComponent';
import { useFormik } from 'formik';
import {
  FormGroupWrapper,
  FormStyles,
  elementBaseStyle,
} from './CreateEditModalForm.styles';
import { WorkoutTypes, WorkoutDifficulty } from '@nx-test/types';
import {
  convertDurationStringToNumber,
  convertWorkoutDataToRender,
} from './CreateEditModalForm.utils';
import { editWorkout, postWorkout } from '../../Homepage.api';
import { useQueryClient } from '@tanstack/react-query';

const CreateEditModalForm: React.FC<{ data?: ITableRow, toggleFn:(a:boolean)=>void }> = (workoutData) => {
  const initialValues = convertWorkoutDataToRender(workoutData.data);
  const clientQuery = useQueryClient();


  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const convertedDuration = convertDurationStringToNumber(values.duration);
      const submitValue = {
        ...values,
        duration: convertedDuration,
        date:  new Date(new Date(values.date).setTime(new Date().getTime())).toISOString()
      };

      if (workoutData.data) {
        const response = editWorkout(submitValue,workoutData.data._id);
        response
          .catch((err) => console.log(err))
          .then((res) => {
          // console.log(res)
          clientQuery.refetchQueries(['getWorkouts']);
          }
          );
          
      } else {
        const response = postWorkout(submitValue);
        response
          .catch((err) => console.log(err))
          .then((res) => {
          // console.log(res)
          clientQuery.refetchQueries(['getWorkouts']);

        }
        );
      }
        workoutData.toggleFn(false)
      
    },
  });
  return (
    <>
      <h2>{workoutData.data? 'Edit' : 'Add'} Workout</h2>
      <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
        <FormStyles>
          <FormGroupWrapper>
            <FormControl>
              <TextField
                required
                sx={elementBaseStyle}
                label="Date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                variant="outlined"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </FormGroupWrapper>
          <FormGroupWrapper>
            <FormControl component="fieldset">
              <FormLabel disabled>Workout Type</FormLabel>
              <RadioGroup
                name="type"
                value={formik.values.type}
                onChange={formik.handleChange}
                row
              >
                <FormControlLabel
                  value={WorkoutTypes.POWER_LIFTING}
                  control={<Radio />}
                  label={WorkoutTypes.POWER_LIFTING}
                />
                <FormControlLabel
                  value={WorkoutTypes.RUNNING}
                  control={<Radio />}
                  label={WorkoutTypes.RUNNING}
                />
                <FormControlLabel
                  value={WorkoutTypes.OTHER}
                  control={<Radio />}
                  label={WorkoutTypes.OTHER}
                />
              </RadioGroup>
            </FormControl>
          </FormGroupWrapper>

          <FormGroupWrapper>
            <FormControl>
              <TextField
                select
                required
                sx={elementBaseStyle}
                label="Difficulty"
                name="difficulty"
                value={formik.values.difficulty}
                onChange={formik.handleChange}
                variant="outlined"
              >
                <MenuItem value={WorkoutDifficulty.EASY}>
                  {WorkoutDifficulty.EASY}
                </MenuItem>
                <MenuItem value={WorkoutDifficulty.MEDIUM}>
                  {WorkoutDifficulty.MEDIUM}
                </MenuItem>
                <MenuItem value={WorkoutDifficulty.HARD}>
                  {WorkoutDifficulty.HARD}
                </MenuItem>
              </TextField>
            </FormControl>
          </FormGroupWrapper>

          <FormGroupWrapper>
            <FormControl>
              <TextField
                required
                sx={elementBaseStyle}
                label="Duration"
                name="duration"
                value={formik.values.duration}
                onChange={formik.handleChange}
                variant="outlined"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </FormGroupWrapper>
          <FormGroupWrapper>
            <FormControl>
              <TextField
                sx={elementBaseStyle}
                label="Description"
                name="description"
                required
                value={formik.values.description}
                onChange={formik.handleChange}
                variant="outlined"
                multiline
                rows={4}
              />
            </FormControl>
          </FormGroupWrapper>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </FormStyles>
      </form>
    </>
  );
};

export default CreateEditModalForm;
