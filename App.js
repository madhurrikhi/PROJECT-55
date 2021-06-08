import * as React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import styles from './StyleSheet'

export default class App extends React.Component {
  async playSound(url) {
    try {
      Audio.setIsEnabledAsync(true);
      await Audio.Sound.createAsync(
        { uri:(url)  },
        { shouldPlay: true }
      );
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>

        <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: 'blue' }]}
            onPress = {()=>{var url ='http://soundbible.com/grab.php?id=2213&type=mp3'; this.playSound(url)}}>
            <Text style={styles.textStyle}>Sound 1</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: 'red' }]}
            onPress={()=>{
              var url="http://soundbible.com/grab.php?id=1260&type=mp3";
              this.playSound(url)}}>
            <Text style={styles.textStyle}>Sound 2</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: 'green' }]}
            onPress={()=>{
              var url = "http://soundbible.com/grab.php?id=907&type=mp3";
              this.playSound(url);
            }}>
            <Text style={styles.textStyle}>Sound 3</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: 'yellow' }]}
            onPress ={()=>{
              var url = "http://soundbible.com/grab.php?id=1256&type=mp3";
              this.playSound(url)}}>
            <Text style={styles.textStyle}>Sound 4</Text>
          </TouchableOpacity>
        </View>

          <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.buttonStyle, { backgroundColor: 'black' }]}
            onPress ={()=>{ Audio.setIsEnabledAsync(false);} }>
            <Text style={styles.textStyle}>Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

