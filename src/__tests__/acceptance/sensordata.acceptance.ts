import {
  Client,
  createRestAppClient,
  expect,
  givenHttpServerConfig,
  toJSON,
} from '@loopback/testlab';
import {IctgcwS2BackendApplication} from '../..';
import {Devicemetadata} from '../../models';
import {Sensordata} from '../../models/sensordata.model';
import {SensordataRepository} from '../../repositories/sensordata.repository';
import {DevicemetadataRepository} from './helpers';
import {token} from './user.acceptance';

describe('Sensor data', () => {
  let client: Client;
  let app: IctgcwS2BackendApplication;
  let sensordatarepo: SensordataRepository;
  let devicemetadatarepo: DevicemetadataRepository;

  before(givenRunningApplicationWithCustomConfiguration);
  after(() => app.stop());

  before(givenSensordataRepository);
  before(givenDevicemetadataRepository);
  before(() => {
    client = createRestAppClient(app);
  });

  /* beforeEach(async () => {
    await sensordatarepo.deleteAll();
    //await devicemetadatarepo.deleteAll();
  }); */

  // Arsenic
  it('insert arsenic sensor - fails when no bearer token', async () => {
    await client.post('/insert/ars').expect(401);
  });

  it('rejects requests to create a presure sensor data with no devicetype', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('ars');
    delete sensordata.devicetype;
    await client
      .post('/insert/ars')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a arsenic sensor data with no sensorvalue', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('ars');
    delete sensordata.sensorvalue;
    await client
      .post('/insert/ars')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a arsenic sensor data with no date time', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('ars');
    delete sensordata.datetime;
    await client
      .post('/insert/ars')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('enters a arsenic sensor data entry into the system, against registered deviceid', async () => {
    //first enter a device meta data form bfm
    const devicemetadata = givenDevicemetadata('ars');
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(200, toJSON(devicemetadata));
    const checkars = await devicemetadatarepo.findById(resp.body.deviceid);
    expect(checkars.deviceid).to.equal(devicemetadata.deviceid);

    //enter data of bfm
    const sensordata = givenSensordata('ars');
    const response = await client
      .post('/insert/ars')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(200);
    const result = await sensordatarepo.findOne(response.body.deviceid);
    expect(result?.deviceid).to.equal(sensordata.deviceid);
  });

  it('500 Reject a arsenic sensor data entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/ars')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'ars',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: 'test123',
        deviceid: '999999',
      })
      .expect(500);
  });

  it('500 Reject a arsenic sensor data entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/ars')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'ars',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: '999999',
        deviceid: 'ars111',
      })
      .expect(500);
  });

  // Fluoride
  it('insert Fluoride sensor - fails when no bearer token', async () => {
    await client.post('/insert/fl').expect(401);
  });

  it('rejects requests to create a fluoride sensor data with no devicetype', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('fl');
    delete sensordata.devicetype;
    await client
      .post('/insert/fl')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a Fluorine sensor data with no sensorvalue', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('fl');
    delete sensordata.sensorvalue;
    await client
      .post('/insert/fl')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a Fluorine sensor data with no date time', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('fl');
    delete sensordata.datetime;
    await client
      .post('/insert/fl')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('enters a Fluorine sensor data entry into the system, against registered deviceid', async () => {
    //first enter a device meta data form bfm
    const devicemetadata = givenDevicemetadata('fl');
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(devicemetadata)
      .expect(200, toJSON(devicemetadata));
    const checkfl = await devicemetadatarepo.findById(resp.body.deviceid);
    expect(checkfl.deviceid).to.equal(devicemetadata.deviceid);

    //enter data of bfm
    const sensordata = givenSensordata('fl');
    const response = await client
      .post('/insert/fl')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(200);
    const result = await sensordatarepo.findOne(response.body.deviceid);
    expect(result?.deviceid).to.equal(sensordata.deviceid);
  });

  it('500 Reject a Fluorine sensor data entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/fl')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'fl',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: 'test123',
        deviceid: '999999',
      })
      .expect(500);
  });

  it('500 Reject a Fluorine sensor data entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/fl')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'fl',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: '999999',
        deviceid: 'fl111',
      })
      .expect(500);
  });

  // FRC
  it('insert FRC sensor - fails when no bearer token', async () => {
    await client.post('/insert/frc').expect(401);
  });

  it('rejects requests to create a FRC sensor data with no devicetype', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('frc');
    delete sensordata.devicetype;
    await client
      .post('/insert/frc')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a FRC sensor data with no sensorvalue', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('frc');
    delete sensordata.sensorvalue;
    await client
      .post('/insert/frc')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a FRC sensor data with no date time', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('frc');
    delete sensordata.datetime;
    await client
      .post('/insert/frc')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('enters a FRC sensor data entry into the system, against registered deviceid', async () => {
    //first enter a device meta data
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(givenDevicemetadata('frc'))
      .expect(200);
    console.log(resp.body);

    //enter data
    const response = await client
      .post('/insert/frc')
      .set('Authorization', 'Bearer ' + token)
      .send(givenSensordata('frc'))
      .expect(200);
    console.log(response.body);
    /*  const result = await sensordatarepo.findOne(response.body.deviceid);
    expect(result?.deviceid).to.equal(sensordata.deviceid); */
  });

  it('500 Reject a FRC sensor data entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/frc')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'frc',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: 'test123',
        deviceid: '999999',
      })
      .expect(500);
  });

  it('500 Reject a FRC sensor data entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/frc')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'frc',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: '999999',
        deviceid: 'frc111',
      })
      .expect(500);
  });

  // Iron
  it('insert iron sensor - fails when no bearer token', async () => {
    await client.post('/insert/iron').expect(401);
  });

  it('rejects requests to create a iron sensor data with no devicetype', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('iron');
    delete sensordata.devicetype;
    await client
      .post('/insert/iron')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a iron sensor data with no sensorvalue', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('iron');
    delete sensordata.sensorvalue;
    await client
      .post('/insert/iron')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a iron sensor data with no date time', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('iron');
    delete sensordata.datetime;
    await client
      .post('/insert/iron')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('enters a iron sensor data entry into the system, against registered deviceid', async () => {
    //first enter a device meta data form bfm
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(givenDevicemetadata('iron'))
      .expect(200);
    console.log(resp.body);

    //enter data of bfm
    const response = await client
      .post('/insert/iron')
      .set('Authorization', 'Bearer ' + token)
      .send(givenSensordata('iron'))
      .expect(200);
    console.log(response.body);
  });

  it('500 Reject a iron sensor data entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/iron')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'iron',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: 'test123',
        deviceid: '999999',
      })
      .expect(500);
  });

  it('500 Reject a iron sensor data entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/iron')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'iron',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: '999999',
        deviceid: 'iron111',
      })
      .expect(500);
  });

  // Nitrate
  it('insert nitrate sensor - fails when no bearer token', async () => {
    await client.post('/insert/nit').expect(401);
  });

  it('rejects requests to create a nitrate sensor data with no devicetype', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('nit');
    delete sensordata.devicetype;
    await client
      .post('/insert/nit')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a nitrate sensor data with no sensorvalue', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('nit');
    delete sensordata.sensorvalue;
    await client
      .post('/insert/nit')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a nitrate sensor data with no date time', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('nit');
    delete sensordata.datetime;
    await client
      .post('/insert/nit')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('enters a Nitrate sensor data entry into the system, against registered deviceid', async () => {
    //first enter a device meta data form bfm
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(givenDevicemetadata('nit'))
      .expect(200);
    console.log(resp.body);

    //enter data of bfm
    const response = await client
      .post('/insert/nit')
      .set('Authorization', 'Bearer ' + token)
      .send(givenSensordata('nit'))
      .expect(200);
    console.log(response.body);
  });

  it('500 Reject a nitrate sensor data entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/nit')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'nit',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: 'test123',
        deviceid: '999999',
      })
      .expect(500);
  });

  it('500 Reject a nitrate sensor data entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/nit')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'nit',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: '999999',
        deviceid: 'nit111',
      })
      .expect(500);
  });

  // Ph
  it('insert pH sensor - fails when no bearer token', async () => {
    await client.post('/insert/ph').expect(401);
  });

  it('rejects requests to create a pH sensor data with no devicetype', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('ph');
    delete sensordata.devicetype;
    await client
      .post('/insert/ph')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a pH sensor data with no sensorvalue', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('ph');
    delete sensordata.sensorvalue;
    await client
      .post('/insert/ph')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a pH sensor data with no date time', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('ph');
    delete sensordata.datetime;
    await client
      .post('/insert/ph')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('enters a pH sensor data entry into the system, against registered deviceid', async () => {
    //first enter a device meta data form bfm
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(givenDevicemetadata('ph'))
      .expect(200);
    console.log(resp.body);

    //enter data of bfm
    const response = await client
      .post('/insert/ph')
      .set('Authorization', 'Bearer ' + token)
      .send(givenSensordata('ph'))
      .expect(200);
    console.log(response.body);
  });

  it('500 Reject a pH sensor data entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/ph')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'ph',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: 'test123',
        deviceid: '999999',
      })
      .expect(500);
  });

  it('500 Reject a pH sensor data entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/ph')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'ph',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: '999999',
        deviceid: 'ph111',
      })
      .expect(500);
  });

  // Preasure
  it('insert pressure sensor - fails when no bearer token', async () => {
    await client.post('/insert/pr').expect(401);
  });

  it('rejects requests to create a pressure sensor data with no devicetype', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('pr');
    delete sensordata.devicetype;
    await client
      .post('/insert/pr')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a pressure sensor data with no sensorvalue', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('pr');
    delete sensordata.sensorvalue;
    await client
      .post('/insert/pr')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a pressure sensor data with no date time', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('pr');
    delete sensordata.datetime;
    await client
      .post('/insert/pr')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('enters a pressure sensor data entry into the system, against registered deviceid', async () => {
    //first enter a device meta data form bfm
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(givenDevicemetadata('pr'))
      .expect(200);
    console.log(resp.body);

    //enter data of bfm
    const response = await client
      .post('/insert/pr')
      .set('Authorization', 'Bearer ' + token)
      .send(givenSensordata('pr'))
      .expect(200);
    console.log(response.body);
  });

  it('500 Reject a pressure sensor data entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/pr')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'pr',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: 'test123',
        deviceid: '999999',
      })
      .expect(500);
  });

  it('500 Reject a pressure sensor data entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/pr')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'pr',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: '999999',
        deviceid: 'pr111',
      })
      .expect(500);
  });

  // Salinity
  it('insert salinity sensor - fails when no bearer token', async () => {
    await client.post('/insert/sal').expect(401);
  });

  it('rejects requests to create a salinity sensor data with no devicetype', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('sal');
    delete sensordata.devicetype;
    await client
      .post('/insert/sal')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a salinity sensor data with no sensorvalue', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('sal');
    delete sensordata.sensorvalue;
    await client
      .post('/insert/sal')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a salinity sensor data with no date time', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('sal');
    delete sensordata.datetime;
    await client
      .post('/insert/sal')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('enters a salanity sensor data entry into the system, against registered deviceid', async () => {
    //first enter a device meta data form bfm
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(givenDevicemetadata('sal'))
      .expect(200);
    console.log(resp.body);

    //enter data of bfm
    const response = await client
      .post('/insert/sal')
      .set('Authorization', 'Bearer ' + token)
      .send(givenSensordata('sal'))
      .expect(200);
    console.log(response.body);
  });

  it('500 Reject a salanity sensor data entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/sal')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'sal',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: 'test123',
        deviceid: '999999',
      })
      .expect(500);
  });

  it('500 Reject a salanity sensor data entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/sal')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'sal',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: '999999',
        deviceid: 'sal111',
      })
      .expect(500);
  });

  // TDS
  it('insert TDS sensor - fails when no bearer token', async () => {
    await client.post('/insert/tds').expect(401);
  });

  it('rejects requests to create a TDS sensor data with no devicetype', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('tds');
    delete sensordata.devicetype;
    await client
      .post('/insert/tds')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a TDS sensor data with no sensorvalue', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('tds');
    delete sensordata.sensorvalue;
    await client
      .post('/insert/tds')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('rejects requests to create a TDS sensor data with no date time', async function () {
    const sensordata: Partial<Sensordata> = givenSensordata('tds');
    delete sensordata.datetime;
    await client
      .post('/insert/tds')
      .set('Authorization', 'Bearer ' + token)
      .send(sensordata)
      .expect(422);
  });

  it('enters a TDS sensor data entry into the system, against registered deviceid', async () => {
    //first enter a device meta data form bfm
    const resp = await client
      .post('/insert/devicemetadata')
      .set('Authorization', 'Bearer ' + token)
      .send(givenDevicemetadata('tds'))
      .expect(200);
    console.log(resp.body);

    //enter data of bfm
    const response = await client
      .post('/insert/tds')
      .set('Authorization', 'Bearer ' + token)
      .send(givenSensordata('tds'))
      .expect(200);
    console.log(response.body);
  });

  it('500 Reject a TDS sensor data entry into the system, against unregistered deviceid', async () => {
    await client
      .post('/insert/tds')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'tds',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: 'test123',
        deviceid: '999999',
      })
      .expect(500);
  });

  it('500 Reject a TDS sensor data entry into the system, against unregistered companyid', async () => {
    await client
      .post('/insert/tds')
      .set('Authorization', 'Bearer ' + token)
      .send({
        devicetype: 'tds',
        sensorvalue: 0,
        errorcode: '00',
        datetime: '2021-05-13T13:29:04.691Z',
        companyid: '999999',
        deviceid: 'tds111',
      })
      .expect(500);
  });

  context('when dealing with a single persisted device metadata', () => {
    let persistedSensordata: Sensordata;

    beforeEach(async () => {
      persistedSensordata = await givenSensordataInstance();
    });

    it('get flow meter from deviceid - fails when no bearer token', async () => {
      await client
        .get('/get/sensordata/${persistedFlowmeterdata.deviceid}')
        .expect(401);
    });

    it('get Sensordata from deviceid', () => {
      return client
        .get(`/get/sensordata/${persistedSensordata.deviceid}`)
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

  async function givenSensordataRepository() {
    sensordatarepo = await app.get<SensordataRepository>(
      'repositories.SensordataRepository',
    );
  }

  async function givenDevicemetadataRepository() {
    devicemetadatarepo = await app.get<DevicemetadataRepository>(
      'repositories.DevicemetadataRepository',
    );
  }

  async function givenSensordataInstance(sensordata?: Partial<Sensordata>) {
    return sensordatarepo.create(
      new Sensordata(
        Object.assign({
          devicetype: 'pr',
          sensorvalue: 100,
          errorcode: '00',
          datetime: '2021-05-13T13:29:04.691Z',
          companyid: 'test123',
          deviceid: 'pr111',
        }),
      ),
    );
  }
});

function givenSensordata(deviceType: string): Partial<Sensordata> {
  const data = Object.assign({
    devicetype: deviceType,
    sensorvalue: 100,
    errorcode: '00',
    datetime: '2021-05-13T13:29:04.691Z',
    companyid: 'test123',
    deviceid: deviceType + '111',
  });
  return new Sensordata(data);
}

function givenDevicemetadata(
  deviceType: string,
  devicemetadata?: Partial<Devicemetadata>,
) {
  const data = Object.assign(
    {
      deviceid: deviceType + '111',
      devicetype: deviceType,
      lattitude: '12.1234567',
      longitude: '77.456789',
      altitude: '112',
      devicedimentions: '100x50x30',
      gatewayid: 'gw1001',
      locationdescription: 'home',
      devicemodel: deviceType + '234',
      deviceserialnumber: '123ERF345',
      devicepowermech: 'solar',
      commtnmodule: 'wifi',
      technicianname: 'utm',
      dateofinstallation: '2021-05-12T13:01:12.236Z',
      companyid: 'test123',
    },
    devicemetadata,
  );
  return new Devicemetadata(data);
}
