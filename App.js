import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Home
const HomeScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text>Bienvenido!</Text>
      <Button
        title="Ir a detalle"
        onPress={() => navigation.openDrawer()}
        />
      <StatusBar style="auto" />
    </View>
  )
}

HomeScreen.navigationOptions = {
  title: 'Inicio',
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
          onPress={() => navigation.navigate('modal')}
          />
      <StatusBar style="auto" />
    </View>
  )
}

//Navigator
DetalleScreen.navigationOptions = ({ navigation }) => {
  return{
    title: navigation.getParam('title', 'Cargando...'),
    headerRight: () => (
      <Button
        onPress={navigation.getParam('incrementar')}
        title="Más uno"
        color='#555' />
    ),
  }
}

//Componente de navegación
const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Detalle: {
    screen: DetalleScreen
  }
} , { initialRouteName: 'Home',

} );

const RootStack = createStackNavigator({
  Main: AppNavigator,
  MiModal: () => <Text>lALALAL</Text>
},{
  mode: 'modal',
  headerMode: 'none',
})

//Exportación de componente
export default createAppContainer(RootStack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
