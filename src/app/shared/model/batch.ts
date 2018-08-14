import { Vehicle } from './vehicle';
import { User } from './user';

export class Batch {
  BatchId: number;
  Name: string;
  Description: string;
  Vehicles: Array<Vehicle>;
  Creator: User;
}
