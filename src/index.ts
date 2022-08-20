import 'dotenv/config';
import knexClient from './knex';

interface Users {
  id: number;
  name: string;
}

try {
  const selectUsers = async () => {
    console.log(await knexClient<Users>('users').select('id', 'name'));
  };
  selectUsers();
} catch (err) {
//   console.log(err);
}
