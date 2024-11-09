import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
    return (
        <ScrollView>
            {tasks.map((task, index) => (
                <Pressable key={index}>
                    <View style={styles.task}>
                        <Text style={styles.taskText}>{task}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    task: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f9f9f9', // Light background color for better contrast
        borderRadius: 5,
        marginVertical: 5,
    },
    taskText: {
        fontSize: 18, // Increased font size for readability
    },
});

export default ToDoList;
