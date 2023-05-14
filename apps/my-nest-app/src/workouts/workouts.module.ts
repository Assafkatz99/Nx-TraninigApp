import { Module } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { WorkoutsController } from './workouts.controller';

@Module({
  imports:[],
  controllers: [WorkoutsController],
  providers: [WorkoutsService],
  exports:[]
})
export class WorkoutsModule {}
