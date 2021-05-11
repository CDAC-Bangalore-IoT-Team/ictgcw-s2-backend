// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {EntityNotFoundError} from '@loopback/repository/dist/errors';
import {
  Client,
  createRestAppClient,
  expect,
  givenHttpServerConfig,
  toJSON,
} from '@loopback/testlab';
import {IctgcwS2BackendApplication} from '../..';
import {Devicemetadata} from '../../models';
import {DevicemetadataRepository} from '../../repositories';
import {givenDevicemetadata} from './helpers';
import {token} from './user.acceptance';

describe('Device Meta data', () => {
  let client: Client;
  let app: IctgcwS2BackendApplication;
  let devicemetadatarepo: DevicemetadataRepository;

  before(givenRunningApplicationWithCustomConfiguration);
  after(() => app.stop());

  before(givenDevicemetadataRepository);
  before(() => {
    client = createRestAppClient(app);
  });

  beforeEach(async () => {
    await devicemetadatarepo.deleteAll();
  });

  // Insert company

  it('fails when no bearer token', async () => {
    await client.post('/insert/devicemetadata').expect(401);
  });

  it('creates a device meta data', async function () {
    const devicemetadata = givenDevicemetadata();
    const response = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(200);
    expect(response.body).to.containDeep(devicemetadata);
    const result = await devicemetadatarepo.findById(response.body.deviceid);
    expect(result).to.containDeep(devicemetadata);
  });

  it('rejects requests to create a device meta data with no deviceid', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.deviceid;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no devicetype', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.devicetype;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no lattitude', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.lattitude;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no longitude', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.longitude;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no altitude', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.altitude;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no devicedimentions', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.devicedimentions;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no gatewayid', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.gatewayid;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no locationdescription', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.locationdescription;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no devicemodel', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.devicemodel;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no deviceserialnumber', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.deviceserialnumber;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no devicepowermech', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.devicepowermech;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no commtnmodule', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.commtnmodule;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no technicianname', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.technicianname;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no dateofinstallation', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.dateofinstallation;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  it('rejects requests to create a device meta data with no companyid', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.companyid;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  });

  // Single Company Item dealing

  /* context('when dealing with a single persisted company', () => {
    let persistedCompany: Devicemetadata;

    beforeEach(async () => {
      persistedCompany = await givenDevicemetadataInstance();
    });

    it('fails when no bearer token', async () => {
      await client
        .get('/get/company/${persistedCompany.companyid}')
        .expect(401);
    });

    it('gets a company by ID', () => {
      return client
        .get(`/get/company/${persistedCompany.companyid}`)
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(200, toJSON(persistedCompany));
    });

    it('returns 404 when getting a company that does not exist', () => {
      return client
        .get('/get/company/asdfgh')
        .set('Authorization', 'Bearer ' + token)
        .expect(404);
    });

    it('fails when no bearer token', async () => {
      await client
        .patch(`/edit/company/${persistedCompany.companyid}`)
        .expect(401);
    });

    it('updates the company by ID ', async () => {
      const updatedTodo = givenCompany({
        companyname: 'test321',
      });
      await client
        .patch(`/edit/company/${persistedCompany.companyid}`)
        .set('Authorization', 'Bearer ' + token)
        .send(updatedTodo)
        .expect(204);
      const result = await devicemetadatarepo.findById(
        persistedCompany.companyid,
      );
      expect(result).to.containEql(updatedTodo);
    });

    it('returns 404 when updating a todo that does not exist', () => {
      return client
        .patch('/edit/company/99999')
        .set('Authorization', 'Bearer ' + token)
        .send(givenCompany({companyname: 'test321'}))
        .expect(404);
    });

    // Delete

    it('fails when no bearer token', async () => {
      await client
        .del('/del/company/${persistedCompany.companyid}')
        .expect(401);
    });

    it('deletes a company', async () => {
      await client
        .del(`/del/company/${persistedCompany.companyid}`)
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(204);
      await expect(
        devicemetadatarepo.findById(persistedCompany.companyid),
      ).to.be.rejectedWith(EntityNotFoundError);
    });

    it('returns 404 when deleting a device metadata that does not exist', async () => {
      await client
        .del(`/del/company/99999`)
        .set('Authorization', 'Bearer ' + token)
        .expect(404);
    });
  }); */

  /*
   ============================================================================
   TEST HELPERS
   These functions help simplify setup of your test fixtures so that your tests
   can:
   - operate on a "clean" environment each time (a fresh in-memory database)
   - avoid polluting the test with large quantities of setup logic to keep
   them clear and easy to read
   - keep them DRY (who wants to write the same stuff over and over?)
   ============================================================================
   */

  async function givenRunningApplicationWithCustomConfiguration() {
    app = new IctgcwS2BackendApplication({
      rest: givenHttpServerConfig(),
    });

    await app.boot();

    /**
     * Override default config for DataSource for testing so we don't write
     * test data to file when using the memory connector.
     */
    app.bind('datasources.config.postgresdb').to({
      name: 'db',
      connector: 'memory',
    });

    // Start Application
    await app.start();
  }

  async function givenDevicemetadataRepository() {
    devicemetadatarepo = await app.get<DevicemetadataRepository>(
      'repositories.DevicemetadataRepository',
    );
  }

  async function givenDevicemetadataInstance(
    company?: Partial<Devicemetadata>,
  ) {
    return devicemetadatarepo.create(givenDevicemetadata(company));
  }
});
