export class Zone {
    ZoneId: number;
    Name: string;
    MaxCapacity: number;
    SubZones: Array<Zone>;
    ParentName: string;
}
