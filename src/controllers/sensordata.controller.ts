import {FilterExcludingWhere, repository} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  requestBody,
  api,
  response,
} from '@loopback/rest';
import {Sensordata} from '../models/sensordata.model';
import {SensordataRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';
import {Company} from '../models';

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
  @post('/insert/pr', {
    tags: ['Sensor Data'],
    summary:
      'Insert the pressure sensor data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted  pressure sensor data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Sensordata,
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
  async insertpr(
    @requestBody({
      required: true,
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
  @post('/insert/ph', {
    tags: ['Sensor Data'],
    summary: 'Insert the pH data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted pH sensor data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Sensordata,
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
  async insertph(
    @requestBody({
      required: true,
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
  @post('/insert/frc', {
    tags: ['Sensor Data'],
    summary:
      'Insert the Free Residual Chlorine (FRC) sensor data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted  Free Residual Chlorine (FRC) sensor data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Sensordata,
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
  async insertfrc(
    @requestBody({
      required: true,
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
  @post('/insert/tds', {
    tags: ['Sensor Data'],
    summary:
      'Insert the Total Dissolved Solids (TDS) sensor data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted  Total Dissolved Solids (TDS) sensor data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Sensordata,
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
  async inserttds(
    @requestBody({
      required: true,
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
  @post('/insert/nit', {
    tags: ['Sensor Data'],
    summary:
      'Insert the Nitrate sensor data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted  Nitrate sensor data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Sensordata,
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
  async insertnit(
    @requestBody({
      required: true,
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
  @post('/insert/fl', {
    tags: ['Sensor Data'],
    summary:
      'Insert the Fluorine sensor data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted  Fluorine sensor data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Sensordata,
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
  async insertfl(
    @requestBody({
      required: true,
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
  @post('/insert/ars', {
    tags: ['Sensor Data'],
    summary:
      'Insert the Arsenic sensor data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted  Arsenic sensor data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Sensordata,
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
  async insertars(
    @requestBody({
      required: true,
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
  @post('/insert/iron', {
    tags: ['Sensor Data'],
    summary:
      'Insert the Iron sensor data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted  Iron sensor data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Sensordata,
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
  async insertiron(
    @requestBody({
      required: true,
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
  @post('/insert/sal', {
    tags: ['Sensor Data'],
    summary:
      'Insert the Salanity sensor data into the system, based on the device ID',
    responses: {
      '200': {
        description: 'Inserted  Salanity sensor data',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Sensordata,
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
  async insertsal(
    @requestBody({
      required: true,
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

  @get('/sensordata/{id}/company', {
    tags: ['Sensor Data'],
    summary: 'Get company of the sensor based on the device id of sensor',
    responses: {
      '200': {
        description: 'Company belonging to Sensordata',
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
    @param.path.string('id') id: typeof Sensordata.prototype.deviceid,
  ): Promise<Company> {
    return this.sensordataRepository.companyId(id);
  }

  @get('/sensordata/{id}', {
    tags: ['Sensor Data'],
    summary: 'Get sensor data based on the device id of sensor',
    responses: {
      '200': {
        description: 'Sensordata model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Sensordata, {includeRelations: true}),
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
    @param.filter(Sensordata, {exclude: 'where'})
    filter?: FilterExcludingWhere<Sensordata>,
  ): Promise<Sensordata> {
    return this.sensordataRepository.findById(id, filter);
  }

  /*@patch('/sensordata/{id}')
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

  /* 
  /*@get('/sensordata/count')
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
  }*/
}
