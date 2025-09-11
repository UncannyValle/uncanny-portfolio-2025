import * as migration_20250909_012842 from './20250909_012842';
import * as migration_20250909_013249 from './20250909_013249';
import * as migration_20250911_002222 from './20250911_002222';

export const migrations = [
  {
    up: migration_20250909_012842.up,
    down: migration_20250909_012842.down,
    name: '20250909_012842',
  },
  {
    up: migration_20250909_013249.up,
    down: migration_20250909_013249.down,
    name: '20250909_013249',
  },
  {
    up: migration_20250911_002222.up,
    down: migration_20250911_002222.down,
    name: '20250911_002222'
  },
];
