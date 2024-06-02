import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import CategoryCard from './components/CategoryCard';
import TaskCard from './components/TaskCard';

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('./assets/exercise.png') },
  { id: '2', name: 'Study', tasks: 12, image: require('./assets/study.png') },
  { id: '3', name: 'Code', tasks: 10, image: require('./assets/code.png') },
  { id: '4', name: 'Cook', tasks: 8, image: require('./assets/cook.png') },
  { id: '5', name: 'Read', tasks: 7, image: require('./assets/read.png') },
  { id: '6', name: 'Meditate', tasks: 5, image: require('./assets/meditate.png') },
  { id: '7', name: 'Travel', tasks: 4, image: require('./assets/travel.png') },
  { id: '8', name: 'Shop', tasks: 6, image: require('./assets/shop.png') },
];

const tasks = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'Push Ups' },
  { id: '4', name: 'JavaScript Study' },
  { id: '5', name: 'Cooking Dinner' },
  { id: '6', name: 'Reading Book' },
  { id: '7', name: 'Yoga' },
  { id: '8', name: 'Grocery Shopping' },
  { id: '9', name: 'Project Meeting' },
  { id: '10', name: 'Client Call' },
  { id: '11', name: 'Gym Workout' },
  { id: '12', name: 'Blog Writing' },
  { id: '13', name: 'Video Editing' },
  { id: '14', name: 'Podcast Recording' },
  { id: '15', name: 'Design Mockup' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello, Devs</Text>
        <Image source={require('./assets/profile.png')} style={styles.profileIcon} />
      </View>
      <Text style={styles.subHeaderText}>14 tasks today</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('./assets/filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.categoriesContainer}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ScrollView>
      <Text style={styles.ongoingTaskHeader}>Ongoing Task</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  subHeaderText: {
    fontSize: 16,
    color: 'gray',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  ongoingTaskHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
