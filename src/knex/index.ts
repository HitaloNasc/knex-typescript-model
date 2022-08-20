import { Knex, knex } from 'knex';
import knex_config from '../config/knex_config';

const config: Knex.Config = {
  ...knex_config
};

export default knex(config);
