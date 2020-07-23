import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
	<Auth.Navigator
		screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#312e38' } }}
		initialRouteName="SignUp"
	>
		<Auth.Screen name="SignIn" options={{ headerTitle: 'Entrar' }} component={SignIn} />
		<Auth.Screen name="SignUp" options={{ headerTitle: 'Cadastrar' }} component={SignUp} />
	</Auth.Navigator>
);

export default AuthRoutes;
