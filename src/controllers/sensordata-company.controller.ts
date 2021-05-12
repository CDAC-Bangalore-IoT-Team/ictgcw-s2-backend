import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Sensordata,
  Company,
} from '../models';
import {SensordataRepository} from '../repositories';

export class SensordataCompanyController {
  constructor(
    @repository(SensordataRepository)
    public sensordataRepository: SensordataRepository,
  ) { }

  @get('/sensordata/{id}/company', {
    responses: {
      '200': {
        description: 'Company belonging to Sensordata',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Company)},
          },
        },
      },
    },
  })
  async getCompany(
    @param.path.string('id') id: typeof Sensordata.prototype.deviceid,
  ): Promise<Company> {
    return this.sensordataRepository.companyId(id);
  }
}
