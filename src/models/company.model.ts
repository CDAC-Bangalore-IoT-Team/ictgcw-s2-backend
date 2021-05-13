import {Entity, model, property, hasMany} from '@loopback/repository';
import {Sensordata} from './sensordata.model';
import {Flowmeterdata} from './flowmeterdata.model';
import {Devicemetadata} from './devicemetadata.model';

@model()
export class Company extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  companyid: string;

  @property({
    type: 'string',
    required: true,
  })
  companyname: string;

  @property({
    type: 'string',
  })
  companyaddress?: string;

  @hasMany(() => Sensordata, {keyTo: 'companyid'})
  sensordata: Sensordata[];

  @hasMany(() => Flowmeterdata, {keyTo: 'companyid'})
  flowmeterdata: Flowmeterdata[];

  @hasMany(() => Devicemetadata, {keyTo: 'companyid'})
  devicemetadata: Devicemetadata[];

  constructor(data?: Partial<Company>) {
    super(data);
  }
}

export interface CompanyRelations {
  // describe navigational properties here
}

export type CompanyWithRelations = Company & CompanyRelations;
