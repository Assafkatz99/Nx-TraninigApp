import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {  WorkoutTypes, WorkoutDifficulty  } from "@nx-test/types"
import { HydratedDocument } from "mongoose";



@Schema({timestamps:true})
export class Workout{

    @Prop({type: Date, required:true})
    date:Date

    @Prop({type: String, required:true })
    type: WorkoutTypes

    @Prop({type: String, required:true})
    description: string

    @Prop({type: Number, required:true})
    duration: number

    @Prop({type: String, required:true})
    difficulty: WorkoutDifficulty
 
}

export type WorkoutDocument = HydratedDocument<Workout>
export const WorkoutSchema = SchemaFactory.createForClass(Workout)