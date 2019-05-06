import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Styles/GridListRowStyles';
import { Images } from '../Themes';


const GridListRow = (item) => {
  return (
    <View>
      <ImageBackground
        style={styles.image}
        loadingIndicatorSource={Images.loadImage}
        source={{ uri: item.thumbnailUrl }}
      >
        <View style={styles.labelContainer}>
          <Text numberOfLines={1} style={styles.label}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>);
};

export default GridListRow;
