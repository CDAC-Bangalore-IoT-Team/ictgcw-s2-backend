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
import { Sensordata } from '../models/sensordata.model';
import { SensordataRepository } from '../repositories';


export class SensordataController {
  constructor(
    @repository(SensordataRepository)
    public sensordataRepository : SensordataRepository,
  ) {}

  @post('/sensordata')
  @response(200, {
    description: 'Sensordata model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata, {
            title: 'NewSensordata',
            
          }),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<Sensordata> {
    return this.sensordataRepository.create(sensordata);
  }

  @get('/sensordata/count')
  @response(200, {
    description: 'Sensordata model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sensordata) where?: Where<Sensordata>,
  ): Promise<Count> {
    return this.sensordataRepository.count(where);
  }

  @get('/sensordata')
  @response(200, {
    description: 'Array of Sensordata model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sensordata, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sensordata) filter?: Filter<Sensordata>,
  ): Promise<Sensordata[]> {
    return this.sensordataRepository.find(filter);
  }

  @patch('/sensordata')
  @response(200, {
    description: 'Sensordata PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata, {partial: true}),
        },
      },
    })
    sensordata: Sensordata,
    @param.where(Sensordata) where?: Where<Sensordata>,
  ): Promise<Count> {
    return this.sensordataRepository.updateAll(sensordata, where);
  }

  @get('/sensordata/{id}')
  @response(200, {
    description: 'Sensordata model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sensordata, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Sensordata, {exclude: 'where'}) filter?: FilterExcludingWhere<Sensordata>
  ): Promise<Sensordata> {
    return this.sensordataRepository.findById(id, filter);
  }

  @patch('/sensordata/{id}')
  @response(204, {
    description: 'Sensordata PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata, {partial: true}),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<void> {
    await this.sensordataRepository.updateById(id, sensordata);
  }

  @put('/sensordata/{id}')
  @response(204, {
    description: 'Sensordata PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sensordata: Sensordata,
  ): Promise<void> {
    await this.sensordataRepository.replaceById(id, sensordata);
  }

  @del('/sensordata/{id}')
  @response(204, {
    description: 'Sensordata DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sensordataRepository.deleteById(id);
  }
}
