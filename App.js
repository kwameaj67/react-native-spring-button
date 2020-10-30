import React from 'react';
import { StyleSheet,View,} from 'react-native';
import Button from './Button'
const App = ()=> {
  return (
    <View style={styles.container}>
        <Button title ="Sign up"/>
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
