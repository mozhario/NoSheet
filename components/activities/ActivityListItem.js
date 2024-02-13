import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const formatTime = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
};

export const ActivityListItem = ({ activity, index, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpand} style={styles.container}>
      <View style={styles.activityItem}>
        <View style={styles.column}>
          <Text style={styles.timeText}>{formatTime(activity.startTime)}</Text>
          <Text style={styles.timeText}>{formatTime(activity.endTime)}</Text>
        </View>
        <View style={styles.activityColumn}>
          <Text>{activity.plannedActivity}</Text>
          <Text style={styles.actualActivityText}>{activity.actualActivity}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.depressionText}>{activity.depression}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.achievementText}>{activity.achievement}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.joyText}>{activity.joy}</Text>
        </View>
      </View>

      {isExpanded && (
        <View style={styles.expandedSection}>
          <Text style={styles.thoughtsText}>{activity.thoughts}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => {/* Implement edit functionality */}}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(index)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  column: {
    marginRight: 10,
    verticalAlign: 'middle',
  },
  activityColumn: {
    flex: 1,
    marginRight: 20,
  },
  timeText: {
    color: '#333',
  },
  actualActivityText: {
    color: '#666',
  },
  depressionText: {
    textShadowColor: 'rgba(0, 0, 0, 0.99)',
    textShadowOffset: {width: 0.3, height: 0.3},
    textShadowRadius: 1,
    fontSize: 18,
    color: 'red',
  },
  achievementText: {
    textShadowColor: 'rgba(0, 0, 0, 0.99)',
    textShadowOffset: {width: 0.3, height: 0.3},
    textShadowRadius: 1,
    fontSize: 18,
    color: 'gold',
  },
  joyText: {
    textShadowColor: 'rgba(0, 0, 0, 0.99)',
    textShadowOffset: {width: 0.3, height: 0.3},
    textShadowRadius: 1,
    fontSize: 18,
    color: 'green',
  },
  deleteText: {
    color: 'red',
    paddingLeft: 10,
  },

  expandedSection: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  thoughtsText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  editText: {
    marginRight: 10,
    color: 'blue',
  },
  deleteText: {
    color: 'red',
  },
});