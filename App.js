import {
	StyleSheet,
	SafeAreaView,
	Button,
	TextInput,
	Text,
	View,
	TouchableHighlight,
} from "react-native";
import { useState } from "react";
import { Pedagio } from "./model/Pedagio";
import PaginaInicial from "./components/PaginaInicial"
import ListaPedagios from "./components/ListaPedagios";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function App() {
	return(
		<NavigationContainer>
		 	<Stack.Navigator initialRouteName="PaginaInicial">
		 		<Stack.Screen name="PaginaInicial" component={PaginaInicial}/>
		 		 <Stack.Screen name="ListaPedagios" component={ListaPedagios}/>
		 	</Stack.Navigator>
		</NavigationContainer>
	)

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},
	horizontalContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
	},
	label: {
		fontSize: 18,
	},
	textInput: {
		borderWidth: 2,
		borderColor: "lightgray",
		padding: 2,
		borderRadius: 10,
		width: "40%",
	},
	title: {
		fontSize: 20,
		backgroundColor: "#004ede",
		width: "100%",
		textAlign: "center",
		color: "white",
		fontWeight: "bold",
		borderRadius: 8,
		padding: 20,
	},
	button: {
		fontWeight: "bold",
		backgroundColor: "#48465e",
		borderRadius: 8,
		padding: 10,
	},
	buttonText: {
		color: "white",
		fontSize: 15,
	},
});
