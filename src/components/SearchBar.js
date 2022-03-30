import {transform} from '@babel/core';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = ({setSearchText}) => {
  const [inputText, setInputText] = useState('');

  const submitSearch = () => {
    setSearchText(inputText);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search Images"
          onChangeText={text => setInputText(text)}
          value={inputText}
          spellCheck={false}
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.icon} onPress={() => submitSearch()}>
          <Icon name="search1" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    // marginTop: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    // fontWeight: '400',
    color: '#000',
    padding: 5,
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 15,
    // bottom: '35%',
  },
});
