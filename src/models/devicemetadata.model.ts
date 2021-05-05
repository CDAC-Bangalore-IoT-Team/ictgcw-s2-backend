import {Entity, model, property} from '@loopback/repository';

@model()
export class Devicemetadata extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  deviceid: string;

  @property({
    type: 'string',
    required: true,
  })
  devicetype: string;

  @property({
    type: 'string',
    required: true,
  })
  lattitude: string;

  @property({
    type: 'string',
    required: true,
  })
  longitude: string;

  @property({
    type: 'string',
    required: true,
  })
  altitude: string;

  @property({
    type: 'string',
    required: true,
  })
  devicedimentions: string;

  @property({
    type: 'string',
    required: true,
  })
  gatewayid: string;

  @property({
    type: 'string',
    required: true,
  })
  locationdescription: string;

  @property({
    type: 'string',
    required: true,
  })
  devicemodel: string;

  @property({
    type: 'string',
    required: true,
  })
  deviceserialnumber: string;

  @property({
    type: 'string',
    required: true,
  })
  devicepowermech: string;

  @property({
    type: 'string',
    required: true,
  })
  commtnmodule: string;

  @property({
    type: 'string',
    required: true,
  })
  technicianname: string;

  @property({
    type: 'date',
    required: true,
  })
  dateofinstallation: string;


  constructor(data?: Partial<Devicemetadata>) {
    super(data);
  }
}

export interface DevicemetadataRelations {
  // describe navigational properties here
}

export type DevicemetadataWithRelations = Devicemetadata & DevicemetadataRelations;
