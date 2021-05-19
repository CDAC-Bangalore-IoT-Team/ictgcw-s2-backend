import {EntityNotFoundError} from '@loopback/repository/dist/errors';
import {
  Client,
  createRestAppClient,
  expect,
  givenHttpServerConfig,
  toJSON,
} from '@loopback/testlab';
import {IctgcwS2BackendApplication} from '../..';
import {Company} from '../../models';
import {CompanyRepository} from '../../repositories';
import {givenCompany, givenSingleCompany} from './helpers';
import {token} from './user.acceptance';

describe('Company Details', () => {
  let client: Client;
  let app: IctgcwS2BackendApplication;
  let comapnyrepo: CompanyRepository;

  before(givenRunningApplicationWithCustomConfiguration);
  after(() => app.stop());

  before(givenCompanyRepository);
  before(() => {
    client = createRestAppClient(app);
  });

  /* beforeEach(async () => {
    await comapnyrepo.deleteAll();
  }); */

  // Insert company

  it('fails when no bearer token', async () => {
    await client.post('/insert/company').expect(401);
  });

  it('creates a company', async function () {
    const company = givenCompany();
    const response = await client
      .post('/insert/company')
      .set('Authorization', 'Bearer ' + token)
      .send(company)
      .expect(200);
    expect(response.body).to.containDeep(company);
    const result = await comapnyrepo.findById(response.body.companyid);
    expect(result).to.containDeep(company);
  });

  it('rejects requests to create a company with no companyid', async function () {
    const company: Partial<Company> = givenCompany();
    delete company.companyid;
    await client
      .post('/insert/company')
      .set('Authorization', 'Bearer ' + token)
      .send(company)
      .expect(422);
  });

  it('rejects requests to create a company with no companyname', async function () {
    const company: Partial<Company> = givenCompany();
    delete company.companyname;
    await client
      .post('/insert/company')
      .set('Authorization', 'Bearer ' + token)
      .send(company)
      .expect(422);
  });

  it('Accepts requests to create a company with no companyaddress', async function () {
    /* const company: Partial<Company> = givenCompany();
    delete company.companyaddress; */
    
    const response = await client
      .post('/insert/company')
      .set('Authorization', 'Bearer ' + token)
      .send({
        companyid: 'test321',
        companyname: 'test2',
      })
      .expect(200);
    const result = await comapnyrepo.findById(response.body.companyid);
    // expect(result.companyid).to.equal()
  });

  // Single Company Item dealing

  context('when dealing with a single persisted company', () => {
    let persistedCompany: Company;

    before(async () => {
      persistedCompany = await givenCompanyInstance();
    });

    //get company by id
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

    //get all companies
    it('get companies - fails when no bearer token', async () => {
      await client.get('/get/companies').expect(401);
    });

    it('gets all the companies', async () => {
      const response = await client
        .get(`/get/companies`)
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(200);
      console.log(response.body)
    });

    //get all companies
    /* it('get companies - fails when no bearer token', async () => {
      await client.get('/get/companies').expect(401);
    });

    it('gets all the companies', () => {
      return client
        .get(`/get/companies`)
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(200, [toJSON(persistedCompany)]);
    }); */

    //get device metadata from companyid
    it('get device metadata from companyid - fails when no bearer token', async () => {
      await client
        .get('/get/company/${persistedCompany.companyid}/devicemetadata')
        .expect(401);
    });

    it('get device metadata from companyid', () => {
      return client
        .get(`/get/company/${persistedCompany.companyid}/devicemetadata`)
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(200);
    });

    /* //get sensor data from companyid
    it('get sensor data from companyid - fails when no bearer token', async () => {
      await client
        .get('/get/company/${persistedCompany.companyid}/sensordata')
        .expect(401);
    });

    it('get sensor data from companyid', () => {
      return client
        .get(`/get/company/${persistedCompany.companyid}/sensordata`)
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(200);
    });

    //get flowmeter data from companyid
    it('get flowmeter data from companyid - fails when no bearer token', async () => {
      await client
        .get('/get/company/${persistedCompany.companyid}/flowmeterdata')
        .expect(401);
    });

    it('get flowmeter data from companyid', () => {
      return client
        .get(`/get/company/${persistedCompany.companyid}/flowmeterdata`)
        .set('Authorization', 'Bearer ' + token)
        .send()
        .expect(200);
    }); */

    //update company
    it('edit company - fails when no bearer token', async () => {
      await client
        .patch(`/edit/company/${persistedCompany.companyid}`)
        .expect(401);
    });

    /* it('updates the company by ID ', async () => {
      const updatedTodo = givenSingleCompany({
        companyname: 'test789',
      });
      const resp = await client
        .patch(`/edit/company/${persistedCompany.companyid}`)
        .set('Authorization', 'Bearer ' + token)
        .send(updatedTodo)
        .expect(204);
      const result = await comapnyrepo.findById(persistedCompany.companyid);
      expect(result).to.containEql(updatedTodo);
      console.log(resp.body);
    }); */

    it('returns 404 when updating a todo that does not exist', () => {
      return client
        .patch('/edit/company/99999')
        .set('Authorization', 'Bearer ' + token)
        .send(givenCompany({companyname: 'test321'}))
        .expect(404);
    });

    //get metadata for a company
    it('get company by id - fails when no bearer token', async () => {
      await client
        .get(`/get/company/${persistedCompany.companyid}/devicemetadata`)
        .expect(401);
    });

    /* it('get device metadata from a companyid', async () => {
     await client
        .patch(`/get/company/${persistedCompany.companyid}/devicemetadata`)
        .set('Authorization', 'Bearer ' + token)
        .expect(204);
      const result = await comapnyrepo.findById(persistedCompany.companyid);
      expect(result).to.containEql(updatedTodo);
    }); */

    it('returns 404 when updating a company that does not exist', () => {
      return client
        .patch('/get/company/${persistedCompany.companyid}/devicemetadata')
        .set('Authorization', 'Bearer ' + token)
        .expect(404);
    });

    // Delete
    it('delete company - fails when no bearer token', async () => {
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
        comapnyrepo.findById(persistedCompany.companyid),
      ).to.be.rejectedWith(EntityNotFoundError);
    });

    it('returns 404 when deleting a company that does not exist', async () => {
      await client
        .del(`/del/company/99999`)
        .set('Authorization', 'Bearer ' + token)
        .expect(404);
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

  async function givenCompanyRepository() {
    comapnyrepo = await app.get<CompanyRepository>(
      'repositories.CompanyRepository',
    );
  }

  async function givenCompanyInstance(company?: Partial<Company>) {
    return comapnyrepo.create(givenSingleCompany(company));
  }
});
