import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/FlatListRowStyles';

const FlatListRow = (item) => {
  // eslint-disable-next-line no-restricted-syntax
  console.log('FlatListRow details');
  // eslint-disable-next-line no-restricted-syntax
  console.log(item);
  return (
    <View style={styles.row}>
      <Text numberOfLines={1} style={styles.titleTxt}>{item.title}</Text>
      <Text numberOfLines={2} style={styles.bodyTxt}>{item.body}</Text>            
    </View>);
};

export default FlatListRow;
