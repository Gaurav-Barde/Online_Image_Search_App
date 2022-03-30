import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

let numColumn = 1;
const $borderRadius = 5;
const $borderColor = '#ccc';
const $textColor = '#eee';

const ColumnsOption = ({setNumColumns}) => {
  const [showNumOptions, setShowNumOptions] = useState(false);
  const closeDropDown = () => {
    setShowNumOptions(false);
  };
  return (
    <TouchableWithoutFeedback onPress={closeDropDown}>
      <View>
        <View style={styles.dropDownContainer}>
          <TouchableOpacity
            style={styles.dropDownButton}
            activeOpacity={1}
            onPress={() => setShowNumOptions(!showNumOptions)}>
            <Text style={styles.dropDownText}>Number of Columns</Text>
            <Icon
              name="down"
              size={16}
              style={{
                color: $textColor,
                transform: !showNumOptions
                  ? [{rotate: '0deg'}]
                  : [{rotate: '180deg'}],
              }}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.numOptionsContainer,
              {display: showNumOptions ? 'flex' : 'none'},
            ]}>
            <TouchableOpacity
              style={styles.numOptionButton}
              onPress={() => setNumColumns(numColumn)}>
              <Text style={styles.numOptionText}>{numColumn}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numOptionButton}
              onPress={() => setNumColumns(numColumn + 1)}>
              <Text style={styles.numOptionText}>{numColumn + 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numOptionButton}
              onPress={() => setNumColumns(numColumn + 2)}>
              <Text style={styles.numOptionText}>{numColumn + 2}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ColumnsOption;

const styles = StyleSheet.create({
  dropDownContainer: {
    backgroundColor: '#126782',
    padding: 5,
    paddingVertical: 10,
  },
  dropDownButton: {
    borderWidth: 1,
    borderColor: $borderColor,
    width: '40%',
    padding: 5,
    alignSelf: 'center',
    borderRadius: $borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dropDownText: {
    textAlign: 'center',
    fontSize: 14,
    color: $textColor,
  },
  numOptionsContainer: {
    // marginVertical: 15,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    alignSelf: 'center',
    width: '40%',
    alignItems: 'center',
    marginBottom: 5,
    // borderWidth: 1,
    // borderColor: '#ccc',
  },
  numOptionButton: {
    width: '100%',
    padding: 5,
    // backgroundColor: '#eee',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: $borderColor,
    borderRadius: $borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numOptionText: {
    color: $textColor,
  },
});
