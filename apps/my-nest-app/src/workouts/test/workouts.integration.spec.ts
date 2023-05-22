import { Model } from "mongoose";
import { Workout, WorkoutDocument } from "../workouts.schema";
import { TestingAppModule, appTest } from "../../test/setup";
import { getModelToken } from "@nestjs/mongoose";
import {WorkoutFactory} from "./workouts.factory";
import rq from "supertest";

describe('group e2e testing', () => {
    let WorkoutModel: Model<WorkoutDocument>
  
    beforeEach(async () => {
        WorkoutModel = TestingAppModule.get<Model<WorkoutDocument>>(getModelToken(Workout.name));
    })

    it('should work(OUT)', async () => {
        const userInput = WorkoutFactory.build()

        const response = await rq(appTest.getHttpServer()).post("/createWorkout").send(userInput)

        console.log(response)
     });

})