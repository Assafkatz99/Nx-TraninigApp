import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import {  WorkoutTypes, WorkoutDifficulty  } from "@nx-test/types"


export class CreateWorkoutDto {

    @IsDateString()
    date:Date;

    @IsEnum(WorkoutTypes)
    type: WorkoutTypes;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNumber()
    duration: number;

    @IsEnum(WorkoutDifficulty)
    difficulty: WorkoutDifficulty;

}
