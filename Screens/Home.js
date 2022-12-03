import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: "#35DCD2",
      height: "100%",
      paddingTop: "50%"
    }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.button}>
            + ADD TASK
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.button}>
            + ABOUT US
          </Text>
        </TouchableOpacity>
      </View>      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },

  button: {
    width: 150,
    backgroundColor: "#F3F3F3",
    margin: 20,
    padding: 15,
    textAlign: "center",
    borderRadius: 50,
    fontSize: 18,
    fontWeight: "bold"
  }
})

export default Home