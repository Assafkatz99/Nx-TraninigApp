import { Module } from '@nestjs/common';
import { WorkoutsModule } from '../workouts/workouts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(''),WorkoutsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
