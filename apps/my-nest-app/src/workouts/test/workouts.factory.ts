import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { Workout } from '../workouts.schema';
import { WorkoutDifficulty, WorkoutTypes } from '@nx-test/types';


export const WorkoutFactory = Factory.define<Workout>(() => ({
date: faker.date.past(),
description: faker.word.words(11),
difficulty: faker.helpers.enumValue(WorkoutDifficulty),
duration: faker.number.int({min:23, max:678}),
type:faker.helpers.enumValue(WorkoutTypes),
}));