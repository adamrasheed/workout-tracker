export default interface Exercise {
  id: string,
  timestamp: object,
  title: string,
  sets: number,
  reps: number,
  weight: number // kg
  notes?: string,
}