import {
	Alert,
	StyleSheet,
	SafeAreaView,
	Button,
	TextInput,
	Text,
	View,
	TouchableHighlight,
} from "react-native";
import { useState } from "react";
import { Pedagio } from "../model/Pedagio";

export default function ListaPedagios({ route, navigation }) {
	const { listaPedagios, somarPedagios } = route.params;

	let totalPedagios = 0

	function handleAlertSomarPedagios() {
		totalPedagios = somarPedagios(listaPedagios)
		Alert.alert("Total de Pedágios",`O total de pedágios é de R$${parseFloat(totalPedagios).toFixed(2)}`, ["OK"])
	}

	return (<SafeAreaView style={styles.container}>
		<View>
			{listaPedagios.map((pedagio, indice) => {
				totalPedagios += pedagio.valor
				return <Text key={indice}>nº{indice + 1}: Valor: {pedagio.valor}</Text>
			})}
		</View>
		<TouchableHighlight style={styles.button} onPress={() => handleAlertSomarPedagios()}>
			<Text style={styles.buttonText}>Somar Pedágios</Text>
		</TouchableHighlight>
		<TouchableHighlight style={styles.button} onPress={() => navigation.goBack()}>
			<Text style={styles.buttonText}>Voltar para a Página Inicial</Text>
		</TouchableHighlight>
	</SafeAreaView>)
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
})