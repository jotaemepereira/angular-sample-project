import { Vehicle } from './vehicle';
import { User } from './user';

export class ReportByVin {

  VehicleHistoryId: number;
  Vehicle: Vehicle;
  State: number;
  Responsible: User;
  FromZone: string;
  ToZone: string;
}
