import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';

const ActivityForm = ({ onAddActivity }) => {
  const [visible, setVisible] = useState(false);
  const [newActivity, setNewActivity] = useState({
    startTime: new Date(),
    endTime: new Date(),
    plannedActivity: '',
    actualActivity: '',
    depression: '',
    achievement: '',
    joy: '',
    thoughts: '',
  });

  const handleInputChange = (field, value) => {
    setNewActivity({ ...newActivity, [field]: value });
  };

  const handleTimeChange = (field, event, selectedTime) => {
    const currentTime = selectedTime || newActivity[field];
    handleInputChange(field, currentTime);
  };

  const handleSubmit = () => {
    onAddActivity(newActivity);
    // Hide modal after submission
    setVisible(false);
    // Reset form
    setNewActivity({
      startTime: activity?.startTime || new Date(),
      endTime: activity?.endTime || new Date(),
      plannedActivity: activity?.plannedActivity || '',
      actualActivity: activity?.actualActivity || '',
      depression: activity?.depression || 0,
      achievement: activity?.achievement || 0,
      joy: activity?.joy || 0,
      thoughts: activity?.thoughts || '',
    });
  };

  return (
    <View>
      <Button title="+" onPress={() => setVisible(true)} />
      <Modal visible={visible} animationType="slide" onRequestClose={() => setVisible(false)}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <View style={styles.dateTimeRow}>
              <DateTimePicker
                value={newActivity.startTime}
                mode="time"
                display="default"
                onChange={(event, selectedTime) => handleTimeChange('startTime', event, selectedTime)}
                is24Hour={true}
                style={styles.dateTimePicker}
              />
              <Text styles={{marginHorizontal: 30, width: 50}}>-</Text>
              <DateTimePicker
                value={newActivity.endTime}
                mode="time"
                display="default"
                onChange={(event, selectedTime) => handleTimeChange('endTime', event, selectedTime)}
                is24Hour={true}
                style={styles.dateTimePicker}
              />
            </View>
            <TextInput
              placeholder="Planned Activity"
              value={newActivity.plannedActivity}
              onChangeText={(text) => handleInputChange('plannedActivity', text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Actual Activity"
              value={newActivity.actualActivity}
              onChangeText={(text) => handleInputChange('actualActivity', text)}
              style={styles.input}
            />
            
            <View style={styles.divider}/>

            <Text>Depression: {newActivity.depression}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={newActivity.depression}
              onValueChange={(value) => handleInputChange('depression', value)}
            />
            <Text>Achievement: {newActivity.achievement}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={newActivity.achievement}
              onValueChange={(value) => handleInputChange('achievement', value)}
            />
            <Text>Joy: {newActivity.joy}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              step={1}
              value={newActivity.joy}
              onValueChange={(value) => handleInputChange('joy', value)}
            />
            <TextInput
              placeholder="Any thoughts?"
              value={newActivity.thoughts}
              onChangeText={(text) => handleInputChange('thoughts', text)}
              style={styles.input}
            />
            <View style={styles.buttonRow}>
              <Button title="Cancel" onPress={() => setVisible(false)} />
              <Button title="Submit" onPress={handleSubmit} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dateTimeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  smallInput: {
    width: '30%',
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  slider: {
    width: '100%',
    height: 20,
    marginVertical: 5,
  },
  slider_red: {
    minimumTrackTintColor: 'white',
    maximumTrackTintColor: 'red',
  },
  slider_yellow: {
    minimumTrackTintColor: 'white',
    maximumTrackTintColor: 'yellow',
  },
  slider_yellow: {
    minimumTrackTintColor: 'white',
    maximumTrackTintColor: 'green',
  },
  label: {
    width: '100%',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
  },
  divider: {
    backgroundColor: 'light-grey',
    height: 1, // Set the height of the divider
    marginHorizontal: 5,
    marginVertical: 30,
    width: '100%',
  },
  dash: {
    fontSize: 18,
    height: '100%',
    textAlignVertical: 'center',
    paddingHorizontal: 10,
  },
});

export default ActivityForm;
