import * as migration_20250908_201529_add_prefix_field_to_media from './20250908_201529_add_prefix_field_to_media';
import * as migration_20250908_222918 from './20250908_222918';

export const migrations = [
  {
    up: migration_20250908_201529_add_prefix_field_to_media.up,
    down: migration_20250908_201529_add_prefix_field_to_media.down,
    name: '20250908_201529_add_prefix_field_to_media',
  },
  {
    up: migration_20250908_222918.up,
    down: migration_20250908_222918.down,
    name: '20250908_222918'
  },
];
