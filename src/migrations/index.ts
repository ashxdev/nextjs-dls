import * as migration_20241130_185707_init from './20241130_185707_init';

export const migrations = [
  {
    up: migration_20241130_185707_init.up,
    down: migration_20241130_185707_init.down,
    name: '20241130_185707_init'
  },
];
