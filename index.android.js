/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var React = require('react-native');
var{
  AppRegistry,
  TouchableNativeFeedback,
  Navigator,
  BackAndroid,
  NativeModules,
}=React;

var _navigator;
var RLog=NativeModules.Log;
var RToast=NativeModules.Toast;

var SenceA=require('./SenceA');
var SenceB=require('./SenceB');
var SenceC=require('./SenceC');
var MovieS=require('./MovieS');
var TestESFive = require('./TestESFive');
var TestSix = require('./TestSix');
var TextViewDemo = require('./TextViewDemo');
var ViewpagerDemo = require('./ViewpagerDemo');
var TestESSix = require('./TestESSix');
var GetArgs = require('./GetArgs');
// NOTE: 控制android返回键，es5，es6写法差别较大
BackAndroid.addEventListener('harwardBackPress',() =>{
  if (_navigator && _navigator.getCurrentRoutes().length>1) {
    _navigator.pop();
    return true;
  };
  return false;
});

var RouteMapper =function(route,navigation,onComponent){
  _navigator=navigation;
  switch (route.name) {
    case 'TestSix':
      return(
        <TestSix navigator={navigation}/>
      );
      break;
    case 'TestESFive':
      return(
        <TestESFive navigator={navigation}/>
      );
      break;
    case 'TestESSix':
      return(
        <TestESSix navigator={navigation}/>
      );
      break;
    case 'SenceA':
      return(
        <SenceA navigator={navigation}/>
      );
      break;
    case 'SenceB':
      return(
        <SenceB navigator={navigation}/>
      );
      break;
    case 'MovieS':
      return(
        <MovieS navigator={navigation}/>
      );
      break;
    case 'SenceC':
      return(
        <SenceC navigator={navigation}/>
      );
      break;
    case 'ViewpagerDemo':
      return(
        <ViewpagerDemo navigator={navigation}/>
      );
      break;
    case 'TextViewDemo':
      return(
        <TextViewDemo navigator={navigation}/>
      );
      break;
    case 'GetArgs':
      return(
        <GetArgs navigator={navigation}/>
      );
      break;
    default:

  }
};

// var SomeProject =React.createClass({
//   render:function(){
//     var initialRoute = {name:"SenceC"};
//     return(
//       <Navigator
//       initialRoute={initialRoute}
//       renderScene={RouteMapper}
//       />
//     )
//   },
// });

export default class SomeProject extends React.Component{
  // constructor() {
  //
  // }

  render(){
    let defaultName = 'SenceC';
    let defaultComponent = SenceC;

    return(
      <Navigator
        initialRoute={{
          name:defaultName,
          component:defaultComponent,
        }}
        // configureScene={}
        // configureScene={(route) => {
        //     return Navigator.SceneConfigs.VerticalDownSwipeJump;
        // }}
        renderScene={(route,navigator) => {
          _navigator=navigator;
          let Component = route.component;
          return <Component {...route.params} navigator={navigator}/>
        }}
      />
    );
  }
}

AppRegistry.registerComponent('SomeProject', () => SomeProject);
