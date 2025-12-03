import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './telas/Home';
import Perfil from './telas/Perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>


      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ title: 'Página Inicial' }}
        />
        
        <Stack.Screen 
          name="Perfil" 
          component={Perfil}
          options={{ title: 'Meu Perfil' }}
        />
      </Stack.Navigator>


    </NavigationContainer>  


  );
}