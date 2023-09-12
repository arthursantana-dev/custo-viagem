import { StatusBar } from "expo-status-bar";
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

export default function App() {
	const [origem, setOrigem] = useState("");
	const [destino, setDestino] = useState("");

	const [distancia, setDistancia] = useState(0);
	const [consumo, setConsumo] = useState(0);
	const [valorCombustivel, setValorCombustivel] = useState(0);

	const [valorPedagio, setValorPedagio] = useState(0);

	const [listaPedagios, setlistaPedagios] = useState([]);

	const handleAdicionarPedagio = () => {
		console.log(pedagio);
		const pedagio = new Pedagio(valorPedagio)
		setlistaPedagios([...listaPedagios, pedagio])
		console.log(listaPedagios);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Origem: </Text>
				<TextInput style={styles.textInput} onChangeText={(e) => { setOrigem(e) }} value={origem} />
			</View>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Destino: </Text>
				<TextInput style={styles.textInput} onChangeText={(e) => { setDestino(e) }} value={destino} />
			</View>
			<Text style={styles.title}>Consumo Carro</Text>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Distância: </Text>
				<TextInput style={styles.textInput} onChangeText={(e) => { setDistancia(e) }} value={distancia} />
			</View>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Consumo: </Text>
				<TextInput style={styles.textInput} onChangeText={(e) => { setConsumo(e) }} value={consumo} />
			</View>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Valor do Combustível: </Text>
				<TextInput style={styles.textInput} onChangeText={(e) => { setValorCombustivel(e) }} value={valorCombustivel} />
			</View>
			<Text style={styles.title}>Pedágio</Text>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Valor: </Text>
				<TextInput style={styles.textInput} onChangeText={(e) => { setValorPedagio(e) }} value={valorPedagio} />
				<TouchableHighlight style={styles.button} onPress={() => handleAdicionarPedagio()}>
					<Text style={styles.buttonText}>Adicionar</Text>
				</TouchableHighlight>
			</View>
			<View style={styles.horizontalContainer}>
				<TouchableHighlight style={[styles.button, { flex: 1 }]}>
					<Text style={[styles.buttonText, { textAlign: 'center' }]}>Lista</Text>
				</TouchableHighlight>
			</View>
			<View style={[styles.horizontalContainer, { gap: 4 }]}>
				<TouchableHighlight style={[styles.button, { flex: 3 }]}>
					<Text style={styles.buttonText}>Calcular</Text>
				</TouchableHighlight>
				<TouchableHighlight style={[styles.button, { flex: 1 }]}>
					<Text style={styles.buttonText}>Limpar</Text>
				</TouchableHighlight>
			</View>
		</SafeAreaView>
	);
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
