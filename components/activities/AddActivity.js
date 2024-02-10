import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddActivity({ onAdd }) {
  const [text, setText] = useState('');

  const handleChangeText = (text) => setText(text);
  const handleAddPress = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={text}
        placeholder="Add a new activity"
      />
      <Button title="Add" onPress={handleAddPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
    flex: 1,
  },
});