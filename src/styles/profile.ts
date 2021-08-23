import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

const useStyles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  left_component: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: colors.white,
    fontSize: 20,
  },
  input: {
    marginTop: 10,
    backgroundColor: colors.white,
    alignSelf: 'center',
    flex: 1,
    height: 50,
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  status_button: {
    flex: 0.1,
    padding: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default useStyles;
