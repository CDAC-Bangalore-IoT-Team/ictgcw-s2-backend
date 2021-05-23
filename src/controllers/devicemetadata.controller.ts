import {FilterExcludingWhere, repository} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  del,
  requestBody,
  put,
} from '@loopback/rest';
import {Devicemetadata} from '../models/devicemetadata.model';
import {DevicemetadataRepository} from '../repositories/devicemetadata.repository';
import {authenticate} from '@loopback/authentication';

/* const devicemetadataidschema: SchemaObject = {
  type: 'object',
  required: ['deviceid'],
  properties: {
    deviceid: {
      type: 'string',
    },
  },
}; */

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
  @post('/insert/devicemetadata', {
    tags: ['Device metadata'],
    summary: 'Insert device metadata into the system, with all fields required',
    description: '',
    responses: {
      '200': {
        description: 'Inserted device metadata into the system',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Devicemetadata,
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
  async insertdevicemetadata(
    @requestBody({
      required: true,
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

  /**
   * Get device meta data
   * @param deviceid
   * @returns devicemetadata
   */
  @get('/get/devicemetadata/{deviceid}', {
    tags: ['Device metadata'],
    summary: 'Get device metadata from the system, through device ID',
    description: '',
    responses: {
      '200': {
        description: 'Devicemetadata model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Devicemetadata, {includeRelations: false}),
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
    @param.path.string('deviceid') id: string,
   /*  @param.filter(Devicemetadata, {exclude: 'where'})
    filter?: FilterExcludingWhere<Devicemetadata>, */
  ): Promise<Devicemetadata> {
    return this.devicemetadataRepository.findById(id);
  }

  /**
   * Update device meta data
   * @param deviceid
   * @returns SUCCESS/FAILURE response
   */
  @patch('/update/devicemetadata/{id}', {
    tags: ['Device metadata'],
    summary: 'update device metadata from the system, through device ID',
    description: '',
    responses: {
      '204': {
        description: 'Devicemetadata PATCH success',
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

  /**
   * Delete device meta data
   * @param deviceid
   * @returns SUCCESS/FAILURE response
   */
  /* @del('/del/devicemetadata/{id}', {
    tags: ['Device metadata'],
    summary: 'Delete device metadata from the system, through device ID',
    responses: {
      '204': {
        description: 'Devicemetadata DELETE success',
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
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.devicemetadataRepository.deleteById(id);
  } */

  /* @put('/replace/devicemetadata/{id}', {
    tags: ['Device metadata'],
    summary: 'Replace device metadata from the system, through device ID',
    responses: {
      '204': {
        description: 'Devicemetadata PUT success',
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
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() devicemetadata: Devicemetadata,
  ): Promise<void> {
    await this.devicemetadataRepository.replaceById(id, devicemetadata);
  } */

  /*  @get('/devicemetadata/{id}/company', {
    tags: ['Device metadata'],
    summary:
      'Get Company belonging to Devicemetadata from device metadata deviceid',
    responses: {
      '200': {
        description: 'Company belonging to Devicemetadata',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Company)},
          },
        },
      },
    },
  })
  async getCompany(
    @param.path.string('id') id: typeof Devicemetadata.prototype.deviceid,
  ): Promise<Company> {
    return this.devicemetadataRepository.companyId(id);
  } */

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
  }*/

  /*  @get('/devicemetadata')
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
  } */

  /*@patch('/devicemetadata')
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
  }*/
}
