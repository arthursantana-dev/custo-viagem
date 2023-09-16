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

export default function PaginaInicial({ navigation }) {
	const [origem, setOrigem] = useState("");
	const [destino, setDestino] = useState("");

	const [distancia, setDistancia] = useState(0);
	const [consumo, setConsumo] = useState(0);
	const [valorCombustivel, setValorCombustivel] = useState(0);

	const [valorPedagio, setValorPedagio] = useState(0);

	const [listaPedagios, setlistaPedagios] = useState([]);

	function handleAdicionarPedagio() {
		const pedagio = new Pedagio(valorPedagio)
		setValorPedagio(0)
		setlistaPedagios([...listaPedagios, pedagio])

	}

	function handleIrParaListaPedagios() {
		navigation.navigate('ListaPedagios', {
			listaPedagios: listaPedagios,
			somarPedagios: somarPedagios
		})
	}

	function handleLimparEntradas() {
		Alert.alert("Limpar Dados", "Deseja mesmo limpar todos os dados?", [
			{text: "Sim", onPress: () => {
				setOrigem("")
				setDestino("")
				setDistancia(0)
				setConsumo(0)
				setValorCombustivel(0)
				setValorPedagio(0)
			}},
			{text: "Não"}
		])
	}

	function somarPedagios(lista) {
		let total = 0

		lista.map((pedagio) => {
			total += parseFloat(pedagio.valor)
		})

		return total
	}

	function handleCalcularCusto() {
		const litrosConsumidos = distancia * consumo
		const valorLitrosConsumidos = litrosConsumidos * valorCombustivel
		const valorTotal = valorLitrosConsumidos + somarPedagios(listaPedagios)

		Alert.alert("Custo da Viagem", `Sua viagem de ${origem} até ${destino}, que tem ${distancia}km, custará R$${parseFloat(valorTotal).toFixed(2)}`, ["OK"])
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Origem: </Text>
				<TextInput
					style={styles.textInput}
					placeholder={"São Paulo"}
					value={origem}
					onChangeText={(v) => setOrigem(v)}
				/>
			</View>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Destino: </Text>
				<TextInput
					style={styles.textInput}
					placeholder={"Curitiba"}
					value={destino}
					onChangeText={(e) => { setDestino(e) }}
				/>
			</View>
			<Text style={styles.title}>Consumo Carro</Text>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Distância: </Text>
				<TextInput
					value={distancia}
					style={styles.textInput}
					placeholder={"200"}
					onChangeText={(e) => { setDistancia(e) }}
				/>
			</View>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Consumo (km/l): </Text>
				<TextInput
					value={consumo}
					style={styles.textInput}
					placeholder={"4"}
					onChangeText={(e) => { setConsumo(e) }}
				/>
			</View>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Valor do Combustível: </Text>
				<TextInput
					value={valorCombustivel}
					style={styles.textInput}
					placeholder={"5.67"}
					onChangeText={(e) => { setValorCombustivel(e) }}
				/>
			</View>
			<Text style={styles.title}>Pedágio</Text>
			<View style={styles.horizontalContainer}>
				<Text style={styles.label}>Valor: </Text>
				<TextInput 
					style={styles.textInput} 
					value={valorPedagio} 
					onChangeText={valor => setValorPedagio(valor)} 
				/>
				<TouchableHighlight
					style={styles.button}
					onPress={() => { handleAdicionarPedagio() }}>
					<Text style={styles.buttonText}>Adicionar</Text>
				</TouchableHighlight>
			</View>
			<View style={styles.horizontalContainer}>
				<TouchableHighlight style={[styles.button, { flex: 1 }]} onPress={() => handleIrParaListaPedagios()}>
					<Text style={[styles.buttonText, { textAlign: 'center' }]}>Lista</Text>
				</TouchableHighlight>
			</View>
			<View style={[styles.horizontalContainer, { gap: 4 }]}>
				<TouchableHighlight style={[styles.button, { flex: 3 }]} onPress={() => handleCalcularCusto()}>
					<Text style={styles.buttonText}>Calcular</Text>
				</TouchableHighlight>
				<TouchableHighlight style={[styles.button, { flex: 1 }]} onPress={() => handleLimparEntradas()}>
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
