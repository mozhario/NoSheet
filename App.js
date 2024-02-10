import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AddActivity from './components/activities/AddActivity';
import ActivityList from './components/activities/ActivitiesList';
import { saveActivities, loadActivities } from './services/activities/storage';

export default function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadActivities().then((loadedActivities) => {
      setActivities(loadedActivities);
    });
  }, []);

  const addActivity = (activity) => {
    const updatedActivities = [...activities, activity];
    setActivities(updatedActivities);
    saveActivities(updatedActivities);
  };

  const deleteActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
    saveActivities(updatedActivities);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity List</Text>
      <AddActivity onAdd={addActivity} />
      <ActivityList activities={activities} onDelete={deleteActivity} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
