import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const PhotoGrid = ({data, numColumns}) => {
  return (
    <View>
      <FlatList
        style={{
          width: deviceWidth,
        }}
        showsVerticalScrollIndicator={false}
        key={numColumns}
        numColumns={numColumns}
        data={data}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View
            style={[
              styles.item,
              {
                width: deviceWidth / numColumns,
                height: deviceWidth / numColumns,
              },
            ]}>
            <Image
              style={styles.image}
              source={{
                uri: item,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default PhotoGrid;

const styles = StyleSheet.create({
  item: {
    padding: 2,
    // width: deviceWidth / {numColumns},
    // height: deviceWidth / {numColumns},
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
