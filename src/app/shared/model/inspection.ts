import { Vehicle } from './vehicle';
import { User } from './user';
import { Damage } from './damage';

export class Inspection {
  InspectId: number;
  Date: Date;
  Vehicle: Vehicle;
  User: User;
  Place: number;
  Damages: Array<Damage>;
}
