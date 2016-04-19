'use strict'

var React = require('react-native');
var{
  TouchableNativeFeedback,
  Text,
  Image,
  ToolbarAndroid,
  ScrollView,
  View,
  StyleSheet,
  NativeModules,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  QiuFu,
} = React;

import SenceA from './SenceA';
import SenceB from './SenceB';
import ViewpagerDemo from './ViewpagerDemo';
import TextViewDemo from './TextViewDemo';
import TestESSix from './TestESSix';
import TestESFive from './TestESFive';
import TestSix from './TestSix';
import TopScreen from './TopScreen';
import SimpleScreen from './viewpagerdemo/SimpleScreen';
import BottomScreen from './viewpagerdemo/BottomScreen';
import LayoutDemo from './LayoutDemo';
import MainScreen from './MainScreen';
import GetDataFromNetOne from './GetDataFromNetOne';
import QiuFuApp from './QiuFuApp';

export default class SenceC extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  onActionSelected(position){
    if (position===0) {//use strict严格模式下，三个等号
      RToast.shortShow("第0个被点击了");
    }else {
    RToast.shortShow("第"+position+"个被点击了");
    }
  }

  _navIconListener(){
    RToast.shortShow("主页菜单键");
  }

  _onListener(eventName){
    const {navigator} = this.props;
    switch (eventName) {
      case 'navicon':
        RToast.shortShow("主页菜单键");
        break;
      case 'press':
        RToast.shortShow("用户点击的响应：press");
        break;
      case 'pressInt':
        RToast.shortShow("用户点击的响应：pressInt");
        break;
      case 'pressOut':
        RToast.shortShow("用户点击的响应：pressOut");
        break;
      case 'longPress':
        RToast.shortShow("用户点击的响应：longPress");
        break;
      case 'SenceA':
          // const {navigator} = this.props;
          if (navigator) {
            navigator.push({
              name:'SenceA',
              component:SenceA,
            });
          }
          break;
      case 'viewpagerDemo':
        if (navigator) {
          navigator.push({
            name:'ViewpagerDemo',
            component:ViewpagerDemo,
          });
        }
        break;
      case 'TestESSix':
        if (navigator) {
          navigator.push({
            name:'TestESSix',
            component:TestESSix,
          });
        }
        break;
      case 'TestSix':
        if (navigator) {
          navigator.push({
            name:'TestSix',
            component:TestSix,
          });
        }
          break;
      case 'TestESFive':
        if (navigator) {
          navigator.push({
            name:'MainScreen',
            component:MainScreen,
          });
        }
        break;
      case 'changeColor':
        RToast.shortShow("点击变色");
        break;
      case 'ShareDialog':
        // RShareDialog.show();
        Alert.alert(
          'Alert标题',
          '正文内容',
          [
            {Text:'OK',onPress:() => RToast.shortShow('事情ok了')}
          ]
        )
        break;
      case 'TopScreen':
        if (navigator) {
          navigator.push({
            name:'TopScreen',
            component:TopScreen,
          });
        }
        break;
      case 'SimpleScreen':
        if (navigator) {
          navigator.push({
            name:'SimpleScreen',
            component:SimpleScreen,
          });
        }
        break;
      case 'BottomScreen':
          if (navigator) {
            navigator.push({
              name:'BottomScreen',
              component:BottomScreen,
            });
          }
        break;
      case 'LayoutDemo':
          if (navigator) {
            navigator.push({
              name:'LayoutDemo',
              component:LayoutDemo,
            });
          }
        break;
      case 'GetDataFromNetOne':
        if (navigator) {
          navigator.push({
            name:'GetDataFromNetOne',
            component:GetDataFromNetOne,
          });
        }
        break;
      case 'qiufu':
          if(navigator){
              navigator.push({
                name:'QiuFuApp',
                component:QiuFuApp,
              });
            }
        break;

      default:

    }
  }

  render(){
    return(
      <View style={styles.container}>

        <ToolbarAndroid
          actions={toolbarActions}
          navIcon={require('./icon_menu.png')}
          onIconClicked={() => this._navIconListener()}
          onActionSelected={this.onActionSelected}
          overflowIcon={require('./mipmap/icon_plus.png')}
          style={styles.toolbar}
          title="首页按钮测试"
        />
        <ScrollView
          keyboardDismissMode={'none','on-drag'}
          style={styles.contentContainer}>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener("SenceA")}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                点击跳转到测试单个控件页面
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableHighlight
            underlayColor='#48D1CC'
            activeOpacity={0.1}
            style={{ borderRadius: 8,marginTop:5}}
            onPress={() => this._onListener('changeColor')}
            >
              <View style={styles.buttonStyle}>
                <Text style={{fontSize:20}}>
                  点击我变色
                </Text>
              </View>
          </TouchableHighlight>
          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('press')}
            onPressInt={() => this._onListener('pressInt')}
            onPressOut={() => this._onListener('pressOut')}
            onLongPress={() => this._onListener('longPress')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                有本事你点我啊(和原生toast交互)
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('viewpagerDemo')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                求福APP首页
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('TestESSix')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                "测试es6写法(错误)"
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('TestSix')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                "测试es6写法(正确)"
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('TestESFive')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                测试es5写法
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('ShareDialog')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                调用本地dialog
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('TopScreen')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                viewpager TopScreen
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('SimpleScreen')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                viewpager SimpleScreen
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('BottomScreen')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                viewpager BottomScreen
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('LayoutDemo')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                测试布局
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('GetDataFromNetOne')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                测试从网络获取数据
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('qiufu')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                求福网络首页
              </Text>
            </View>
          </TouchableOpacity>


        </ScrollView>
      </View>
    )
  }
}

var toolbarActions=[//toolbarSelect选择的顺序
  {title:'Settings',icon:require('./icon_setting.png'),show:'always'},
  {title:'Share',icon:require('./mipmap/icon_share.png'),show:'always'},
  {title:'扫码'},
  {title:'付款'},
  {title:'加好友'},
];

var RLog=NativeModules.Log;
var RToast=NativeModules.Toast;
var RShareDialog=NativeModules.ShareDialog;

var styles = StyleSheet.create({
  contentContainer:{
    // paddingVertical:20,
    paddingRight:15,
    paddingLeft:15,
  },
  container:{
    flex:1,
    backgroundColor:'#F5FCFF',
  },
  toolbar:{
    backgroundColor:'#e9eaed',
    height:56,
  },
  buttonStyle:{
    marginTop:10,
    marginBottom:10,
    flexDirection:'row',
    height:50,
    padding:10,
    backgroundColor:'#48D1CC',
    borderRadius:10,
  },
  titleText:{
    fontSize:20,
    alignItems:'center',
    fontWeight:'bold',
  },
  wrapper:{
    borderRadius:8,
  },
});
//导出场景，供外部使用
module.exports = SenceC;
