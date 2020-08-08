import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const Body = () => {
	return (
		<View style={styles.body}>
			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>Step One</Text>
				<Text style={styles.sectionDescription}>
					Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see your edits.
				</Text>
			</View>
			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>See Your Changes</Text>
				<Text style={styles.sectionDescription}>
					<ReloadInstructions />
				</Text>
			</View>
			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>Debug</Text>
				<Text style={styles.sectionDescription}>
					<DebugInstructions />
				</Text>
			</View>
			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>Learn More</Text>
				<Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
			</View>
			<LearnMoreLinks />
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
});

export default Body;
