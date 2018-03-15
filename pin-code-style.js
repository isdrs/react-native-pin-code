import {Dimensions, StyleSheet, I18nManager} from 'react-native';

const {height, width} = Dimensions.get('window');

export const codePinStyles = StyleSheet.create({
  container: {
    height          : 150,
    width           : width - 30,
    backgroundColor : '#FFF'
  },
  containerPin: {
    width           : width - 30,
    //height          : 40,
    flexDirection   : I18nManager.isRTL ? 'row-reverse' : 'row',
    //justifyContent  : 'center',
    alignItems      : 'center',
    marginTop       : 20,
  },
  pin: {
    backgroundColor : '#F0F0F0',
    color: 'black',
    fontSize    : 40,
    fontWeight: 'bold',
    textAlign       : 'center',
    flex            : 1,
    padding: 12,
    margin      : 5,
    borderRadius    : 10,
  },
  pin2: {
    backgroundColor : '#7BE3E6',
    color: 'black',
    fontWeight: 'bold',
    fontSize    : 40,
    textAlign       : 'center',
    flex            : 1,
    margin      : 5,
    padding: 12,
    borderRadius    : 10,
  },
  text: {
    textAlign   : 'center', 
    color       : 'black', 
    fontSize    : 20, 
    marginTop   : 30
  },
  error: {
    textAlign   : 'center', 
    color       : 'red', 
    paddingTop  : 10
  }
});


