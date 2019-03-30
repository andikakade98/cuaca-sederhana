import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  //Button
} from 'react-native';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kota: '',
      cuaca: '-',
      deskripsi: '-',
      suhu: '-'
    };
  }
  render() {
    return (
      <View style={style.ContainerMain}>
        <View style={style.Head}>
          <Text style={style.textHead}>Perkiraan Cuacaz</Text>
        </View>
        <View style={style.Container}>
          <View style={style.inputan}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Masukkan Nama Kota"
            onChangeText={(kota) => this.setState({ kota })}
          />
          </View>
          <View style={style.hasil}>
            <Text>INI Hasil</Text>
          </View>
        </View>
        <View style={style.footer}>
          <Text style={style.textFooter}>PTI-UNDIKHSA</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  containerMain: {
    backgroundColor: '#B3E5FC',
    flex: 1,
  },
  Head: {
    backgroundColor: '#01579B',
    flex: 1,
    //alingItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  container: {
    backgroundColor: '#40C4FF',
    flex: 5
  },
  inputan: {
    flex: 2,
    backgroundColor: '#0091EA',
  },
  hasil: {
    flex: 3,
    backgroundColor: '#00E5FF',
  },
  footer: {
    flex: 0.7,
    backgroundColor: '#03A9F4',
    //alingItems: 'center',
    justifyContent: 'center',
  },
  textHead: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  textFooter: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
