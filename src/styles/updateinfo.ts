import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

const useStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
  },
  fields_container: {
    padding: 20,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  field_input: {
    width: '100%',
    backgroundColor: colors.white,
    borderColor: colors.White300,
    height: 50,
    marginBottom: 10,
  },
  field_label: {
    textAlign: 'left',
    width: '100%',
    marginBottom: 5,
  },
});

export default useStyles;
