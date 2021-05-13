import {Filter, FilterExcludingWhere, repository} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  requestBody,
  del,
} from '@loopback/rest';
import {Company, Devicemetadata} from '../models';
import {CompanyRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';
import { Flowmeterdata } from '../models/flowmeterdata.model';
import { Sensordata } from '../models/sensordata.model';

@authenticate('jwt')
export class CompanyController {
  constructor(
    @repository(CompanyRepository)
    public companyRepository: CompanyRepository,
  ) {}

  /**
   * Insert bulk flow meter data
   * @param company
   * @returns company
   */
  @post('/insert/company', {
    tags: ['Company details'],
    summary:
      'Insert the company details with unique alphanumerical company ID.',
    responses: {
      '200': {
        description: 'Inserted the company details',
        content: {
          'application/json': {
            schema: {
              'x-ts-type': Company,
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
  async addCompany(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Company),
        },
      },
    })
    company: Company,
  ): Promise<Company> {
    return this.companyRepository.create(company);
  }

  @get('/get/companies', {
    tags: ['Company details'],
    summary: 'Get all the companies details.',
    responses: {
      '200': {
        description: 'Array of Company instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Company, {includeRelations: true}),
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
  async find(
    @param.filter(Company) filter?: Filter<Company>,
  ): Promise<Company[]> {
    return this.companyRepository.find(filter);
  }

  @get('/get/company/{id}', {
    tags: ['Company details'],
    summary: 'Get company details by company id.',
    responses: {
      '200': {
        description: 'Company model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Company, {includeRelations: true}),
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
    @param.filter(Company, {exclude: 'where'})
    filter?: FilterExcludingWhere<Company>,
  ): Promise<Company> {
    return this.companyRepository.findById(id, filter);
  }

  @patch('/edit/company/{id}', {
    tags: ['Company details'],
    summary: 'Edit company details by company id.',
    responses: {
      '204': {
        description: 'Edited Company model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Company, {includeRelations: true}),
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
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Company, {partial: true}),
        },
      },
    })
    company: Company,
  ): Promise<void> {
    await this.companyRepository.updateById(id, company);
  }

  @get('/get/company/{id}/devicemetadata', {
    tags: ['Company details'],
    summary: 'Get all device meta data from a company',
    responses: {
      '200': {
        description: 'Array of Company has many Devicemetadata',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Devicemetadata)},
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
    },
  })
  async getAllDevicemetadataOfaCompany(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Devicemetadata>,
  ): Promise<Devicemetadata[]> {
    return this.companyRepository.devicemetadata(id).find(filter);
  }

  /* @get('/get/company/{id}/flowmeterdata', {
    tags: ['Company details'],
    summary: 'Get all device meta data from a company',
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
  async getAllflowmeterdataOfaCompany(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Flowmeterdata>,
  ): Promise<Flowmeterdata[]> {
    return this.companyRepository.flowmeterdata(id).find(filter);
  }

  @get('/get/company/{id}/sensordata', {
    tags: ['Company details'],
    summary: 'Get all sensor data details from a company',
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
  async getAllSensordataOfaCompany(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Sensordata>,
  ): Promise<Sensordata[]> {
    return this.companyRepository.sensordata(id).find(filter);
  } */

  @del('/del/company/{id}', {
    tags: ['Company details'],
    summary: 'Delete company details by company id.',
    responses: {
      '204': {
        description: 'Company DELETE success',
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
    await this.companyRepository.deleteById(id);
  }

/* @put('/companies/{id}')
  @response(204, {
    description: 'Company PUT success',
  })
  @patch('/edit/company/{id}', {
    tags: ['Company details'],
    summary: 'Edit company details by company id.',
    responses: {
      '204': {
        description: 'Edited Company model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Company, {includeRelations: true}),
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
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() company: Company,
  ): Promise<void> {
    await this.companyRepository.replaceById(id, company);
  } */

  /* @get('/companies/count')
  @response(200, {
    description: 'Company model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Company) where?: Where<Company>,
  ): Promise<Count> {
    return this.companyRepository.count(where);
  } */

  /* @patch('/edit/company')
  @response(200, {
    description: 'Company PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Company, {partial: true}),
        },
      },
    })
    company: Company,
    @param.where(Company) where?: Where<Company>,
  ): Promise<Count> {
    return this.companyRepository.updateAll(company, where);
  } */
}
