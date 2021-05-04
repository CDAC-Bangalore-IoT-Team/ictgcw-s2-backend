import {Entity, model, property} from '@loopback/repository';

@model()
export class Flowmeterdata extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  deviceId: string;

  @property({
    type: 'string',
  })
  gatewayId?: string;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

  @property({
    type: 'string',
    required: true,
  })
  deviceType: string;

  @property({
    type: 'any',
    required: true,
  })
  quantity: any;

  @property({
    type: 'any',
    required: true,
  })
  flowrate: any;

  @property({
    type: 'any',
  })
  battery?: any;

  @property({
    type: 'string',
  })
  error?: string;

  @property({
    type: 'date',
    required: true,
  })
  dateTime: string;


  constructor(data?: Partial<Flowmeterdata>) {
    super(data);
  }
}

export interface FlowmeterdataRelations {
  // describe navigational properties here
}

export type FlowmeterdataWithRelations = Flowmeterdata & FlowmeterdataRelations;
