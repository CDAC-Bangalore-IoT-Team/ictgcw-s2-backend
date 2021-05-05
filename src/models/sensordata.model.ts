import {Entity, model, property} from '@loopback/repository';

@model()
export class Sensordata extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  deviceid?: string;

  @property({
    type: 'string',
    required: true,
  })
  devicetype: string;

  @property({
    type: 'string',
  })
  gatewayid?: string;

  @property({
    type: 'string',
  })
  location?: string;

  @property({
    type: 'string',
  })
  errorcode?: string;

  @property({
    type: 'number',
    required: true,
  })
  sensorvalue: number;

  @property({
    type: 'date',
    required: true,
  })
  datetime: string;


  constructor(data?: Partial<Sensordata>) {
    super(data);
  }
}

export interface SensordataRelations {
  // describe navigational properties here
}

export type SensordataWithRelations = Sensordata & SensordataRelations;
