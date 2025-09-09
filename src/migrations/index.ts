import * as migration_20250909_000742 from './20250909_000742';

export const migrations = [
  {
    up: migration_20250909_000742.up,
    down: migration_20250909_000742.down,
    name: '20250909_000742'
  },
];
