import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { App } from '@/Views';

export default function Router(): React.ReactElement {
	return (
		<NavigationContainer>
			<App />
		</NavigationContainer>
	);
}
