import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { SearchWorkoutDto } from './dto/search-workout.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}


  @Post("/createWorkout")
  createWorkout(@Body() createWorkoutUserInput: CreateWorkoutDto) {
    return this.workoutsService.createWorkout(createWorkoutUserInput);
  }

  @Post()
  getWorkouts(@Body() searchWorkoutUserInput:SearchWorkoutDto) {
    return this.workoutsService.getWorkouts(searchWorkoutUserInput);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutUserInput: UpdateWorkoutDto) {
    return this.workoutsService.updateWorkout(id, updateWorkoutUserInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutsService.remove(id);
  }
}
