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
import {Sensordata} from '../models/sensordata.model';
import {SensordataRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

@api({
  components: {},
})
@authenticate('jwt')
export class SensordataController {
  constructor(
    @repository(SensordataRepository)
    public sensordataRepository: SensordataRepository,
  ) {}

  /**
   * Insert Preasure data
   * @param sensordata 
   * @returns sensordata
   */
  @operation('post', '/insert/pr', {
    tags: ['Sensor Data'],
    summary:
      'Insert the preasure sensor data into the system, based on the device ID',
    operationId: 'insertpr',
    responses: {
      '200': {
        description: 'Inserted Preasure sensor data',
        content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
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
      'x-swagger-router-controller': 'SensordataController',
    },
  })
  async insertpr(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<Sensordata> {
    return this.sensordataRepository.create(sensordata);
  }

  /**
   * Insert pH data
   * @param sensordata 
   * @returns sensordata
   */
  @operation('post', '/insert/ph', {
    tags: ['Sensor Data'],
    summary:
      'Insert the pH sensor data into the system, based on the device ID',
    operationId: 'insertph',
    responses: {
      '200': {
        description: 'Inserted pH sensor data',
        content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
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
      'x-swagger-router-controller': 'SensordataController',
    },
  })
  async insertph(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<Sensordata> {
    //TODO : add code for start token generation
    return this.sensordataRepository.create(sensordata);
  }

  /**
   * Insert FRC data
   * @param sensordata 
   * @returns sensordata
   */
  @operation('post', '/insert/frc', {
    tags: ['Sensor Data'],
    summary:
      'Insert the Free Residual Chlonine sensor data into the system, based on the device ID',
    operationId: 'insertfrc',
    responses: {
      '200': {
        description: 'Inserted Free Residual Chlonine sensor data',
        content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
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
      'x-swagger-router-controller': 'SensordataController',
    },
  })
  async insertfrc(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<Sensordata> {
    //TODO : add code for start token generation
    return this.sensordataRepository.create(sensordata);
  }

  /**
   * Insert TDS data
   * @param sensordata 
   * @returns sensordata
   */
  @operation('post', '/insert/tds', {
    tags: ['Sensor Data'],
    summary:
      'Insert the Total Dissolved Solids (TDS) sensor data into the system, based on the device ID',
    operationId: 'inserttds',
    responses: {
      '200': {
        description: 'Inserted TDS sensor data',
        content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
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
      'x-swagger-router-controller': 'SensordataController',
    },
  })
  async inserttds(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<Sensordata> {
    //TODO : add code for start token generation
    return this.sensordataRepository.create(sensordata);
  }

  /**
   * Insert nitrate data
   * @param sensordata 
   * @returns sensordata
   */
  @operation('post', '/insert/nit', {
    tags: ['Sensor Data'],
    summary:
      'Insert the Nitrate sensor data into the system, based on the device ID',
    operationId: 'insertnit',
    responses: {
      '200': {
        description: 'Inserted Nitrate sensor data',
        content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
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
      'x-swagger-router-controller': 'SensordataController',
    },
  })
  async insertnit(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<Sensordata> {
    //TODO : add code for start token generation
    return this.sensordataRepository.create(sensordata);
  }

  /**
   * Insert fluoride data
   * @param sensordata 
   * @returns sensordata
   */
  @operation('post', '/insert/fl', {
    tags: ['Sensor Data'],
    summary:
      'Insert the fluoride data into the system, based on the device ID',
    operationId: 'insertfl',
    responses: {
      '200': {
        description: 'Inserted Nitrate sensor data',
        content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
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
      'x-swagger-router-controller': 'SensordataController',
    },
  })
  async insertfl(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<Sensordata> {
    //TODO : add code for start token generation
    return this.sensordataRepository.create(sensordata);
  }

  /**
   * Insert arsenic data
   * @param sensordata 
   * @returns sensordata
   */
  @operation('post', '/insert/ars', {
    tags: ['Sensor Data'],
    summary:
      'Insert the arsenic data into the system, based on the device ID',
    operationId: 'insertars',
    responses: {
      '200': {
        description: 'Inserted arsenic sensor data',
        content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
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
      'x-swagger-router-controller': 'SensordataController',
    },
  })
  async insertars(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<Sensordata> {
    //TODO : add code for start token generation
    return this.sensordataRepository.create(sensordata);
  }

  /**
   * Insert iron sensor data
   * @param sensordata 
   * @returns sensordata
   */
  @operation('post', '/insert/iron', {
    tags: ['Sensor Data'],
    summary:
      'Insert the iron data into the system, based on the device ID',
    operationId: 'insertiron',
    responses: {
      '200': {
        description: 'Inserted iron sensor data',
        content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
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
      'x-swagger-router-controller': 'SensordataController',
    },
  })
  async insertiron(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<Sensordata> {
    //TODO : add code for start token generation
    return this.sensordataRepository.create(sensordata);
  }

  /**
   * Insert salanity data
   * @param sensordata 
   * @returns sensordata
   */
  @operation('post', '/insert/sal', {
    tags: ['Sensor Data'],
    summary:
      'Insert the salanity data into the system, based on the device ID',
    operationId: 'insertsalanity',
    responses: {
      '200': {
        description: 'Inserted salanity sensor data',
        content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
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
      'x-swagger-router-controller': 'SensordataController',
    },
  })
  async insertsal(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata),
        },
      },
    })
    sensordata: Sensordata,
  ): Promise<Sensordata> {
    //TODO : add code for start token generation
    return this.sensordataRepository.create(sensordata);
  }

  /* 
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
  } */
}
