import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {getPhotos} from './api/flickr';
import ColumnsOption from './src/components/ColumnsOption';
// import Header from './src/components/Header';
import PhotoGrid from './src/components/PhotoGrid';
import SearchBar from './src/components/SearchBar';

const App = () => {
  const [urlData, setUrlData] = useState([]);
  const [searchText, setSearchText] = useState('birds');
  const [numColumns, setNumColumns] = useState(1);

  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b7b8b2bb56a331e4effac477bcafb657&text=${searchText}&license=4&extras=owner_name,license&format=json&nojsoncallback=1`;

  useEffect(() => {
    getResponseData();
  }, [searchText]);

  const getResponseData = () => {
    getPhotos(getResponseData, url)
      .then(responseUrlData => {
        setUrlData(responseUrlData);
        setSearchText(searchText);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <SearchBar setSearchText={setSearchText} />
      <ColumnsOption setNumColumns={setNumColumns} />
      <PhotoGrid data={urlData} numColumns={numColumns} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  headLine: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: 'blue',
  },
});

export default App;
