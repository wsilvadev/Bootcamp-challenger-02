import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  ContainerMain: {
    backgroundColor: '#ddd',
    flex: 1,
  },
  ContainerInput: {
    flexDirection: 'row',
  },
  InputContainer: {
    backgroundColor: 'white',
    margin: 20,
    height: 40,
    width: '80%',
    fontSize: 15,
    borderRadius: 5,
    paddingLeft: 15,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  linhaView: {
    height: 1,
    backgroundColor: '#CCC',
    margin: 20,
    marginTop: -3,
  },
  ButtonInput: {
    backgroundColor: '#ddd',
    marginTop: 18,
  },
  textButton: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  ContainerFlexList: {
    backgroundColor: '#fff',
    height: 80,
    borderRadius: 5,
    margin: 15,
    marginTop: -1,
    flexDirection: 'row',
  },
  RenderText: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    width: '30%',
  },
  Imagen: {
    width: 50,
    height: 50,
    borderRadius: 30,
    margin: 10,
    marginTop: 15,
  },
  Icon: {
    width: 15,
    height: 15,
    margin: 10,
    marginTop: 35,
  },
  TitleApiName: {
    fontSize: 15,
  },
  ApiDescription: {
    fontSize: 10,
    opacity: 0.4,
  },
});
export default Styles;