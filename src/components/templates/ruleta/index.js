import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import Style from './styles';

const RuletaTemplate = ({
  wheelOptions,
  buttonPress,
  state,
  getWinnerFunction,
  onPressFunction,
}) => {
  return (
    <View style={Style.container}>
      {state.winnerIndex != null && (
        <Text style={Style.winnerText}>
          Tú ganas {participants[state.winnerIndex]}
        </Text>
      )}
      <StatusBar barStyle={'light-content'} />
      <WheelOfFortune
        options={wheelOptions}
        getWinner={(value, index) => {
          getWinnerFunction(value, index);
        }}
      />
      {!state.started && (
        <View style={Style.startButtonView}>
          <TouchableOpacity onPress={buttonPress} style={Style.startButton}>
            <Text style={Style.startButtonText}>Gira para ganar!</Text>
          </TouchableOpacity>
        </View>
      )}
      {state.winnerIndex != null && (
        <View style={Style.winnerView}>
          <TouchableOpacity
            onPress={() => {
              onPressFunction;
            }}
            style={Style.tryAgainButton}>
            <Text style={Style.tryAgainText}>INTENTAR OTRA VEZ</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default RuletaTemplate;
