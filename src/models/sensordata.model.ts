import {Entity, model, property} from '@loopback/repository';

@model()
export class Sensordata extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  deviceId?: string;

  @property({
    type: 'string',
    required: true,
  })
  deviceType: string;

  @property({
    type: 'string',
  })
  gatewayId?: string;

  @property({
    type: 'string',
  })
  location?: string;

  @property({
    type: 'string',
  })
  errorCode?: string;

  @property({
    type: 'any',
    required: true,
  })
  sensorValue: any;

  @property({
    type: 'date',
    required: true,
  })
  dateTime: string;


  constructor(data?: Partial<Sensordata>) {
    super(data);
  }
}

export interface SensordataRelations {
  // describe navigational properties here
}

export type SensordataWithRelations = Sensordata & SensordataRelations;
