import { Vehicle } from './vehicle';

export class VehicleGroupedByState {
  WaitingInPort: Array<Vehicle>;
  ReadyToShip: Array<Vehicle>;
  InTransit: Array<Vehicle>;
  WaitingInArea: Array<Vehicle>;
  InArea: Array<Vehicle>;
  ReadyForSell: Array<Vehicle>;
  Sold: Array<Vehicle>;
}
