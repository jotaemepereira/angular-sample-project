import { Batch } from './batch';
import { User } from './user';

export class BatchTransportModel {
  BatchTransportId: number;
  StartDate: Date;
  FinishDate: Date;
  Batches: Array<Batch>;
  Carrier: User;
}
