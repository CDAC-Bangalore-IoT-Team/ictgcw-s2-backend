import {Filter, FilterExcludingWhere, repository} from '@loopback/repository';
import {
  post,
  getModelSchemaRef,
  requestBody,
  api,
  get,
  param,
} from '@loopback/rest';
import {Flowmeterdata} from '../models/flowmeterdata.model';
import {FlowmeterdataRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

@api({
  components: {},
})
@authenticate('jwt')
export class FlowmeterController {
  constructor(
    @repository(FlowmeterdataRepository)
    public flowmeterdataRepository: FlowmeterdataRepository,
  ) {}

  /**
   * Insert bulk flow meter data
   * @param flowmeterdata
   * @returns flowmeterdata
   */
  @post('/insert/bfm', {
    tags: ['Flow meter Data'],
    summary:
      'Insert the bulk flow meter data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted bulk flow meter data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Flowmeterdata,
            },
          },
        },
      },
      '400': {
        description: 'Not allowable input',
      },
      '404': {
        description: 'Page not found',
      },
      '500': {
        description: 'Server error',
      },
    },
  })
  async insertbfm(
    @requestBody({
      required: true,
      content: {
        'application/json': {
          schema: getModelSchemaRef(Flowmeterdata),
        },
      },
    })
    flowmeterdata: Flowmeterdata,
  ): Promise<Flowmeterdata> {
    return this.flowmeterdataRepository.create(flowmeterdata);
  }

  /**
   * Insert consumer flow meter data
   * @param flowmeterdata
   * @returns flowmeterdata
   */
  @post('/insert/cfm', {
    tags: ['Flow meter Data'],
    summary:
      'Insert the consumer flow meter data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted consumer flow meter data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Flowmeterdata,
            },
          },
        },
      },
      '400': {
        description: 'Not allowable input',
      },
      '404': {
        description: 'Page not found',
      },
      '500': {
        description: 'Server error',
      },
    },
  })
  async insertcfm(
    @requestBody({
      required: true,
      content: {
        'application/json': {
          schema: getModelSchemaRef(Flowmeterdata),
        },
      },
    })
    flowmeterdata: Flowmeterdata,
  ): Promise<Flowmeterdata> {
    return this.flowmeterdataRepository.create(flowmeterdata);
  }

  @get('/get/flowmeterdata/{deviceid}', {
    tags: ['Flow meter Data'],
    summary: 'Get Array of flowmeter data based on the device id of sensor',
    responses: {
      '200': {
        description: 'Array of Flowmeter model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Flowmeterdata, {includeRelations: true}),
            },
          },
        },
      },
      '400': {
        description: 'Not allowable input',
      },
      '404': {
        description: 'Page not found',
      },
      '500': {
        description: 'Server error',
      },
    },
  })
  async find(
    @param.path.string('deviceid') deviceid: string,
    @param.filter(Flowmeterdata) filter?: Filter<Flowmeterdata>,
  ): Promise<Flowmeterdata[]> {
    return this.flowmeterdataRepository.find({where: {deviceid: deviceid}});
  }
 
  /**
   * Get company of the flow meter based on the device id of flow meter
   * @param id
   * @returns Company
   */
  /* @get('/get/flowmeterdata/{id}/company', {
    tags: ['Flow meter Data'],
    summary:
      'Get company of the flow meter based on the device id of flow meter',
    responses: {
      '200': {
        description: 'Company belonging to Flowmeterdata',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Company)},
          },
        },
      },
      '400': {
        description: 'Not allowable input',
      },
      '404': {
        description: 'Page not found',
      },
      '500': {
        description: 'Server error',
      },
    },
  })
  async getCompany(
    @param.path.string('id') id: typeof Flowmeterdata.prototype.deviceid,
  ): Promise<Company> {
    return this.flowmeterdataRepository.companyId(id);
  } */

  /* @get('/flowmeterdata/count')
  @response(200, {
    description: 'Flowmeterdata model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Flowmeterdata) where?: Where<Flowmeterdata>,
  ): Promise<Count> {
    return this.flowmeterdataRepository.count(where);
  }*/

  /*@get('/flowmeterdata')
  @response(200, {
    description: 'Array of Flowmeterdata model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Flowmeterdata, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Flowmeterdata) filter?: Filter<Flowmeterdata>,
  ): Promise<Flowmeterdata[]> {
    return this.flowmeterdataRepository.find(filter);
  }

  @patch('/flowmeterdata')
  @response(200, {
    description: 'Flowmeterdata PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Flowmeterdata, {partial: true}),
        },
      },
    })
    flowmeterdata: Flowmeterdata,
    @param.where(Flowmeterdata) where?: Where<Flowmeterdata>,
  ): Promise<Count> {
    return this.flowmeterdataRepository.updateAll(flowmeterdata, where);
  }*/

  /* @get('/get/flowmeterdata/{id}', {
    tags: ['Flow meter Data'],
    summary: 'Get flow meter data based on the device id of flow meter',
    responses: {
      '200': {
        description: 'Flowmeterdata model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Flowmeterdata, {includeRelations: true}),
          },
        },
      },
      '400': {
        description: 'Not allowable input',
      },
      '404': {
        description: 'Page not found',
      },
      '500': {
        description: 'Server error',
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Flowmeterdata, {exclude: 'where'})
    filter?: FilterExcludingWhere<Flowmeterdata>,
  ): Promise<Flowmeterdata> {
    return this.flowmeterdataRepository.findById(id, filter);
  } */

  /*@patch('/flowmeterdata/{id}')
  @response(204, {
    description: 'Flowmeterdata PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Flowmeterdata, {partial: true}),
        },
      },
    })
    flowmeterdata: Flowmeterdata,
  ): Promise<void> {
    await this.flowmeterdataRepository.updateById(id, flowmeterdata);
  }

  @put('/flowmeterdata/{id}')
  @response(204, {
    description: 'Flowmeterdata PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() flowmeterdata: Flowmeterdata,
  ): Promise<void> {
    await this.flowmeterdataRepository.replaceById(id, flowmeterdata);
  }

  @del('/flowmeterdata/{id}')
  @response(204, {
    description: 'Flowmeterdata DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.flowmeterdataRepository.deleteById(id);
  } */
}
