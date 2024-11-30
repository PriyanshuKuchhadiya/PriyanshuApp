import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ToDoList from '../components/ToDoList'; // Corrected path
import ToDoForm from '../components/ToDoForm'; // Corrected path
import MainLayout from '../layout/MainLayout'; // Corrected path

const HomeScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

    const addTask = (taskText) => {
        // Avoid adding empty or duplicate tasks
        if (taskText && !tasks.includes(taskText)) {
            setTasks([...tasks, taskText]);
        }
    };

    return (
        <MainLayout>
            <Text style={styles.title}>My To-Do List</Text>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
            <Button 
                title="Go to About" 
                onPress={() => navigation.navigate('About')} 
            />
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default HomeScreen;
