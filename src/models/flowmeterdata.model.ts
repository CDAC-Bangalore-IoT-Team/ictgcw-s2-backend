import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Company} from './company.model';

@model()
export class Flowmeterdata extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  deviceid: string;

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
    required: true,
  })
  devicetype: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: 'number'

  @property({
    type: 'number',
    required: true,
  })
  flowrate: 'number'

  @property({
    type: 'string',
  })
  battery?: string;

  @property({
    type: 'string',
  })
  errorcode?: string;

  @property({
    type: 'date',
    required: true,
  })
  datetime: string;

  @belongsTo(() => Company, {name: 'companyId'})
  companyid: string;

  constructor(data?: Partial<Flowmeterdata>) {
    super(data);
  }
}

export interface FlowmeterdataRelations {
  // describe navigational properties here
}

export type FlowmeterdataWithRelations = Flowmeterdata & FlowmeterdataRelations;
