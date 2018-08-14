import { Inspection } from './inspection';

export enum VehicleType
{
  Car,
  Truck,
  SUV,
  Van,
  Minivan
}

export class Vehicle {
    VehicleId: number;
    VIN: string;
    Brand: string;
    Model: string;
    Year: number;
    Color: string;
    Type: VehicleType;
    State: number;
    Inspections: Array<Inspection>;
    ZoneName: string;
}
