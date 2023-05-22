export interface IWorkout {
    date: string;
    type: string;
    description: string;
    duration: string;
    difficulty: string;
  }

  export interface ITableRow {
    _id: string;
    date: string;
    type: string;
    description: string;
    duration: number;
    difficulty: string;
    createdAt: string;
    updatedAt: string;
  }