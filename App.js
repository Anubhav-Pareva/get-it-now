
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Signup from './screens/SignupScreen';
import RegistrationComplete from './components/signup-module/registrationComplete';


export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <Signup/>
      {/* <RegistrationComplete/> */}
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
