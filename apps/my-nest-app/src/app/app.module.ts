import { Module } from '@nestjs/common';
import { WorkoutsModule } from '../workouts/workouts.module';
import { MongooseModule } from '@nestjs/mongoose';
import dotenv from "dotenv"
dotenv.config();
 
@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PASSWORD}@nx-training-cluster.rrqp01a.mongodb.net/`),WorkoutsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
