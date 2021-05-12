import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Flowmeterdata,
  Company,
} from '../models';
import {FlowmeterdataRepository} from '../repositories';

export class FlowmeterdataCompanyController {
  constructor(
    @repository(FlowmeterdataRepository)
    public flowmeterdataRepository: FlowmeterdataRepository,
  ) { }

  @get('/flowmeterdata/{id}/company', {
    responses: {
      '200': {
        description: 'Company belonging to Flowmeterdata',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Company)},
          },
        },
      },
    },
  })
  async getCompany(
    @param.path.string('id') id: typeof Flowmeterdata.prototype.deviceid,
  ): Promise<Company> {
    return this.flowmeterdataRepository.companyId(id);
  }
}
