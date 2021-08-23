import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

const useStyles = StyleSheet.create({
  root: {
    shadowColor: colors.Black600,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    backgroundColor: colors.Red500,
    padding: 10,
    width: '60%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backgroundColor: 'brown',
    width: 200,
    padding: 10,
    height: 400,
  },

  drawer_content: {
    backgroundColor: colors.Pink400,
    height: '40%',
    padding: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1000,
    borderRadius: 5,
  },
});

export default useStyles;
