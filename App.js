import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Paina nappia testaaksesi alerttia!</Text>
      <Button onPress={buttonPressed} title="Nappi" />
      <StatusBar style="auto" />
    </View>
  );
}

const buttonPressed = () => {
  Alert.alert("Nappi painettu :)");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
});
