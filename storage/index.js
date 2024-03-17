import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { NoSheetSchema } from './schema';
import { Activity } from '../models/activity';
import { RecurringPattern } from '../models/recurringPattern';

const adapter = new SQLiteAdapter({
  dbName: 'NoSheetDb',
  schema: NoSheetSchema,
});

export const database = new Database({
  adapter,
  modelClasses: [
    Activity,
    RecurringPattern,
  ],
  actionsEnabled: true,
});
