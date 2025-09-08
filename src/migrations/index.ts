import * as migration_20250908_225218 from './20250908_225218';

export const migrations = [
  {
    up: migration_20250908_225218.up,
    down: migration_20250908_225218.down,
    name: '20250908_225218'
  },
];
