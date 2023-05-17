export const workoutProperties = ["Date","Type","Description","Duration","Difficulty", "Edit", "Delete"]


export const dataExample = [
  {
      "_id": "646343502b85fcd41d2d2dd0",
      "date": "2023-05-10T12:34:56.789Z",
      "type": "power lifting",
      "description": "abcdef1 efg",
      "duration": 30,
      "difficulty": "hard",
      "createdAt": "2023-05-16T08:48:16.391Z",
      "updatedAt": "2023-05-16T08:48:16.391Z"
  },
  {
      "_id": "646343592b85fcd41d2d2dd2",
      "date": "2023-05-10T12:34:56.789Z",
      "type": "power lifting",
      "description": "abcdefg",
      "duration": 30,
      "difficulty": "easy",
      "createdAt": "2023-05-16T08:48:25.201Z",
      "updatedAt": "2023-05-16T08:48:25.201Z"
  },
  {
      "_id": "6463435e2b85fcd41d2d2dd4",
      "date": "2023-05-10T12:34:56.789Z",
      "type": "power lifting",
      "description": "abcdefg",
      "duration": 100,
      "difficulty": "easy",
      "createdAt": "2023-05-16T08:48:30.109Z",
      "updatedAt": "2023-05-16T08:48:30.109Z"
  },
  {
      "_id": "646343632b85fcd41d2d2dd6",
      "date": "2023-05-10T12:34:56.789Z",
      "type": "power lifting",
      "description": "gdfsgdsfg",
      "duration": 50,
      "difficulty": "easy",
      "createdAt": "2023-05-16T08:48:35.728Z",
      "updatedAt": "2023-05-16T08:48:35.728Z"
  },
  {
      "_id": "6463436b2b85fcd41d2d2dd8",
      "date": "2023-05-10T12:34:56.789Z",
      "type": "running",
      "description": "gdfsgdsfg",
      "duration": 50,
      "difficulty": "easy",
      "createdAt": "2023-05-16T08:48:43.151Z",
      "updatedAt": "2023-05-16T08:48:43.151Z"
  },
  {
      "_id": "6463434c2b85fcd41d2d2dce",
      "date": "2023-05-11T12:34:56.789Z",
      "type": "power lifting",
      "description": "abcdefg",
      "duration": 30,
      "difficulty": "hard",
      "createdAt": "2023-05-16T08:48:12.567Z",
      "updatedAt": "2023-05-16T08:48:12.567Z"
  },
  {
      "_id": "6461e3fb21e955a8172a2bc5",
      "date": "2023-05-12T12:34:56.789Z",
      "type": "power lifting",
      "description": "abcdefg",
      "duration": 30,
      "difficulty": "hard",
      "createdAt": "2023-05-15T07:49:15.644Z",
      "updatedAt": "2023-05-15T07:49:15.644Z"
  },
  {
      "_id": "646343482b85fcd41d2d2dcc",
      "date": "2023-05-12T12:34:56.789Z",
      "type": "power lifting",
      "description": "abcdefg",
      "duration": 30,
      "difficulty": "hard",
      "createdAt": "2023-05-16T08:48:08.838Z",
      "updatedAt": "2023-05-16T08:48:08.838Z"
  }
]


export const convertDate = (date:Date) : string => {
return date.toLocaleDateString("en-GB")
}

export const convertDurationToString = (duration:number) => {
    const hours = Math.floor(duration / 60); 
    const minutes = duration % 60; 
  
    const paddedMinutes = minutes.toString().padStart(2, '0');
  
      const paddedHours = hours.toString().padStart(2, '0');
      return `${paddedHours}:${paddedMinutes}`; 

    
  };
  