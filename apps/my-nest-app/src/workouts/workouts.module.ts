import { Module } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { WorkoutsController } from './workouts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Workout, WorkoutSchema } from './workouts.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Workout.name, schema: WorkoutSchema }])],
  controllers: [WorkoutsController],
  providers: [WorkoutsService],
  exports:[]
})
export class WorkoutsModule {}
