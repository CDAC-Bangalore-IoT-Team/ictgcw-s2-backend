import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Devicemetadata} from './devicemetadata.model';
import {Flowmeterdata} from './flowmeterdata.model';
import {Sensordata} from './sensordata.model';

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

  @hasMany(() => Devicemetadata, {keyTo: 'companyid'})
  devicemetadata: Devicemetadata[];

  @hasMany(() => Flowmeterdata, {keyTo: 'companyid'})
  flowmeterdata: Flowmeterdata[];

  @hasMany(() => Sensordata, {keyTo: 'companyid'})
  sensordata: Sensordata[];

  constructor(data?: Partial<Company>) {
    super(data);
  }
}

export interface CompanyRelations {
  // describe navigational properties here
}

export type CompanyWithRelations = Company & CompanyRelations;
