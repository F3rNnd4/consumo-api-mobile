import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// Componente AnimeCard recebe um anime como prop
export default function AnimeCard({ anime }) {
  return (
    <TouchableOpacity style={styles.card}>
      {/* Imagem do anime */}
      <Image
        source={{ uri: anime.images.jpg.image_url }}
        style={styles.poster}
        resizeMode="cover"
      />

      <View style={styles.infoContainer}>
        {/* Título do anime */}
        <Text style={styles.title}>{anime.title}</Text>

        {/* Título em Japonês */}
        <Text style={styles.title}>
          {anime.title_japanese || "Título em japonês não disponível"}
        </Text>

        {/* Detalhes do anime */}
        <View style={styles.detailsRow}>
          <Text style={styles.year}>📅 {anime.year || "Ano desconhecido"}</Text>
          <Text style={styles.score}>⭐ {anime.score || "N/A"}</Text>
        </View>

        {/* Quantidade de episódios */}
        <Text style={styles.episodes}>
          🎬 Episódios: {anime.episodes || "?"}
        </Text>

        {/* Popularidade */}
        <Text style={styles.popularity}>
          🏆 Popularidade: {anime.popularity || "Desconhecida"}
        </Text>

        {/* Sinopse com limite de 3 linhas */}
        <Text style={styles.description} numberOfLines={2}>
          {anime.synopsis || "Sem descrição disponível."}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  poster: {
    width: "100%",
    height: 200,
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  year: {
    fontSize: 14,
    color: "#BBBBBB",
  },
  score: {
    fontSize: 14,
    color: "#FFDD00",
    fontWeight: "bold",
  },
  episodes: {
    fontSize: 14,
    color: "#BBBBBB",
    marginBottom: 8,
  },
  popularity: {
    fontSize: 14,
    color: "#BBBBBB",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#AAAAAA",
    lineHeight: 20,
  },
});
