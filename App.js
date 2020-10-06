import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
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
        onPress={() => navigation.navigate('Detalle', { user_id: 2})}
        />
      <StatusBar style="auto" />
    </View>
  )
}

HomeScreen.navigationOptions = {
  title: 'Inicio',
  /*headerRight: () => (
    <Button
      onPress={() => alert('Lalalalala')}
      title="Soy lala"
      color='#222' />
  ),*/
  /*headerStyle: {
    backgroundColor: '#ffeecc'
  },
  headerTintColor: '#222',
  headerTitleStyle: {
    fontWeight:'900'
  }*/
}

//Detalle
const DetalleScreen = ({ navigation }) => {
  const [cont, setCont] = useState(0)
  const incrementar = () => setCont(cont + 1)
  useEffect(() => {
    navigation.setParams({ incrementar })
  }, [cont])
  //Extraer de pantalla valor
  const lala = navigation.getParam('lala', 'valor por defecto')

  return(
    <View style={styles.container}>
      <Text>Soy la pantalla de detalle {cont} </Text>
        <Button
          title="Volver"
          onPress={() => navigation.setParams({ title: 'Usuario 1' })}
          />
      <StatusBar style="auto" />
    </View>
  )
}

//Navigator
DetalleScreen.navigationOptions = ({ navigation, navigationOptions }) => {
  return{
    title: navigation.getParam('title', 'Cargando...'),
    headerRight: () => (
      <Button
        onPress={navigation.getParam('incrementar')}
        title="Más uno"
        color='#555' />
    ),
    //headerTintColor: '#5e5'
  }
}

//Componente de navegación
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detalle: {
    screen: DetalleScreen
  }
} , { initialRouteName: 'Home',
      defaultNavigationOptions:{
        headerStyle: {
          backgroundColor: '#ffeecc'
        },
        headerTintColor: '#555',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
} );

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
