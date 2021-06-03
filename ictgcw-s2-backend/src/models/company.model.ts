import {Entity, model, property, hasMany} from '@loopback/repository';
import {Devicemetadata} from './devicemetadata.model';
import {Flowmeterdata} from './flowmeterdata.model';
import {Sensordata} from './sensordata.model';

@model({
  /* settings: {
    foreignKeys: {
      fk_company_devicemetadata_companyid: {
        name: 'fk_company_devicemetadata_companyid',
        entity: 'Devicemetadata',
        entityKey: 'companyid',
        foreignKey: 'companyid',
      },
      fk_company_sensordata_companyid: {
        name: 'fk_company_sensordata_companyid',
        entity: 'Sensordata',
        entityKey: 'companyid',
        unique: true,
        foreignKey: 'companyid',
      },
      fk_company_flowmeterdata_companyid: {
        name: 'fk_company_flowmeterdata_companyid',
        entity: 'Flowmeterdata',
        unique: true,
        entityKey: 'companyid',
        foreignKey: 'companyid',
      },
    },
  }, */
})
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
}

export interface CompanyRelations {
  // describe navigational properties here
}

export type CompanyWithRelations = Company & CompanyRelations;
