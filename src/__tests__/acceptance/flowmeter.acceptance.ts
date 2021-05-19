import {
  Client,
  createRestAppClient,
  expect,
  givenHttpServerConfig,
  toJSON,
} from '@loopback/testlab';
import {IctgcwS2BackendApplication} from '../..';
import {Flowmeterdata} from '../../models/flowmeterdata.model';
import {
  DevicemetadataRepository,
  FlowmeterdataRepository,
} from '../../repositories';
import {
  givenBulkFlowmeteradata,
  givenConsumerFlowmeteradata,
  givenDevicemetadata,
} from './helpers';
import {token} from './user.acceptance';

describe('Flow meter data', () => {
  let client: Client;
  let app: IctgcwS2BackendApplication;
  let flowmeterdatarepo: FlowmeterdataRepository;
  let devicemetadatarepo: DevicemetadataRepository;

  before(givenRunningApplicationWithCustomConfiguration);
  after(() => app.stop());

  before(givenFlowmeterdataRepository);
  before(givenDevicemetadataRepository);
  before(() => {
    client = createRestAppClient(app);
  });

  /* beforeEach(async () => {
    await flowmeterdatarepo.deleteAll();
    //await devicemetadatarepo.deleteAll();
  }); */

  // Insert bfm
  it('insert bfm - fails when no bearer token', async () => {
    await client.post('/insert/bfm').expect(401);
  });

  it('rejects requests to create a bfm with no devicetype', async function () {
    const flowmeterdata: Partial<Flowmeterdata> = givenConsumerFlowmeteradata();
    delete flowmeterdata.devicetype;
    await client
      .post('/insert/bfm')
      .set('Authorization', 'Bearer ' + token)
      .send(flowmeterdata)
      .expect(422);
  });

  it('rejects requests to create a bfm with no quantity', async function () {
    const flowmeterdata: Partial<Flowmeterdata> = givenConsumerFlowmeteradata();
    delete flowmeterdata.quantity;
    await client
      .post('/insert/bfm')
      .set('Authorization', 'Bearer ' + token)
      .send(flowmeterdata)
      .expect(422);
  });

  it('rejects requests to create a bfm with no flowrate', async function () {
    const flowmeterdata: Partial<Flowmeterdata> = givenConsumerFlowmeteradata();
    delete flowmeterdata.flowrate;
    await client
      .post('/insert/bfm')
      .set('Authorization', 'Bearer ' + token)
      .send(flowmeterdata)
      .expect(422);
  });

  it('rejects requests to create a bfm with no date time', async function () {
    const flowmeterdata: Partial<Flowmeterdata> = givenConsumerFlowmeteradata();
    delete flowmeterdata.datetime;
    await client
      .post('/insert/bfm')
      .set('Authorization', 'Bearer ' + token)
      .send(flowmeterdata)
      .expect(422);
  });

  it('enters a bfm entry into the system, against registered deviceid', async () => {
    //first enter a device meta data form bfm
    const bfmdevicemetadata = givenDevicemetadata({
      deviceid: 'bfm111',
      devicetype: 'bfm',
      lattitude: '12.1234567',
      longitude: '77.456789',
      altitude: '120',
      devicedimentions: '100x50x30',
      gatewayid: 'gw1001',
      locationdescription: 'home',
      devicemodel: 'BFMD234',
      deviceserialnumber: '123ERF345',
      devicepowermech: 'solar',
      commtnmodule: 'wifi',
      technicianname: 'tmu',
      dateofinstallation: '2021-05-12T13:01:12.236Z',
      companyid: 'test123',
    });
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(bfmdevicemetadata)
      .expect(200, toJSON(bfmdevicemetadata));
    const checkbfm = await devicemetadatarepo.findById(resp.body.deviceid);
    expect(checkbfm.deviceid).to.equal(bfmdevicemetadata.deviceid);

    //enter data of bfm
    const bulkflowmeterdata = givenBulkFlowmeteradata();
    const response = await client
      .post('/insert/bfm')
      .set('Authorization', 'Bearer ' + token)
      .send(bulkflowmeterdata)
      .expect(200);
    const result = await flowmeterdatarepo.findOne(response.body.deviceid);
    expect(result?.deviceid).to.equal(bulkflowmeterdata.deviceid);
  });

  it('500 Reject a bfm entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/bfm')
      .set('Authorization', 'Bearer ' + token)
      .send({
        deviceid: 'bfm456',
        devicetype: 'bfm',
        quantity: 100,
        flowrate: 10,
        errorcode: '00',
        battery: '100',
        datetime: '2021-05-13T06:04:43.690Z',
        companyid: 'test123',
      })
      .expect(500);
  });

  it('500 Reject a bfm entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/bfm')
      .set('Authorization', 'Bearer ' + token)
      .send({
        deviceid: 'bfm456',
        devicetype: 'bfm',
        quantity: 100,
        flowrate: 10,
        errorcode: '00',
        battery: '100',
        datetime: '2021-05-13T06:04:43.690Z',
        companyid: 'test321',
      })
      .expect(500);
  });

  // Insert cfm
  it('insert cfm - fails when no bearer token', async () => {
    await client.post('/insert/cfm').expect(401);
  });

  it('rejects requests to create a cfm with no devicetype', async function () {
    const flowmeterdata: Partial<Flowmeterdata> = givenConsumerFlowmeteradata();
    delete flowmeterdata.devicetype;
    await client
      .post('/insert/cfm')
      .set('Authorization', 'Bearer ' + token)
      .send(flowmeterdata)
      .expect(422);
  });

  it('rejects requests to create a cfm with no quantity', async function () {
    const flowmeterdata: Partial<Flowmeterdata> = givenConsumerFlowmeteradata();
    delete flowmeterdata.quantity;
    await client
      .post('/insert/cfm')
      .set('Authorization', 'Bearer ' + token)
      .send(flowmeterdata)
      .expect(422);
  });

  it('rejects requests to create a cfm with no flowrate', async function () {
    const flowmeterdata: Partial<Flowmeterdata> = givenConsumerFlowmeteradata();
    delete flowmeterdata.flowrate;
    await client
      .post('/insert/cfm')
      .set('Authorization', 'Bearer ' + token)
      .send(flowmeterdata)
      .expect(422);
  });

  it('rejects requests to create a cfm with no date time', async function () {
    const flowmeterdata: Partial<Flowmeterdata> = givenConsumerFlowmeteradata();
    delete flowmeterdata.datetime;
    await client
      .post('/insert/cfm')
      .set('Authorization', 'Bearer ' + token)
      .send(flowmeterdata)
      .expect(422);
  });

  it('enters a cfm entry into the system, against registered deviceid', async () => {
    //first enter a device meta data form bfm
    const cfmdevicemetadata = givenDevicemetadata({
      deviceid: 'cfm111',
      devicetype: 'cfm',
      lattitude: '12.1234567',
      longitude: '77.456789',
      altitude: '120',
      devicedimentions: '100x50x30',
      gatewayid: 'gw1001',
      locationdescription: 'home',
      devicemodel: 'CFMD234',
      deviceserialnumber: '123ERF345',
      devicepowermech: 'solar',
      commtnmodule: 'wifi',
      technicianname: 'tmu',
      dateofinstallation: '2021-05-12T13:01:12.236Z',
      companyid: 'test123',
    });
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(cfmdevicemetadata)
      .expect(200, toJSON(cfmdevicemetadata));
    const checkbfm = await devicemetadatarepo.findById(resp.body.deviceid);
    expect(checkbfm.deviceid).to.equal(cfmdevicemetadata.deviceid);

    //enter data of bfm
    const consumerflowmeterdata = givenConsumerFlowmeteradata();
    const response = await client
      .post('/insert/cfm')
      .set('Authorization', 'Bearer ' + token)
      .send(consumerflowmeterdata)
      .expect(200);
    const result = await flowmeterdatarepo.findOne(response.body.deviceid);
    expect(result?.deviceid).to.equal(consumerflowmeterdata.deviceid);
  });

  it('500 Reject a cfm entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/cfm')
      .set('Authorization', 'Bearer ' + token)
      .send({
        deviceid: 'cfm456',
        devicetype: 'cfm',
        quantity: 100,
        flowrate: 10,
        errorcode: '00',
        battery: '100',
        datetime: '2021-05-13T06:04:43.690Z',
        companyid: 'test123',
      })
      .expect(500);
  });

  it('500 Reject a cfm entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/cfm')
      .set('Authorization', 'Bearer ' + token)
      .send({
        deviceid: 'cfm456',
        devicetype: 'cfm',
        quantity: 100,
        flowrate: 10,
        errorcode: '00',
        battery: '100',
        datetime: '2021-05-13T06:04:43.690Z',
        companyid: 'test321',
      })
      .expect(500);
  });

  context('when dealing with a single persisted device metadata', () => {
    let persistedFlowmeterdata: Flowmeterdata;

    beforeEach(async () => {
      persistedFlowmeterdata = await givenFlowmeterdataInstance();
    });

    it('get flow meter from deviceid - fails when no bearer token', async () => {
      await client
        .get('/get/flowmeterdata/${persistedFlowmeterdata.deviceid}')
        .expect(401);
    });

    it('get flow meter from deviceid', () => {
      return client
        .get(`/get/flowmeterdata/${persistedFlowmeterdata.deviceid}`)
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(200);
    });

  });

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

    // Start Application
    await app.start();
  }

  async function givenFlowmeterdataRepository() {
    flowmeterdatarepo = await app.get<FlowmeterdataRepository>(
      'repositories.FlowmeterdataRepository',
    );
  }

  async function givenDevicemetadataRepository() {
    devicemetadatarepo = await app.get<DevicemetadataRepository>(
      'repositories.DevicemetadataRepository',
    );
  }

  async function givenFlowmeterdataInstance(
    flowmeterdata?: Partial<Flowmeterdata>,
  ) {
    return flowmeterdatarepo.create(givenBulkFlowmeteradata(flowmeterdata));
  }
});
