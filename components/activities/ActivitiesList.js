import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ActivityListItem } from './ActivityListItem';

export default function ActivityList({ activities, onDelete }) {
  return (
    <ScrollView style={styles.container}>
      {activities
        .slice()
        .sort((a, b) => new Date(a.startTime) - new Date(b.startTime))
        .map((activity, index) => (
          <ActivityListItem
            key={index}
            activity={activity}
            onDelete={onDelete}
            index={index}
          />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});