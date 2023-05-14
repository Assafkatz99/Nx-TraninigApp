import { IsDateString, IsEnum, IsNumber, IsString } from "class-validator";
import {  WorkoutTypes, WorkoutDifficulty  } from "@nx-test/types"


export class CreateWorkoutDto {

    @IsDateString()
    date:Date;

    @IsEnum(WorkoutTypes)
    type: WorkoutTypes;

    @IsString()
    description: string;

    @IsNumber()
    duration: number;

    @IsEnum(WorkoutDifficulty)
    difficulty: WorkoutDifficulty;

}
