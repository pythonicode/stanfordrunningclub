import * as migration_20251013_rename_group_me_url_to_discord_url from './20251013_rename_group_me_url_to_discord_url'

export const migrations = [
  {
    up: migration_20251013_rename_group_me_url_to_discord_url.up,
    down: migration_20251013_rename_group_me_url_to_discord_url.down,
    name: '20251013_rename_group_me_url_to_discord_url',
  },
]
