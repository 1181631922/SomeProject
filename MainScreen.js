import React,{
  Component,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

import ViewpagerDemo from './ViewpagerDemo';
import TabNavigator from 'react-native-tab-navigator';

const DIS_NORMAL=require('./mipmap/widget_discover.png');
const DIS_FOCUS=require('./mipmap/widget_discover_blue_icon.png');
const CAL_NORMAL=require('./mipmap/widget_mycalendar_icon.png');
const CAL_FOCUS=require('./mipmap/widget_mycalendar_blue_icon.png');

const TODAY = 'today';
const SERVICE = 'service';
const TEMPLE = 'temple';
const PERSONAL = 'personal';


export default class MainScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {selectedTab:TODAY}
  }

  _renderTabItem(img,selectedImg,tag,childView){
    return(
      <TabNavigator.Item
        selected={this.state.selectedTab === tag}
        renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
        renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
        onPress={() => this.setState({selectedTab:tag})}
      >
        {childView}
      </TabNavigator.Item>
    );
  }

  static _createChildView(tag){
    return(
      <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:22}}>{tag}</Text>
      </View>
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
          {this._renderTabItem(DIS_NORMAL,DIS_FOCUS,TODAY,<ViewpagerDemo/>)}
          {this._renderTabItem(CAL_NORMAL,CAL_FOCUS,SERVICE,MainScreen._createChildView(SERVICE))}
          {this._renderTabItem(DIS_NORMAL,DIS_FOCUS,TEMPLE,MainScreen._createChildView(TEMPLE))}
          {this._renderTabItem(CAL_NORMAL,CAL_FOCUS,PERSONAL,MainScreen._createChildView(PERSONAL))}
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab:{
    height:52,
    backgroundColor:'#303030',
    alignItems:'center',
  },
  tabIcon:{
    width:30,
    height:35,
    resizeMode:'stretch',
    marginTop:12.5,
  },
});
