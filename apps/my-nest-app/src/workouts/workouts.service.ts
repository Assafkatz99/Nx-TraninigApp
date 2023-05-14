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

  createWorkout(createWorkoutDto: CreateWorkoutDto) {

    return this.WorkoutModel.create({
      date: createWorkoutDto.date,
      type: createWorkoutDto.type,
      description: createWorkoutDto.description,
      duration:createWorkoutDto.duration,
      difficulty: createWorkoutDto.difficulty
    });
  }

  getWorkouts(SearchWorkoutDto : SearchWorkoutDto) {
    return this.WorkoutModel.find()
    .sort({ date: 1 })
    .skip(SearchWorkoutDto.skipAmount)
    .limit(SearchWorkoutDto.limitAmount)
  }

  updateWorkout(id_:string,updateWorkoutDto: UpdateWorkoutDto) {
    return this.WorkoutModel.findByIdAndUpdate(id_,{
      date: updateWorkoutDto.date,
      type: updateWorkoutDto.type,
      description: updateWorkoutDto.description,
      duration:updateWorkoutDto.duration,
      difficulty: updateWorkoutDto.difficulty
    })
  }

  remove(id_: string) {
    return this.WorkoutModel.findByIdAndRemove(id_);
  }
}
