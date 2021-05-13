
export class CompanySensordataController {
  /* constructor(
    @repository(CompanyRepository) protected companyRepository: CompanyRepository,
  ) { }

  @get('/companies/{id}/sensordata', {
    responses: {
      '200': {
        description: 'Array of Company has many Sensordata',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Sensordata)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Sensordata>,
  ): Promise<Sensordata[]> {
    return this.companyRepository.sensordata(id).find(filter);
  }

  @post('/companies/{id}/sensordata', {
    responses: {
      '200': {
        description: 'Company model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sensordata)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Company.prototype.companyid,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata, {
            title: 'NewSensordataInCompany',
            exclude: ['id'],
            optional: ['companyid']
          }),
        },
      },
    }) sensordata: Omit<Sensordata, 'id'>,
  ): Promise<Sensordata> {
    return this.companyRepository.sensordata(id).create(sensordata);
  }

  @patch('/companies/{id}/sensordata', {
    responses: {
      '200': {
        description: 'Company.Sensordata PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sensordata, {partial: true}),
        },
      },
    })
    sensordata: Partial<Sensordata>,
    @param.query.object('where', getWhereSchemaFor(Sensordata)) where?: Where<Sensordata>,
  ): Promise<Count> {
    return this.companyRepository.sensordata(id).patch(sensordata, where);
  }

  @del('/companies/{id}/sensordata', {
    responses: {
      '200': {
        description: 'Company.Sensordata DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Sensordata)) where?: Where<Sensordata>,
  ): Promise<Count> {
    return this.companyRepository.sensordata(id).delete(where);
  } */
}
