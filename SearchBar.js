'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Image,
  Platform,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} = ReactNative;

var IS_RIPPLE_EFFECT_SUPPORTED = Platform.Version >= 21;

class SearchBar extends React.Component {
  render() {
    var background = IS_RIPPLE_EFFECT_SUPPORTED ?
      TouchableNativeFeedback.SelectableBackgroundBorderless() :
      TouchableNativeFeedback.SelectableBackground();
    return (
      <View style={styles.searchBar}>
        <TouchableNativeFeedback
            background={background}
            onPress={() => this.refs.input && this.refs.input.focus()}>
          <View>
            <Image
              source={require('image!android_search_white')}
              style={styles.icon}
            />
          </View>
        </TouchableNativeFeedback>
        <TextInput
          ref="input"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          onChange={this.props.onSearchChange}
          placeholder="Search a movie..."
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          onFocus={this.props.onFocus}
          style={styles.searchBarInput}
        />
        <ActivityIndicator
          animating={this.props.isLoading}
          color="white"
          size="large"
          style={styles.spinner}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    height: 56,
  },
  searchBarInput: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    height: 50,
    padding: 0,
    backgroundColor: 'transparent'
  },
  spinner: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
});

module.exports = SearchBar;
