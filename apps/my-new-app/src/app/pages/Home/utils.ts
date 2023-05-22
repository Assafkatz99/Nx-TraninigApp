export const workoutProperties = ["Date","Type","Description","Duration","Difficulty", "Edit", "Delete"]


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
  