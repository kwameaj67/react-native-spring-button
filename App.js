import React from 'react';
import { StyleSheet,View,} from 'react-native';
import Button from './Button'
export default class Button extends React.Component {
 render(){
  return (
    <View style={styles.container}>
        <Button title ="Sign up"/>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
