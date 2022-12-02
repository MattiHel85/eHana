import { View, Text, FlatList, StyleSheet, Pressable, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tasks from './Screens/Tasks';
import Detail from './Screens/Detail';
import Home from './Screens/Home';
import About from './Screens/About';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator()

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#F3F3F3',
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#35DCD2",
          }
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'eHana'
          }}
        />
        <Stack.Screen
          name='About'
          component={About}
          options={{
            title: 'eHana'
          }}
        />
        <Stack.Screen
          name='Tasks'
          component={Tasks}
          options={{
            title: 'eHana'
          }}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={{
            title: 'eHana'
          }}
        />
      </Stack.Navigator>
      <View>
        <Text>
          Footer
        </Text>
      </View>
    </NavigationContainer>
  );

}


export default App
