import React from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  colors
} from '../constants';

import EllipticalButton from './elliptical_button';

export default class RadioChoices extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initial || ''
    }
  }

  handleButton(label, value) {
    this.setState({ value });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange({ label, value});
    }
  }

  render() {
    const {
      choices
    } = this.props;

    return (
      <View style={[styles.buttonsContainer, this.props.buttonsContainerStyle]}>
        {
          choices && choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => this.handleButton(choice.label, choice.value)}
            >
              <EllipticalButton
                label={choice.label}
                style={[this.props.containerStyle, this.state.value === choice.value ? [styles.fillContainer, this.props.fillContainerStyle] : null]}
                textStyle={this.state.value === choice.value ? [styles.lightText, this.props.lightTextStyle] : null}
              />
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16
  },
  fillContainer: {
    backgroundColor: colors.green,
  },
  lightText: {
    color: colors.white,
  }
});

