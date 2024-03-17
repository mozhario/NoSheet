import { Model } from '@nozbe/watermelondb';
import { field, date, text } from '@nozbe/watermelondb/decorators';


export class RecurringPattern extends Model {
    static table = 'recurring_patterns';

    @text('plannedActivity') plannedActivity;

    @text('startTime') startTime;
    @field('endTime') endTime;

    @field('mondayActive') mondayActive;
    @field('tuesdayActive') tuesdayActive;
    @field('wednesdayActive') wednesdayActive;
    @field('thursdayActive') thursdayActive;
    @field('fridayActive') fridayActive;
    @field('saturdayActive') saturdayActive;
    @field('sundayActive') sundayActive;
}
