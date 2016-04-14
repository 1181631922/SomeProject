'use strict';

var React = require('react-native');
var {
  ToolbarAndroid,
  NativeModules,
  Navigator,
  Text,
  View
} = React;

class TestESSix extends React.Component {

  constructor(props){
    super(props);
    this.state={};
  }

  touch(){
    this.props.navigator.pop({
     title:"TestESSix",
     name:"TestESSix"
    });
  }

  _navIconListener() {
      //  const { navigator } = this.props;
      //  if(navigator) {
        //  let x="Hello World ！";
         RToast.shortShow("测试下es6语法(错误)");
      //  }
   }

  render() {
    return (
      <View
      style={styles.container}
      // navigator={this.props.navigator}
      >
        <ToolbarAndroid
          navIcon={require('./icon_back.png')}
          onIconClicked={this._navIconListener}
          style={styles.toolbar}
          title="测试es6语法（错误）"/>


      </View>
    )
  }
}

var RLog = NativeModules.Log;
var RToast = NativeModules.Toast;

var styles = React.StyleSheet.create({
  contentContainer:{
    paddingLeft:15,
    paddingRight:15,
  },
  container: {
    flex: 1,
    backgroundColor:'#F5FCFF',
  },
  toolbar:{
    backgroundColor:'#e9eaed',
    height:56,
  },
});
// AppRegistry.registerComponent('hi', () => MoviesApp);
module.exports = TestESSix;
