import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

const useStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
  },
  account_info: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    paddingLeft: 5,
  },
  username: {
    width: '100%',
    color: colors.white,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 24,
  },
  status: {
    color: colors.White300,
  },
  menu: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu_icons: {
    marginRight: 8,
  },
  info_moment: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 4,
  },
  moment: {
    fontSize: 14,
  },
  fab: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    backgroundColor: colors.Pink400,
  },
});

export default useStyles;
