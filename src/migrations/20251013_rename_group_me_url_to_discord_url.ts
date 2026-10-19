import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'home'
          AND column_name = 'group_me_url'
      ) THEN
        ALTER TABLE "home" RENAME COLUMN "group_me_url" TO "discord_url";
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'home'
          AND column_name = 'discord_url'
      ) THEN
        ALTER TABLE "home" RENAME COLUMN "discord_url" TO "group_me_url";
      END IF;
    END $$;
  `)
}
