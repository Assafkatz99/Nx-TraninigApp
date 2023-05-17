import { workoutProperties } from "../../utils";

export const cellBaseStyle = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  maxWidth: `${100 / workoutProperties.length}%`
};
