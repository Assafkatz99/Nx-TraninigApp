import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Workout, WorkoutDocument } from './workouts.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SearchWorkoutDto } from './dto/search-workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(@InjectModel(Workout.name) private WorkoutModel: Model<WorkoutDocument> ){}

  createWorkout(createWorkoutUserInput : CreateWorkoutDto) {

    return this.WorkoutModel.create(createWorkoutUserInput);
  }

  getWorkouts(searchWorkoutUserInput : SearchWorkoutDto) {
    return this.WorkoutModel.find()
    .sort({ date: 1 })
    .skip(searchWorkoutUserInput.skipAmount)
    .limit(searchWorkoutUserInput.limitAmount)
  }

  updateWorkout(id:string,updateWorkoutUserInput: UpdateWorkoutDto) {
    return this.WorkoutModel.findByIdAndUpdate(id,updateWorkoutUserInput)
  }

  remove(id: string) {
    return this.WorkoutModel.findByIdAndRemove(id);
  }
}
