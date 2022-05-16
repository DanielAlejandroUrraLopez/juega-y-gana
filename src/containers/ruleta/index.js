import React, {Component} from 'react';
import RuletaTemplate from '../../components/templates/ruleta';

const participants = [
  '%10',
  '%20',
  '%30',
  '%40',
  '%50',
  '%60',
  '%70',
  '%90',
  'GRATIS',
];
class RuletaContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
    };
    this.child = null;
  }

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };

  getWinnerFunction = (v, i) => {
    this.setState({winnerValue: v, winnerIndex: i});
  };

  onPressFunction = () => {
    this.setState({winnerIndex: null});
    this.child._tryAgain();
  };

  render() {
    const wheelOptions = {
      rewards: participants,
      knobSize: 30,
      borderWidth: 5,
      borderColor: '#fff',
      innerRadius: 30,
      duration: 6000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('../../assets/knob.png'),
      onRef: ref => (this.child = ref),
    };
    return (
      <>
        <RuletaTemplate
          wheelOptions
          buttonPress
          state
          getWinnerFunction
          onPressFunction
        />
      </>
    );
  }
}
export default RuletaContainer;
