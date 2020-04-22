import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native';

interface Style {
  container: ViewStyle;
  scoreContainer: ViewStyle;
  toggleButtonsContainer: ViewStyle;
  toggleButton: ViewStyle;
  restartGame: ViewStyle;
  text: TextStyle;
  scoreText: TextStyle;
  buttonText: TextStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  scoreContainer: {
    position: 'absolute',
    right: 50,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  toggleButtonsContainer: {
    top: 10,
    left: 50,
    flexDirection: 'row',
  },
  toggleButton: {
    padding: 10,
    margin: 3,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  restartGame: {
    zIndex: 1,
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  text: { color: 'black', fontWeight: 'bold', fontSize: 13 },
  scoreText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  buttonText: { color: 'black', fontWeight: 'bold', fontSize: 13 },
});

const TopBar = ({
  toggleInventory,
  toggleChat,
  score,
  restartGame,
  playerCoords,
}) => {
  return (
    <>
      <View style={styles.toggleButtonsContainer}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => toggleInventory()}>
          <Text style={styles.buttonText}>Inventory</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => toggleChat()}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
        <Text>
          {playerCoords.position.x},{playerCoords.position.y}
        </Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Kill: {score}</Text>
        <TouchableOpacity
          onPress={() => restartGame()}
          style={styles.restartGame}>
          <Text style={styles.text}>R</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TopBar;
