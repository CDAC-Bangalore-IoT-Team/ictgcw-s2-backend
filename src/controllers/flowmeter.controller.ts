import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  api,
  operation,
} from '@loopback/rest';
import { Flowmeterdata } from '../models/flowmeterdata.model';
import { FlowmeterdataRepository } from '../repositories';
import {authenticate} from '@loopback/authentication';
import { Sensordata } from '../models';

@api({
  components: {
    
  }
})
@authenticate('jwt')
export class FlowmeterController {
  constructor(
    @repository(FlowmeterdataRepository)
    public flowmeterdataRepository : FlowmeterdataRepository,
  ) {}

  /**
   * Insert bulk flow meter data
   * @param flowmeterdata 
   * @returns flowmeterdata
   */
   @operation('post', '/insert/bfm', {
    tags: ['Flow meter Data'],
    summary:
      'Insert the bulk flow meter data into the system, based on the device ID',
    operationId: 'insertbfm',
    responses: {
      '200': {
        description: 'Inserted bulk flow meter data',
        content: {'application/json': {schema: getModelSchemaRef(Flowmeterdata)}},
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
      'x-swagger-router-controller': 'FlowmeterController',
    },
  })
  async insertbfm(
    @requestBody({
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
   @operation('post', '/insert/cfm', {
    tags: ['Flow meter Data'],
    summary:
      'Insert the consumer flow meter data into the system, based on the device ID',
    operationId: 'insertcfm',
    responses: {
      '200': {
        description: 'Inserted consumer flow meter data',
        content: {'application/json': {schema: getModelSchemaRef(Flowmeterdata)}},
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
      'x-swagger-router-controller': 'FlowmeterController',
    },
  })
  async insertcfm(
    @requestBody({
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


  /* @get('/flowmeterdata/count')
  @response(200, {
    description: 'Flowmeterdata model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Flowmeterdata) where?: Where<Flowmeterdata>,
  ): Promise<Count> {
    return this.flowmeterdataRepository.count(where);
  }

  @get('/flowmeterdata')
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
  }

  @get('/flowmeterdata/{id}')
  @response(200, {
    description: 'Flowmeterdata model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Flowmeterdata, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Flowmeterdata, {exclude: 'where'}) filter?: FilterExcludingWhere<Flowmeterdata>
  ): Promise<Flowmeterdata> {
    return this.flowmeterdataRepository.findById(id, filter);
  }

  @patch('/flowmeterdata/{id}')
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
