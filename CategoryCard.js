import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const CategoryCard = ({ category }) => {
  return (
    <View style={styles.categoryCard}>
      <Image source={category.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{category.name}</Text>
      <Text style={styles.categoryTasks}>{category.tasks} Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryName: {
    fontSize: 16,
    marginTop: 5,
  },
  categoryTasks: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CategoryCard;
