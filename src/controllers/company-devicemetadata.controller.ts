
export class CompanyDevicemetadataController {
  /* constructor(
    @repository(CompanyRepository) protected companyRepository: CompanyRepository,
  ) { } */

  /* @get('/companies/{id}/devicemetadata', {
    responses: {
      '200': {
        description: 'Array of Company has many Devicemetadata',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Devicemetadata)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Devicemetadata>,
  ): Promise<Devicemetadata[]> {
    return this.companyRepository.devicemetadata(id).find(filter);
  }

  @post('/companies/{id}/devicemetadata', {
    responses: {
      '200': {
        description: 'Company model instance',
        content: {'application/json': {schema: getModelSchemaRef(Devicemetadata)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Company.prototype.companyid,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Devicemetadata, {
            title: 'NewDevicemetadataInCompany',
            exclude: ['deviceid'],
            optional: ['companyid']
          }),
        },
      },
    }) devicemetadata: Omit<Devicemetadata, 'deviceid'>,
  ): Promise<Devicemetadata> {
    return this.companyRepository.devicemetadata(id).create(devicemetadata);
  }

  @patch('/companies/{id}/devicemetadata', {
    responses: {
      '200': {
        description: 'Company.Devicemetadata PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Devicemetadata, {partial: true}),
        },
      },
    })
    devicemetadata: Partial<Devicemetadata>,
    @param.query.object('where', getWhereSchemaFor(Devicemetadata)) where?: Where<Devicemetadata>,
  ): Promise<Count> {
    return this.companyRepository.devicemetadata(id).patch(devicemetadata, where);
  }

  @del('/companies/{id}/devicemetadata', {
    responses: {
      '200': {
        description: 'Company.Devicemetadata DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Devicemetadata)) where?: Where<Devicemetadata>,
  ): Promise<Count> {
    return this.companyRepository.devicemetadata(id).delete(where);
  } */
}
