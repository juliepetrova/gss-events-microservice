/* eslint-disable import/no-cycle */
import { Leaderboard } from './Leaderboard';

export interface Event {
  id:number,
  eventName:string,
  date:Date,
  goal:string,
  description:string,
  startingLocation:string,
  leaderboards?:Leaderboard[]

}
