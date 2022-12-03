import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={{
      backgroundColor: "#35DCD2",
      height: "100%",
      paddingTop: "20%"
    }}
    >
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 20, fontWeight: "500"}}>
            {`About Us \n`}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 18}}>
            {`eHana was built by three students from Laurea UAS in Finland.
            \n\nThis app was built as part of the 'Building and Deploying Cross Platform Mobile Apps' course, and was built using React Native and Firebase.
            \n\nThe name comes from playing around on Google Translate. To do in Hawaiian is 'e hana' which also helped us decide on the turquoise theme for the app.
            `}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#F3F3F3',
      padding: 15,
      borderRadius: 15,
      margin: 0,
      marginHorizontal: 10,
      height: "70%"
  },
});

export default About