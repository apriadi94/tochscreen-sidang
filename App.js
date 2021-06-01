import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/stack/AppStack'
import {GlobalProvider} from './src/provider/GlobalProvider'


const App = () => { 
  return(
    <GlobalProvider>
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </GlobalProvider>
  )
};

export default App;
