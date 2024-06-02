import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TaskCard = ({ task }) => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.taskName}>{task.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  taskName: {
    fontSize: 16,
  },
});

export default TaskCard;
