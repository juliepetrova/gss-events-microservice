/* eslint-disable import/no-cycle */
import { Event } from './Event';

export interface Leaderboard {
  id:number,
  event:Event,
  userId:number,
  dyration:string,
  distance:string,
  checkpoints:string

}
