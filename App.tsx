import React from 'react';
import {ApolloProvider} from '@apollo/client';
import client from './src/apollo/client';
import RootNavigation from './src/navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
