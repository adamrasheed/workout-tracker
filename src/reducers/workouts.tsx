import  WorkoutType  from '../types/workout'
import { ADD_WORKOUT } from '../actions/workout'
import { Action } from '../types/redux'

const initialState: Array<WorkoutType> = []

export const workouts = (state = initialState , action: Action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return [
        ...state,
        {
          id: action.id,
          timestamp: action.timestamp,
          exercises: action.exercises,
        }
      ]
      // Update Workout
      // Delete Workout
    default:
      return state
  }
} 