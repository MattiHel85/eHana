import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, Pressable } from "react-native"
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';

const Detail = ({ route }) => {
    const todoRef = firebase.firestore().collection('todos');
    const [textHeading, onChangeHeadingText] = useState(route.params.item.name);
    const navigation = useNavigation();

    const updateTodo = () => {
        if (textHeading && textHeading.length > 0) {
            todoRef
                .doc(route.params.item.id)
                .update({
                    heading: textHeading,
                }).then(() => {
                    navigation.navigate("Home")
                }).catch((error) => {
                    alert(error.message)
                })
        }

    }

    return (
        <View style={{
            backgroundColor: "#35DCD2",
            height: "100%"
        }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textfield}
                    onChangeText={onChangeHeadingText}
                    value={textHeading}
                    placeholder="New task name"
                />
                <Pressable
                    style={styles.buttonUpdate}
                    onPress={() => { updateTodo() }}>
                    <Text 
                        style={{
                            color: '#35DCD2',
                            fontWeight: '700'
                        }}>
                            UPDATE
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        marginLeft: 15,
        marginRight: 15,
        height: 100,
    },
    textfield: {
        marginBottom: 10,
        padding: 15,
        fontSize: 20,
        backgroundColor: "#F3F3F3",
        borderRadius: 50
    },
    buttonUpdate: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 10,
        backgroundColor: '#F3F3F3',
        // color: '#35DCD2',
    },
});

export default Detail