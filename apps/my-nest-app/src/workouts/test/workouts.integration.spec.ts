import { Model } from 'mongoose';
import { Workout, WorkoutDocument } from '../workouts.schema';
import { TestingAppModule, appTest } from '../../test/setup';
import { getModelToken } from '@nestjs/mongoose';
import { WorkoutFactory } from './workouts.factory';
import rq from 'supertest';

describe('group e2e testing', () => {
  let WorkoutModel: Model<WorkoutDocument>;

  beforeEach(async () => {
    WorkoutModel = TestingAppModule.get<Model<WorkoutDocument>>(
      getModelToken(Workout.name)
    );
  });

  it('Comparing user input with database new document', async () => {
    const userInput = WorkoutFactory.build();
    const response = await rq(appTest.getHttpServer())
      .post('/workouts/createWorkout')
      .send(userInput)
      .expect(201);

    const docFromDb = await WorkoutModel.findOne().lean()
    const { _id,__v,id,...rest} = docFromDb;
    expect(rest).toMatchObject(userInput)
  });
});
