import {Entity, model, property} from '@loopback/repository';

@model()
export class Devicemetadata extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  deviceId: string;

  @property({
    type: 'string',
    required: true,
  })
  deviceType: string;

  @property({
    type: 'any',
    required: true,
  })
  lattitude: any;

  @property({
    type: 'any',
    required: true,
  })
  longitude: any;

  @property({
    type: 'any',
    required: true,
  })
  altitude: any;

  @property({
    type: 'any',
    required: true,
  })
  deviceDimentions: any;

  @property({
    type: 'string',
    required: true,
  })
  gatewayId: string;

  @property({
    type: 'string',
    required: true,
  })
  locationDescription: string;

  @property({
    type: 'string',
    required: true,
  })
  deviceModel: string;

  @property({
    type: 'string',
    required: true,
  })
  deviceSerialNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  devicePowerMech: string;

  @property({
    type: 'string',
    required: true,
  })
  commtnModule: string;

  @property({
    type: 'string',
    required: true,
  })
  technicianName: string;

  @property({
    type: 'date',
    required: true,
  })
  dateOfInstallation: string;


  constructor(data?: Partial<Devicemetadata>) {
    super(data);
  }
}

export interface DevicemetadataRelations {
  // describe navigational properties here
}

export type DevicemetadataWithRelations = Devicemetadata & DevicemetadataRelations;
