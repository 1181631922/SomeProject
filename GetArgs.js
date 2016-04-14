import React,{
  View,
  Navigator,
  Text,
  TouchableOpacity,
  NativeModules,
  ToolbarAndroid,
  ScrollView,
  StyleSheet,
} from 'react-native';

import TestSix from './TestSix';

export default class GetArgs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id:null
    };
  }

  componentDidMount(){
    this.setState({
      id:this.props.id
    });
  }

  componentWillUnmount(){// NOTE: 卸载掉当前的场景就可以传递给上个场景数据

    if (this.props.getUser) {
      let user = USER_MODELS[this.props.id];
      this.props.getUser(user);
    }
  }

  _pressButton(){// NOTE: 点击返回键才可以传递给上个场景数据
    const{navigator} = this.props;

    if (this.props.getUser) {
      let user = USER_MODELS[this.props.id];
      this.props.getUser(user);
    }
    if (navigator) {
      navigator.pop();
    }
  }

  _onListener(id){
    switch (id) {
      case 'getargs':

        break;
      default:

    }
  }

  render(){
    return(
      <View
        style={styles.container}
      >

      <ToolbarAndroid
        navIcon={require('./icon_back.png')}
        onIconClicked={this._pressButton.bind(this)}
        title="由上个场景获得的参数"
        style={styles.toolbar}
        />

        <ScrollView
          keyboardDismissMode={'none','on-drag'}
          style={styles.contentContainer}>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener('getargs')}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                获取的id：{this.state.id}
              </Text>
            </View>
          </TouchableOpacity>


        </ScrollView>

      </View>
    );
  }
}

const USER_MODELS = {
  1:{name:'mot',age:23},
  2:{name:'晴天娃娃',age:25}
};

var RLog = NativeModules.Log;
var RToast = NativeModules.Toast;

var styles = StyleSheet.create({
  contentContainer:{
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
