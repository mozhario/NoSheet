import { Model } from '@nozbe/watermelondb';
import { field, date, text } from '@nozbe/watermelondb/decorators';

export class Activity extends Model {
    static table = 'activities';

    @date('date') date;
    @text('startTime') startTime;
    @text('endTime') endTime;

    @text('plannedActivity') plannedActivity;
    @text('actualActivity') actualActivity;

    @field('depression') depression;
    @field('achievement') achievement;
    @field('joy') joy;
}
