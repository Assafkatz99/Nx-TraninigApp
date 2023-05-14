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
  createWorkout(@Body() createWorkoutDto: CreateWorkoutDto) {
    return this.workoutsService.createWorkout(createWorkoutDto);
  }

  @Post()
  getWorkouts(@Body() SearchWorkoutDto:SearchWorkoutDto) {
    return this.workoutsService.getWorkouts(SearchWorkoutDto);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutDto: UpdateWorkoutDto) {
    console.log(id)
    console.log(updateWorkoutDto)
    return this.workoutsService.updateWorkout(id, updateWorkoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutsService.remove(id);
  }
}
