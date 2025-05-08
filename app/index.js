// Importa dois hooks do React:
// - useEffect: para rodar algo quando a tela carregar
// - useState: para guardar dados e controlar o estado da tela
import { useEffect, useState } from "react";

// Importa componentes da interface do React Native
import { View, FlatList, SafeAreaView, StyleSheet, Text } from "react-native";

// Importa a biblioteca axios para buscar dados da internet
import axios from "axios";

//Importa o componente que mostra o card com dados do anime
import AnimeCard from "../components/AnimeCard.js";

// Importa o componente que mostra o "esqueleto" animado de carregamento
import SkeletonCard from "../components/SkeletonCard";

// Função principal que representa a tela inicial
export default function Home() {
  // Cria um estado chamado animes para guardar a lista de animes
  const [animes, setAnimes] = useState([]);

  // Cria um estado chamado loading para saber se os dados ainda estão carregando
  const [loading, setLoading] = useState(true);

  // useEffect é executado automaticamente assim que a tela abre
  useEffect(() => {
    // Espera 5 segundos para simular o carregamento e mostrar o SkeletonCard
    setTimeout(() => {
      // Faz uma requisição GET na API do Studio Ghibli
      axios
        .get("https://api.jikan.moe/v4/anime")
        .then((res) => setAnimes(res.data.data)) // Se der certo, guarda os dados no estado "animes"
        .catch((err) => console.error(err)) // Se der erro, mostra no console
        .finally(() => setLoading(false)); // Quando terminar, muda "loading" para false
    }, 5000); // Tempo de espera: 5 segundos
  }, []); // Executa só uma vez, quando a tela abrir

  return (
    // SafeAreaView evita que o conteúdo fique atrás da barra de status (notch)
    <SafeAreaView style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.header}>🎥 Animes Populares 🗾🇯🇵</Text>

      {/* Se estiver carregando, mostra os Skeletons */}
      {loading ? (
        <FlatList
          data={[1, 2, 3, 4, 5]} // Lista fictícia para mostrar 5 Skeletons
          keyExtractor={(item) => item.toString()} // Transforma o item (número) em texto
          renderItem={() => <SkeletonCard />} // Renderiza um card de esqueleto
          contentContainerStyle={styles.list} // Aplica o estilo na lista
        />
      ) : (
        // Se já carregou os dados, mostra os animes reais
        <FlatList
          data={animes} // Lista vinda da API
          keyExtractor={(item) => item.id} // Usa o ID do anime como chave
          renderItem={({ item }) => <AnimeCard anime={item} />} // Renderiza um AnimeCard passando o anime
          contentContainerStyle={styles.list} // Aplica o estilo na lista
        />
      )}
    </SafeAreaView>
  );
}

// Estilos visuais para os elementos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: "#121212", // Fundo escuro
    fontFamily: "Poppins", // Fonte Poppins
    paddingTop: 20, // Espaço em cima
  },
  header: {
    fontSize: 28, // Tamanho do título
    fontWeight: "bold", // Negrito
    color: "#ffffff", // Branco
    textAlign: "center", // Centralizado
    marginVertical: 16, // Espaço acima e abaixo
  },
  list: {
    paddingHorizontal: 16, // Espaço nas laterais
    paddingBottom: 20, // Espaço embaixo da lista
  },
});
