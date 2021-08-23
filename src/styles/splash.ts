import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

const useStyles = StyleSheet.create({
  root: {
    width,
    height,
  },
});

export default useStyles;
