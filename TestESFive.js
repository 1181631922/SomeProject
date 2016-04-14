'use strict'

var React = require('react-native');
var{
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  Image,
  ToolbarAndroid,
  View,
  NativeModules,
  Navigator,
  ScrollView,
} = React;

var TestESFive = React.createClass({

  render(){//渲染页面
    return(
      <View style={styles.container}>
        <ToolbarAndroid
          // actions={toolbarActions}
          navIcon={require('./icon_back.png')}
          onIconClicked={this._navIconListener}
          style={styles.toolbar}
          title="viewpager和toolbar"
          />

        <ScrollView
          keyboardDismissMode={'none','on-drag'}
          style={styles.contentContainer}>

        </ScrollView>
      </View>
    );
  },
  _navIconListener:function(){
    const{navigator} = this.props;
    if (navigator) {
      navigator.pop({//类似于进栈出栈
        name:'TestESFive',
        component:TestESFive,
      })
    }
    //RToast.shortShow("用户点击navIcon");
  },
});
var toolbarActions=[
  {title:'Setting',icon:require('./icon_setting.png'),show:'always'}
];

var RLog = NativeModules.Log;
var RToast = NativeModules.Toast;

var styles = StyleSheet.create({
  contentContainer:{
    paddingRight:15,
    paddingLeft:15,
  },
  container:{
    flex:1,
    backgroundColor:'#F5FCFF'
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

module.exports = TestESFive;
