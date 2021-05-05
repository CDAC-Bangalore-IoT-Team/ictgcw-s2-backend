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
  tags,
  api,
  operation,
} from '@loopback/rest';
import {Devicemetadata} from '../models/devicemetadata.model';
import {DevicemetadataRepository} from '../repositories/devicemetadata.repository';
import {authenticate} from '@loopback/authentication';
import { Sensordata } from '../models';

@api({
  components: {
    
  }
})
@authenticate('jwt')
export class DevicemetadataController {
  constructor(
    @repository(DevicemetadataRepository)
    public devicemetadataRepository: DevicemetadataRepository,
  ) {}

  /**
   * Insert device meta data
   * @param devicemetadata 
   * @returns devicemetadata
   */
   @operation('post', '/insert/metadata', {
    tags: ['Device metadata'],
    summary:
      'Insert the devices meta data into the system, based on the device ID',
    operationId: 'insertmetadata',
    responses: {
      '200': {
        description: 'Inserted device meta data into the system',
        content: {'application/json': {schema: getModelSchemaRef(Devicemetadata)}},
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
      'x-swagger-router-controller': 'DevicemetadataController',
    },
  })
  async insertdevicemetadata(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Devicemetadata),
        },
      },
    })
    devicemetadata: Devicemetadata,
  ): Promise<Devicemetadata> {
    return this.devicemetadataRepository.create(devicemetadata);
  }

  /* @get('/devicemetadata/count')
  @tags('Device meta data')
  @response(200, {
    description: 'Devicemetadata model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Devicemetadata) where?: Where<Devicemetadata>,
  ): Promise<Count> {
    return this.devicemetadataRepository.count(where);
  }

  @get('/devicemetadata')
  @tags('Device meta data')
  @response(200, {
    description: 'Array of Devicemetadata model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Devicemetadata, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Devicemetadata) filter?: Filter<Devicemetadata>,
  ): Promise<Devicemetadata[]> {
    return this.devicemetadataRepository.find(filter);
  }

  @patch('/devicemetadata')
  @tags('Device meta data')
  @response(200, {
    description: 'Devicemetadata PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Devicemetadata, {partial: true}),
        },
      },
    })
    devicemetadata: Devicemetadata,
    @param.where(Devicemetadata) where?: Where<Devicemetadata>,
  ): Promise<Count> {
    return this.devicemetadataRepository.updateAll(devicemetadata, where);
  }

  @get('/devicemetadata/{id}')
  @response(200, {
    description: 'Devicemetadata model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Devicemetadata, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Devicemetadata, {exclude: 'where'})
    filter?: FilterExcludingWhere<Devicemetadata>,
  ): Promise<Devicemetadata> {
    return this.devicemetadataRepository.findById(id, filter);
  }

  @patch('/devicemetadata/{id}')
  @tags('Device meta data')
  @response(204, {
    description: 'Devicemetadata PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Devicemetadata, {partial: true}),
        },
      },
    })
    devicemetadata: Devicemetadata,
  ): Promise<void> {
    await this.devicemetadataRepository.updateById(id, devicemetadata);
  }

  @put('/devicemetadata/{id}')
  @tags('Device meta data')
  @response(204, {
    description: 'Devicemetadata PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() devicemetadata: Devicemetadata,
  ): Promise<void> {
    await this.devicemetadataRepository.replaceById(id, devicemetadata);
  }

  @del('/devicemetadata/{id}')
  @tags('Device meta data')
  @response(204, {
    description: 'Devicemetadata DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.devicemetadataRepository.deleteById(id);
  } */
}
