import 'react-native-gesture-handler'
import React from 'react'
import { View, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

//import Padrao from './estilo/Padrao'

const FlexMenu = () => <View><Flex /></View>
const ListaFlexMenu = () => <View><ListaFlex /></View>
const TextoSincronizadoMenu = () => <View><TextoSincronizado /></View>
const AvoMenu = () => <View><Avo nome='João' sobrenome='Silva' /></View>
const EventoMenu = () => <View><Evento /></View>
const ValidarPropsMenu = () => <View><ValidarProps ano={18} /></View>
const PlataformasMenu = () => <View><Plataformas /></View>
const ContadorMenu = () => <View><Contador numeroInicial={1000} /></View>
const MegaSenaMenu = () => <View><MegaSena numero={8} /></View>
const InverterMenu = () => <View><Inverter texto='React Nativo!' /></View>
const ParImparMenu = () => <View><ParImpar numero={30} /></View>
const SimplesMenu = () => <View><Simples texto='Flexível!!!' /></View>

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Página Inicial">
      <Drawer.Screen name="Flex" component={FlexMenu} />
      <Drawer.Screen name="Lista Flex" component={ListaFlexMenu} />
      <Drawer.Screen name="Texto Sincronizado" component={TextoSincronizadoMenu} />
      <Drawer.Screen name="Avô" component={AvoMenu} />
      <Drawer.Screen name="Evento" component={EventoMenu} />
      <Drawer.Screen name="Validar Props" component={ValidarPropsMenu} />
      <Drawer.Screen name="Plataformas" component={PlataformasMenu} />
      <Drawer.Screen name="Contador" component={ContadorMenu} />
      <Drawer.Screen name="Mega Sena" component={MegaSenaMenu} />
      <Drawer.Screen name="Inverter" component={InverterMenu} />
      <Drawer.Screen name="Par & Ímpar" component={ParImparMenu} />
      <Drawer.Screen name="Simples" component={SimplesMenu} />
    </Drawer.Navigator>
  )
}

export default App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  )
}