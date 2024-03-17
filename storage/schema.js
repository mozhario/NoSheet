import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const NoSheetSchema = appSchema({
  version: 1, // Increment this value whenever you change the schema
  tables: [
    tableSchema({
      name: 'activities',
      columns: [
        { name: 'date', type: 'string' },
        { name: 'startTime', type: 'string' },
        { name: 'endTime', type: 'string' },
        { name: 'plannedActivity', type: 'string' },
        { name: 'actualActivity', type: 'string', isOptional: true },
        { name: 'depression', type: 'number', isOptional: true },
        { name: 'achievement', type: 'number', isOptional: true },
        { name: 'joy', type: 'number', isOptional: true },
        { name: 'thoughts', type: 'string', isOptional: true },
      ],
    }),
    tableSchema({
      name: 'recurring_patterns',
      columns: [
        { name: 'plannedActivity', type: 'string' },
        { name: 'startTime', type: 'string' },
        { name: 'endTime', type: 'string' },
        { name: 'mondayActive', type: 'boolean' },
        { name: 'tuesdayActive', type: 'boolean' },
        { name: 'wednesdayActive', type: 'boolean' },
        { name: 'thursdayActive', type: 'boolean' },
        { name: 'fridayActive', type: 'boolean' },
        { name: 'saturdayActive', type: 'boolean' },
        { name: 'sundayActive', type: 'boolean' },
      ],
    }),
  ],
});
