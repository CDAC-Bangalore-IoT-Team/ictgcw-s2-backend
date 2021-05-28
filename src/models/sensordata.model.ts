import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Company} from './company.model';
import {Devicemetadata} from './devicemetadata.model';

@model()
export class Sensordata extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  devicetype: string;

  @property({
    type: 'number',
    required: true,
  })
  sensorvalue: number;

  @property({
    type: 'string',
  })
  errorcode?: string;

  @property({
    type: 'date',
    required: true,
    index: {
      unique: true,
    },
  })
  datetime: string;

  @belongsTo(() => Company, {name: 'companyId'})
  companyid: string;

  @belongsTo(() => Devicemetadata, {name: 'devicemetadataId'})
  deviceid: string;

  constructor(data?: Partial<Sensordata>) {
    super(data);
  }
}

export interface SensordataRelations {
  // describe navigational properties here
}

export type SensordataWithRelations = Sensordata & SensordataRelations;
