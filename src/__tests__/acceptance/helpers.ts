// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-rest-crud
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {EntityCrudRepository} from '@loopback/repository';
import {Company, Devicemetadata} from '../../models';

/**
 * Generate a complete Company object for use with tests.
 * @param company - A partial (or complete) Todo object.
 */
export function givenCompany(company?: Partial<Company>) {
  const data = Object.assign(
    {
      companyid: 'test123',
      companyname: 'test',
      companyaddress: 'testloc',
    },
    company,
  );
  return new Company(data);
}

/**
 * Generate a complete Company object for use with tests.
 * @param devicemetadata - A partial (or complete) Todo object.
 */
export function givenDevicemetadata(devicemetadata?: Partial<Devicemetadata>) {
  const data = Object.assign(
    {
      deviceid: 'pr111',
      devicetype: 'pr',
      lattitude: '12.1234567',
      longitude: '77.456789',
      altitude: '112',
      devicedimentions: '100x50x30',
      gatewayid: 'gw1001',
      locationdescription: 'home',
      devicemodel: 'PSD234',
      deviceserialnumber: '123ERF345',
      devicepowermech: 'solar',
      commtnmodule: 'wifi',
      technicianname: 'utm',
      dateofinstallation: '2021-05-05T12:45:55.022Z',
      companyid: 'test123',
    },
    devicemetadata,
  );
  return new Devicemetadata(data);
}

// Type alias used for tests (not an actual repository class)
export type CompanyRepository = EntityCrudRepository<
  Company,
  typeof Company.prototype.companyid
>;

// Type alias used for tests (not an actual repository class)
export type DevicemetadataRepository = EntityCrudRepository<
  Devicemetadata,
  typeof Devicemetadata.prototype.deviceid
>;
