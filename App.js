import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import ActivityList from './components/activities/ActivitiesList';
import ActivityForm from './components/activities/ActivityForm';
import { saveActivities, loadActivities, getCurrentDayKey } from './services/activities/storage';

export default function App() {
  const [activities, setActivities] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadActivities(getCurrentDayKey()).then((loadedActivities) => {
      setActivities(loadedActivities);
    });
  }, []);

  const addActivity = (activity) => {
    const updatedActivities = [...activities, activity];
    setActivities(updatedActivities);
    saveActivities(getActivityKey(activity), activity);
  };

  const deleteActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
    saveActivities(getCurrentDayKey(), updatedActivities);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan</Text>
      <ActivityList activities={activities} onDelete={deleteActivity} />
      <ActivityForm
        onAddActivity={addActivity}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
