import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MainLayout from '../layout/MainLayout'; // Corrected path


const AboutScreen = () => {
    return (
        <MainLayout>
            <Text style={styles.text}>
                App: Priyanshu App{'\n'}
                Developer: Priyanshu Kuchhadiya{'\n'}
                Date: {new Date().toLocaleDateString()}
            </Text>
            <Text 
                style={styles.easterEgg} 
                onPress={() => Alert.alert('Easter Egg', 'You found a hidden feature!')}
            >
                Tap here for a surprise!
            </Text>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    easterEgg: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 10,
    },
});

export default AboutScreen;
