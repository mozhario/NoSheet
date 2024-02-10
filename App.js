// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Міша привєт їбать!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AddActivity from './components/activities/AddActivity';
import ActivityList from './components/activities/ActivitiesList';

export default function App() {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  const deleteActivity = (index) => {
    setActivities(activities.filter((_, i) => i !== index));
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
