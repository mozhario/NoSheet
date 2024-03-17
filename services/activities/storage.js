import { database } from '../../storage';
import { Q } from '@nozbe/watermelondb';

export const createActivity = async (activityDetails) => {
  await database.action(async () => {
    const activitiesCollection = database.collections.get('activities');
    await activitiesCollection.create((activity) => {
      activity.plannedActivity = activityDetails.plannedActivity;
      activity.actualActivity = activityDetails.actualActivity;
      activity.date = activityDetails.date;
      activity.startTime = activityDetails.startTime;
      activity.endTime = activityDetails.endTime;
      activity.depression = activityDetails.depression;
      activity.achievement = activityDetails.achievement;
      activity.joy = activityDetails.joy;
      activity.thoughts = activityDetails.thoughts;
    });
  });
};

export const updateActivity = async (activityDetails) => {
  await database.action(async () => {
    const activity = await database.collections.get('activities').find(activityDetails.id);
    await activity.update((activity) => {
      activity.plannedActivity = activityDetails.plannedActivity;
      activity.actualActivity = activityDetails.actualActivity;
      activity.date = activityDetails.date;
      activity.startTime = activityDetails.startTime;
      activity.endTime = activityDetails.endTime;
      activity.depression = activityDetails.depression;
      activity.achievement = activityDetails.achievement;
      activity.joy = activityDetails.joy;
      activity.thoughts = activityDetails.thoughts;
    });
  });
}

export const deleteActivity = async (activityId) => {
  await database.action(async () => {
    const activity = await database.collections.get('activities').find(activityId);
    await activity.destroyPermanently(); // TODO: soft delete?
  });
}

export const getActivitiesForDay = async (date) => {
  const activitiesCollection = database.collections.get('activities');
  return await activitiesCollection.query(Q.where('date', date)).fetch();
};


export const createRecurringPattern = async (recurringPatternDetails) => {
  await database.action(async () => {
    const recurringPatternsCollection = database.collections.get('recurring_patterns');
    await recurringPatternsCollection.create((recurringPattern) => {
      recurringPattern.plannedActivity = recurringPatternDetails.plannedActivity;
      recurringPattern.startTime = recurringPatternDetails.startTime;
      recurringPattern.endTime = recurringPatternDetails.endTime;
      recurringPattern.mondayActive = recurringPatternDetails.mondayActive;
      recurringPattern.tuesdayActive = recurringPatternDetails.tuesdayActive;
      recurringPattern.wednesdayActive = recurringPatternDetails.wednesdayActive;
      recurringPattern.thursdayActive = recurringPatternDetails.thursdayActive;
      recurringPattern.fridayActive = recurringPatternDetails.fridayActive;
      recurringPattern.saturdayActive = recurringPatternDetails.saturdayActive;
      recurringPattern.sundayActive = recurringPatternDetails.sundayActive;
    });
  });
};

export const updateRecurringPattern = async (recurringPatternDetails) => {
  await database.action(async () => {
    const recurringPattern = await database.collections.get('recurring_patterns').find(recurringPatternDetails.id);
    await recurringPattern.update((recurringPattern) => {
      recurringPattern.plannedActivity = recurringPatternDetails.plannedActivity;
      recurringPattern.startTime = recurringPatternDetails.startTime;
      recurringPattern.endTime = recurringPatternDetails.endTime;
      recurringPattern.mondayActive = recurringPatternDetails.mondayActive;
      recurringPattern.tuesdayActive = recurringPatternDetails.tuesdayActive;
      recurringPattern.wednesdayActive = recurringPatternDetails.wednesdayActive;
      recurringPattern.thursdayActive = recurringPatternDetails.thursdayActive;
      recurringPattern.fridayActive = recurringPatternDetails.fridayActive;
      recurringPattern.saturdayActive = recurringPatternDetails.saturdayActive;
      recurringPattern.sundayActive = recurringPatternDetails.sundayActive;
    });
  });
}

export const deleteRecurringPattern = async (recurringPatternId) => {
  await database.action(async () => {
    const recurringPattern = await database.collections.get('recurring_patterns').find(recurringPatternId);
    await recurringPattern.destroyPermanently(); // TODO: soft delete?
  });
}
