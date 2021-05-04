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
} from '@loopback/rest';
import { Flowmeterdata } from '../models/flowmeterdata.model';
import { FlowmeterdataRepository } from '../repositories';

export class FlowmeterController {
  constructor(
    @repository(FlowmeterdataRepository)
    public flowmeterdataRepository : FlowmeterdataRepository,
  ) {}

  @post('/flowmeterdata')
  @response(200, {
    description: 'Flowmeterdata model instance',
    content: {'application/json': {schema: getModelSchemaRef(Flowmeterdata)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Flowmeterdata, {
            title: 'NewFlowmeterdata',
            
          }),
        },
      },
    })
    flowmeterdata: Flowmeterdata,
  ): Promise<Flowmeterdata> {
    return this.flowmeterdataRepository.create(flowmeterdata);
  }

  @get('/flowmeterdata/count')
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
  }
}
