import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import { Animated, Easing } from 'react-native'

import styles from './styles'
import Animations from '../../constants/lottie'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      progress: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start()
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Home</Text>
        <LottieView source={Animations.LOGO_ANIMATION} progress={this.state.progress} />
      </View>
    )
  }
}

export default Home
