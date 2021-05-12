import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PostgresdbDataSource} from '../datasources';
import {Devicemetadata, DevicemetadataRelations, Company} from '../models';
import {CompanyRepository} from './company.repository';

export class DevicemetadataRepository extends DefaultCrudRepository<
  Devicemetadata,
  typeof Devicemetadata.prototype.deviceid,
  DevicemetadataRelations
> {

  public readonly companyId: BelongsToAccessor<Company, typeof Devicemetadata.prototype.deviceid>;

  constructor(
    @inject('datasources.postgresdb') dataSource: PostgresdbDataSource, @repository.getter('CompanyRepository') protected companyRepositoryGetter: Getter<CompanyRepository>,
  ) {
    super(Devicemetadata, dataSource);
    this.companyId = this.createBelongsToAccessorFor('companyId', companyRepositoryGetter,);
    this.registerInclusionResolver('companyId', this.companyId.inclusionResolver);
  }
}
