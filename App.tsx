import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<StatusBar style="light" backgroundColor="#312e38" />
			<View style={{ backgroundColor: '#312e38', flex: 1, justifyContent: 'center' }}>
				<Routes />
			</View>
		</NavigationContainer>
	);
};

export default App;
