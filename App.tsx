import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { RobotoSlab_400Regular, RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({
		RobotoSlab_400Regular,
		RobotoSlab_500Medium,
		Roboto_400Regular,
		Roboto_500Medium,
		Ubuntu_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

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
