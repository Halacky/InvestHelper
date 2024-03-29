import { StyleSheet } from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';
//import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({

  TextBalance: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 40,
  },
  TextChangeUp: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#3BC9EA',
  },
  TextChangeDown: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#FF4564',
  },
  ViewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignContent: 'center',
  },
  ViewBalance: {
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    marginLeft: '10%',
    marginRight: '10%',
  },
  //-----------------------------
  TextOnCard: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#12142C',
  },
 
  ViewCard: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: '#A5ADB7',
  },
  //-----------------------------
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonTextFB: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
  //-----------------------------
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  //----------------------------
  TextOnCardMiddle: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#12142C',
    alignSelf: 'center',
  },
 //----------------------------
  
  TextProgressCount: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 20,
    color: '#12142C',
    alignSelf: 'center',
  },
  TextOnProgressCard: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#12142C',
    alignSelf: 'center',
  },
  //-------------------------

  //-------------------------
  
  ViewQuestion: {
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  TextQuestion: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: '#12142C',
  },
  ViewButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignContent: 'center',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  ButtonPrimary: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#5A45FF',
  },
  ButtonSecondary: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    borderColor: '#5A45FF',
  },
  //----------------------------
  containerFS: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  //------------------------------
  ViewTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    backgroundColor: '#12142C',
  },
  ViewMainContent: {
    alignSelf: 'stretch',
    alignContent: 'center',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  //------------------------------
  containerLS: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  
  
  forgotButton: {
    marginVertical: 35,
  },
  //------------------------
  
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  //------------------------
  TextLinkRight: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    color: '#5A45FF',
    textAlign: 'right',
  },
  TextFieldSimple: {
    marginBottom: 16,
  },
  keyboardAvoidingView: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  BigText: {
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#12142C',
  },
  ContainerHeader: {
    alignItems: 'center',
    marginTop: 10,
  },
  image100: {
    width: 100,
    height: 100,
  },
});

export default styles;