import Exercise from './excercise'

export default interface WorkoutType {
  id: string,
  timestamp: object,
  exercises: Array<Exercise>
}