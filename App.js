import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'chat', title: 'CHAT' },
      { key: 'status', title: 'STATUS' },
      { key: 'call', title: 'CALL' },
    ],
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#054d44'}/>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            chat: FirstRoute,
            status: SecondRoute,
            call: ThirdRoute,
          })}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#dee5e4' }}
              style={{ backgroundColor: '#075e54' }}
            />
          }
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});