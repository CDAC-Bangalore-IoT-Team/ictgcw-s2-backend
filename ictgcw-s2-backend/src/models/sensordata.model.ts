import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Company} from './company.model';
import {Devicemetadata} from './devicemetadata.model';

@model({
  settings: {
    foreignKeys: {
      fk_devicemetadata_sensordata_deviceid: {
        name: 'fk_devicemetadata_deviceid',
        entity: 'Devicemetadata',
        entityKey: 'deviceid',
        foreignKey: 'deviceid',
      },
      fk_devicemetadata_company_companyid: {
        name: 'fk_devicemetadata_flowmeterdata_deviceid',
        entity: 'Company',
        entityKey: 'companyid',
        foreignKey: 'companyid',
      },
    },
  },
})
export class Sensordata extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    defaultFn: 'uuidv4',
    index: {
      unique: true,
    },
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
  })
  datetime: string;

  @belongsTo(
    () => Company,
    {name: 'companyId'},
    {type: 'string', required: 'true'},
  )
  companyid: string;

  @belongsTo(
    () => Devicemetadata,
    {name: 'deviceId'},
    {type: 'string', required: 'true'},
  )
  deviceid: string;

  constructor(data?: Partial<Sensordata>) {
    super(data);
  }
}

export interface SensordataRelations {
  // describe navigational properties here
}

export type SensordataWithRelations = Sensordata & SensordataRelations;
