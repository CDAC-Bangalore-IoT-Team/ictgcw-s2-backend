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
import {DevicemetadataRepository, FlowmeterdataRepository} from '../../repositories';
import {givenDevicemetadata} from './helpers';
import {token} from './user.acceptance';

describe('Flow meter data', () => {
  let client: Client;
  let app: IctgcwS2BackendApplication;
  let flowmeterdatarepo: FlowmeterdataRepository;

  before(givenRunningApplicationWithCustomConfiguration);
  after(() => app.stop());

  before(givenDevicemetadataRepository);
  before(() => {
    client = createRestAppClient(app);
  });

  beforeEach(async () => {
    await flowmeterdatarepo.deleteAll();
  });

  it('fails when no bearer token', async () => {
    await client.post('/insert/flowmeterdata').expect(401);
  });

  /* it('creates a device meta data', async function () {
    const devicemetadata = givenDevicemetadata();
    const response = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(200, toJSON(devicemetadata));
    const result = await flowmeterdatarepo.findById(response.body.deviceid);
    result.dateofinstallation = result.dateofinstallation;
    expect(result.commtnmodule).to.equal(devicemetadata.commtnmodule);
  }); */

  /* it('rejects requests to create a device meta data with no deviceid', async function () {
    const devicemetadata: Partial<Devicemetadata> = givenDevicemetadata();
    delete devicemetadata.deviceid;
    await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(422);
  }); */

  // Single Device metadata Item dealing

  /* context('when dealing with a single persisted device metadata', () => {
    let persistedDevicemetadata: Devicemetadata;

    beforeEach(async () => {
      persistedDevicemetadata = await givenDevicemetadataInstance();
    });

    //get device meta data through deviceid and companyid
    it('fails when no bearer token', async () => {
      await client
        .get('/get/devicemetadata/${persistedDevicemetadata.deviceid}')
        .expect(401);
    });

    it('gets a device meta data by ID', () => {
      return client
        .get(`/get/devicemetadata/${persistedDevicemetadata.deviceid}`)
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(200, toJSON(persistedDevicemetadata));
    });

    it('returns 404 when getting a device meta data that does not exist', () => {
      return client
        .get('/get/devicemetadata/asdfgh')
        .set('Authorization', 'Bearer ' + token)
        .expect(404);
    });

    //update device meta data through deviceid
    it('fails when no bearer token', async () => {
      await client
        .patch('/update/devicemetadata/${persistedDevicemetadata.deviceid}')
        .expect(401);
    });

    it('updates the device meta data by ID ', async () => {
      const updatedDevicemetadata = givenDevicemetadata({
        gatewayid: 'gw202',
      });
      await client
        .patch(`/update/devicemetadata/${persistedDevicemetadata.deviceid}`)
        .set('Authorization', 'Bearer ' + token)
        .send(updatedDevicemetadata)
        .expect(204);
      const result = await devicemetadatarepo.findById(
        persistedDevicemetadata.deviceid,
      );
      expect(result.lattitude).to.containEql(updatedDevicemetadata.lattitude);
    });

    it('returns 422 when getting a device meta data when request body', () => {
      return client
        .patch('/update/devicemetadata/asdfgh')
        .set('Authorization', 'Bearer ' + token)
        .expect(422);
    });

    //replace device meta data by deviceid
    it('fails when no bearer token', async () => {
      await client
        .put('/replace/devicemetadata/${persistedDevicemetadata.deviceid}')
        .expect(401);
    });

    it('replaces the device meta data by device id', async () => {
      const updatedDevicemetadata = givenDevicemetadata({
        deviceid: 'pr111',
        devicetype: 'pr',
        lattitude: '12.1234567',
        longitude: '77.456789',
        altitude: '120',
        devicedimentions: '100x50x30',
        gatewayid: 'gw1001',
        locationdescription: 'home',
        devicemodel: 'PSD234',
        deviceserialnumber: '123ERF345',
        devicepowermech: 'solar',
        commtnmodule: 'wifi',
        technicianname: 'tmu',
        dateofinstallation: '2021-05-12T13:01:12.236Z',
        companyid: 'test123',
      });
      await client
        .put(`/replace/devicemetadata/${persistedDevicemetadata.deviceid}`)
        .set('Authorization', 'Bearer ' + token)
        .send(updatedDevicemetadata)
        .expect(204);
      const result = await devicemetadatarepo.findById(
        persistedDevicemetadata.deviceid,
      );
      expect(result.altitude).to.containEql(updatedDevicemetadata.altitude);
    });

    it('returns 404 when replacing a device meta data that does not exist', () => {
      return client
        .put('/replace/devicemetadata/99999')
        .set('Authorization', 'Bearer ' + token)
        .send(
          givenDevicemetadata({
            deviceid: '99999',
          }),
        )
        .expect(404);
    });

    //delete device meta data by id
    it('fails when no bearer token', async () => {
      await client
        .del('/del/devicemetadata/${persistedDevicemetadata.deviceid}')
        .expect(401);
    });

    it('deletes a device metadata', async () => {
      await client
        .del(`/del/devicemetadata/${persistedDevicemetadata.deviceid}`)
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(204);
      await expect(
        devicemetadatarepo.findById(persistedDevicemetadata.deviceid),
      ).to.be.rejectedWith(EntityNotFoundError);
    });

    it('returns 404 when getting a device meta data that does not exist', () => {
      return client
        .del('/del/devicemetadata/asdfgh')
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
    /* app.bind('datasources.config.postgresdb').to({
      name: 'db',
      connector: 'memory',
    }); */

    // Start Application
    await app.start();
  }

  async function givenDevicemetadataRepository() {
    flowmeterdatarepo = await app.get<FlowmeterdataRepository>(
      'repositories.FlowmeterdataRepository',
    );
  }

  async function givenDevicemetadataInstance(
    devicemetadata?: Partial<Devicemetadata>,
  ) {
    return flowmeterdatarepo.create(givenDevicemetadata(devicemetadata));
  }
});
