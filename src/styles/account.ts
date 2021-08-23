import {Dimensions, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const {width, height} = Dimensions.get('screen');

const useStyles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.Pink400,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: 10,
    backgroundColor: colors.White200,
    width: '90%',
    height: 350,
    borderRadius: 15,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    borderRadius: 30,
    padding: 5,
    borderColor: colors.White400,
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  button: {
    padding: 2,
    borderRadius: 50,
    marginBottom: 10,
  },
  link: {
    marginTop: 10,
  },
});

export default useStyles;
