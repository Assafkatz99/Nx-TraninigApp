import {  IsNumber } from "class-validator";


export class SearchWorkoutDto {

  @IsNumber()
  skipAmount:number

  @IsNumber()
  limitAmount:number

}
