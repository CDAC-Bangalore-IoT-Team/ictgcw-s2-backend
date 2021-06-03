import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PostgresdbDataSource} from '../datasources';
import {Flowmeterdata, FlowmeterdataRelations, Company, Devicemetadata} from '../models';
import {CompanyRepository} from './company.repository';
import {DevicemetadataRepository} from './devicemetadata.repository';

export class FlowmeterdataRepository extends DefaultCrudRepository<
  Flowmeterdata,
  typeof Flowmeterdata.prototype.id,
  FlowmeterdataRelations
> {

  public readonly companyId: BelongsToAccessor<Company, typeof Flowmeterdata.prototype.id>;

  public readonly deviceId: BelongsToAccessor<Devicemetadata, typeof Flowmeterdata.prototype.id>;

  constructor(
    @inject('datasources.postgresdb') dataSource: PostgresdbDataSource, @repository.getter('CompanyRepository') protected companyRepositoryGetter: Getter<CompanyRepository>, @repository.getter('DevicemetadataRepository') protected devicemetadataRepositoryGetter: Getter<DevicemetadataRepository>,
  ) {
    super(Flowmeterdata, dataSource);
    this.deviceId = this.createBelongsToAccessorFor('deviceId', devicemetadataRepositoryGetter,);
    this.registerInclusionResolver('deviceId', this.deviceId.inclusionResolver);
    this.companyId = this.createBelongsToAccessorFor('companyId', companyRepositoryGetter,);
    this.registerInclusionResolver('companyId', this.companyId.inclusionResolver);
  }
}
