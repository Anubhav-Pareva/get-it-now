
import { StyleSheet, View } from 'react-native';
import Signup from './screens/SignupScreen';
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      <Signup/>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:8
  },
});
