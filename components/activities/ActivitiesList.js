import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function ActivityList({ activities, onDelete }) {
  return (
    <ScrollView style={styles.container}>
      {activities.map((activity, index) => (
        <View key={index} style={styles.activity}>
          <Text style={styles.activityText}>{activity}</Text>
          <TouchableOpacity onPress={() => onDelete(index)}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  activity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  activityText: {
    fontSize: 18,
  },
  deleteText: {
    color: 'red',
  },
});