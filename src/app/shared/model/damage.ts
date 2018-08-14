import { DamageImage } from './damageImage';

export class Damage {
  constructor(
    public Images: Array<DamageImage>,
    public Description: string
  ) {}

  DamageId: number;
  DamageUrl: string;''
}
