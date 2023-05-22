import { WorkoutsModule } from '../workouts/workouts.module';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import  mongoose  from 'mongoose';
import { join } from 'path';
import * as fs from 'fs';

export let appTest: INestApplication;
export let TestingAppModule: TestingModule;
let mongod: MongoMemoryServer;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  createConfigFile();
});

beforeEach(async () => {
  const uri = `${mongod.getUri()}${new mongoose.Types.ObjectId().toString()}`;
  TestingAppModule = await Test.createTestingModule({
    imports: [MongooseModule.forRoot(uri), WorkoutsModule],
    providers: [],
  }).compile();

  appTest = TestingAppModule.createNestApplication();
  appTest.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  await appTest.init();

  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(uri);
    } finally {
      await mongoose.connection.db.dropDatabase();
    }
  } else {
    await mongoose.connection.db.dropDatabase();
  }
});


const createConfigFile = () => {
  const cwd = process.cwd();
  const globalConfigPath = join(cwd, 'globalConfig.json');

  const mongoConfig = { mongoUri: '' };
  mongoConfig.mongoUri = mongod.getUri();
  // Write global config to disk because all tests run in different contexts.
  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));
};

afterAll(async () => {
  appTest.close();
  await mongoose.disconnect();
  await mongod.stop();
});
