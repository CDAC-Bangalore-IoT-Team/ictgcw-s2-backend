
export class CompanyFlowmeterdataController {
  /* constructor(
    @repository(CompanyRepository) protected companyRepository: CompanyRepository,
  ) { }

  @get('/companies/{id}/flowmeterdata', {
    responses: {
      '200': {
        description: 'Array of Company has many Flowmeterdata',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Flowmeterdata)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Flowmeterdata>,
  ): Promise<Flowmeterdata[]> {
    return this.companyRepository.flowmeterdata(id).find(filter);
  }

  @post('/companies/{id}/flowmeterdata', {
    responses: {
      '200': {
        description: 'Company model instance',
        content: {'application/json': {schema: getModelSchemaRef(Flowmeterdata)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Company.prototype.companyid,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Flowmeterdata, {
            title: 'NewFlowmeterdataInCompany',
            exclude: ['id'],
            optional: ['companyid']
          }),
        },
      },
    }) flowmeterdata: Omit<Flowmeterdata, 'id'>,
  ): Promise<Flowmeterdata> {
    return this.companyRepository.flowmeterdata(id).create(flowmeterdata);
  }

  @patch('/companies/{id}/flowmeterdata', {
    responses: {
      '200': {
        description: 'Company.Flowmeterdata PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Flowmeterdata, {partial: true}),
        },
      },
    })
    flowmeterdata: Partial<Flowmeterdata>,
    @param.query.object('where', getWhereSchemaFor(Flowmeterdata)) where?: Where<Flowmeterdata>,
  ): Promise<Count> {
    return this.companyRepository.flowmeterdata(id).patch(flowmeterdata, where);
  }

  @del('/companies/{id}/flowmeterdata', {
    responses: {
      '200': {
        description: 'Company.Flowmeterdata DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Flowmeterdata)) where?: Where<Flowmeterdata>,
  ): Promise<Count> {
    return this.companyRepository.flowmeterdata(id).delete(where);
  } */
}
