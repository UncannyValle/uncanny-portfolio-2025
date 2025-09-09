import * as migration_20250909_012842 from './20250909_012842';

export const migrations = [
  {
    up: migration_20250909_012842.up,
    down: migration_20250909_012842.down,
    name: '20250909_012842'
  },
];
