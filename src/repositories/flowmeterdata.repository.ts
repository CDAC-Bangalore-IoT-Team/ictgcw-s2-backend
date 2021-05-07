import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  repository,
  BelongsToAccessor,
} from '@loopback/repository';
import {PostgresdbDataSource} from '../datasources';
import {Company} from '../models';
import {
  Flowmeterdata,
  FlowmeterdataRelations,
} from '../models/flowmeterdata.model';
import {CompanyRepository} from './company.repository';

export class FlowmeterdataRepository extends DefaultCrudRepository<
  Flowmeterdata,
  typeof Flowmeterdata.prototype.deviceid,
  FlowmeterdataRelations
> {
  public readonly companyId: BelongsToAccessor<
    Company,
    typeof Flowmeterdata.prototype.deviceid
  >;

  constructor(
    @inject('datasources.postgresdb') dataSource: PostgresdbDataSource,
    @repository.getter('CompanyRepository')
    protected companyRepositoryGetter: Getter<CompanyRepository>,
  ) {
    super(Flowmeterdata, dataSource);
    this.companyId = this.createBelongsToAccessorFor(
      'companyId',
      companyRepositoryGetter,
    );
    this.registerInclusionResolver(
      'companyId',
      this.companyId.inclusionResolver,
    );
  }
}
