'use strict';

var React = require('react-native');
var {
  ToolbarAndroid,
  NativeModules,
  Navigator,
  Text,
  View
} = React;

class QiuFu extends React.Component {

  constructor(props){
    super(props);
    this.state={};
  }

  _navIconListener() {
       const { navigator } = this.props;
       if(navigator) {
         this.props.pop();
       }
   }

  render() {
    return (
      <View
      style={styles.container}
      // navigator={this.props.navigator}
      >
        <ToolbarAndroid
          navIcon={require('./icon_back.png')}
          onIconClicked={this._navIconListener.bind(this)}
          style={styles.toolbar}
          title="网络请求，求福首页"/>


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

module.exports = QiuFu;
