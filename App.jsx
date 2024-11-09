import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

    const addTask = (taskText) => {
        // Avoid adding empty or duplicate tasks
        if (taskText && !tasks.includes(taskText)) {
            setTasks([...tasks, taskText]);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My To-Do List</Text>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default App;
