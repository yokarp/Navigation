import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Home
const HomeScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text>Bienvenido!</Text>
      <Button
        title="Ir a detalle"
        onPress={() => navigation.navigate('Detalle', {lala:'lele', user_id: 2})}
        />
      <StatusBar style="auto" />
    </View>
  )
}

//Detalle
const DetalleScreen = ({ navigation }) => {

  //Extraer de pantalla valor
  const lala = navigation.getParam('lala', 'valor por defecto')

  return(
    <View style={styles.container}>
      <Text>Soy la pantalla de detalle {lala} </Text>
        <Button
          title="Volver"
          onPress={() => navigation.goBack()}
          />
      <StatusBar style="auto" />
    </View>
  )
}

//Componente de navegación
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detalle: {
    screen: DetalleScreen
  }
} , { initialRouteName: 'Home'} );

//Exportación de componente
export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
