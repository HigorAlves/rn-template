import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { App } from '@Views/index';

const Stack = createStackNavigator();

export const PublicRoutes = (): React.ReactElement => (
	<Stack.Navigator>
		<Stack.Screen name='initialHome' component={App} />
	</Stack.Navigator>
);
