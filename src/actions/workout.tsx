
import WorkoutType from '../types/workout'
// Action Creators

export const ADD_WORKOUT = `ADD_WORKOUT`
// const UPDATE_WORKOUT = `UPDATE_WORKOUT`
// export const DELETE_WORKOUT = `DELETE_WORKOUT`


export const addWorkout = ({timestamp, exercises}: WorkoutType) => ({
  type: ADD_WORKOUT,
  timestamp,
  exercises,
})