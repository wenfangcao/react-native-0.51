import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Image,
  Navigator,
  View,
  Text,
  StylesSheet,
  TouchableOpacity
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomeComponent from './component/Home.js';
import MineComponent from './component/Mine.js';

export default class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: "home"}
  }
  render() {
    return (
    <TabNavigator>
        <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            selectedTitleStyle={{color:"red"}}//设置tab标题颜色
            renderIcon={() => <Image style={styles.icon} source={require('./img/4-project-grey.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon]} source={require('./img/3-project-red.png')} />}//设置图标选中颜色
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.pages1}>
                <HomeComponent/>
            </View>
        </TabNavigator.Item>
        <TabNavigator.Item
            selected={this.state.selectedTab === 'shebei'}
            title="个人中心"
            selectedTitleStyle={{color:"red"}}
            badgeText="1"
            renderIcon={() => <Image style={styles.icon} source={require('./img/5-mine-grey.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon]} source={require('./img/5-mine-red.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'shebei' })}>
            <View style={styles.pages2}>
                <MineComponent/>
            </View>
        </TabNavigator.Item>
        {/* <TabNavigator.Item
            selected={this.state.selectedTab === 'hetong'}
            title="合同管理"
            selectedTitleStyle={{color:"#007aff"}}
            renderIcon={() => <Image style={styles.icon} source={require('./res/image/ht1.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#007aff'}]} source={require('./res/image/ht2.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'hetong' })}>
            <View style={styles.pages3}>
                <Text>合同管理</Text>
            </View>
        </TabNavigator.Item>
        <TabNavigator.Item
            selected={this.state.selectedTab === 'qiye'}
            title="企业信息"
            selectedTitleStyle={{color:"#007aff"}}
            renderIcon={() => <Image style={styles.icon} source={require('./res/image/qy1.png')} />}
            renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#007aff'}]} source={require('./res/image/qy2.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'qiye' })}>
            <View style={styles.pages4}>
                <Text>个人中心</Text>
            </View>
        </TabNavigator.Item> */}
    </TabNavigator>
  )}
}
const styles = StyleSheet.create({
  icon:{
    width: 20,
    height: 20,
    marginBottom: 4
  },
  pages1: {},
  pages2: {}
})
