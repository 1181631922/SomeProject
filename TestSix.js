'use strict';

var React = require('react-native');
var {
  ToolbarAndroid,
  NativeModules,
  Navigator,
  Text,
  ScrollView,
  TouchableOpacity,
  View
} = React;

import GetArgs from './GetArgs';

// getInitialState(){
//
// };

// NOTE: es6写法，继承，还可以写内部类继承
export default class TestSix extends React.Component {

  constructor(props){
    super(props);
    this.state={
      id:2,
      user:null,
    };
  }



  _navIconListener() {
        //  let x="Hello World ！";
        // this.props.navigator.pop();
         RToast.shortShow("测试下es6语法");
   }

   onActionSelected(position){
     switch (position) {
      case 0:
        let a = 0;// NOTE: es6的写法，块区域
        RToast.shortShow("第"+ a + position+"个被点击了");
         break;
      case 1:
        let b = 'Hello World ';
        RToast.shortShow(b+ position);
        break;
       default:

     }
   }

   _onListener(id){
     switch (id) {
       case 'putargs':
        // RToast.shortShow(id);

         break;
       default:

     }
   }

   _pressButton(){
     let _this = this;
     const{navigator} = this.props;
     if (navigator) {
       navigator.push({
         name:'GetArgs',
         component:GetArgs,
         params:{
           id:this.state.id,
           getUser:function(user){// NOTE: 从getargs场景中获取user，类似activityforresulet
             _this.setState({
               user:user
             })
           }
         }
       })
     }
   }

  render() {
    return (
      <View
      style={styles.container}
      >
        <ToolbarAndroid
          actions={toolbarActions}
          navIcon={require('./icon_back.png')}
          // onIconClicked={this._navIconListener}
          onIconClicked={() => {this.props.navigator.pop();}}
          onActionSelected={this.onActionSelected}
          style={styles.toolbar}
          title="测试es6语法（正确）"/>

        <ScrollView
          keyboardDismissMode={'none','on-drag'}// NOTE: view滑动时键盘消失
          style={styles.contentContainer}
          >

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            // onPress={() => this._onListener('putargs')}
            onPress={this._pressButton.bind(this)}
            >
            <View
              style={styles.buttonStyle}
              >
              <Text
                style={{fontSize:20}}
                >
                "点我跳转并传递id"
              </Text>
            </View>
          </TouchableOpacity>

          <Text
            style={styles.titleText}
          >
            用户信息：{JSON.stringify(this.state.user)}
          </Text>



        </ScrollView>

      </View>
    )
  }
}

var RLog = NativeModules.Log;
var RToast = NativeModules.Toast;

var toolbarActions=[
  {title:'Share',icon:require('./mipmap/icon_share.png'),show:'always'},
  {title:'Settings',icon:require('./icon_setting.png'),show:'always'},
];

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
// AppRegistry.registerComponent('hi', () => MoviesApp);
module.exports = TestSix;
