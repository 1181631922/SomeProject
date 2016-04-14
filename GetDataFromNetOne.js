'use strict';

var React = require('react-native');
var {
  ToolbarAndroid,
  NativeModules,
  Navigator,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  NativeModules,
  ToastAndroid,
} = React;

var RLog=NativeModules.Log;
var RToast=NativeModules.Toast;
var REQUEST_URL='http://gc.ditu.aliyun.com/geocoding?a=';
var REQUEST_URL_ONE='http://gc.ditu.aliyun.com/geocoding?a=苏州市';
var oneData='';

class GetDataFromNetOne extends React.Component {

  constructor(props){
    super(props);
    this.state={
      dataOne:'',
    };
  }

  fetchOneData(){
    fetch(REQUEST_URL_ONE)
      .then((response) => response.text())
      .then((responseOne) => {
          this.setState({
              responseOne,
          });
        })
      .catch((error) => {
        console.warn(error);
      }).done();
  }

  fetchThreeData(city){
    fetch(REQUEST_URL+city)
      .then((response) => response.json())
      .then((shanghai) => {
          this.setState({
              shanghailon:shanghai.lon,
              shanghailat:shanghai.lat,
              shanghailevel:shanghai.level,
              shanghaialevel:shanghai.alevel,
          });
        })
      .catch((error) => {
        console.warn(error);
      }).done();
  }

  async getOneData(){
    try {
      let response = await fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json');
      return response;
    } catch (error) {
      throw error;
    }
  }

  getByFetch(){
   fetch(REQUEST_URL+'北京市')
   .then((response) => response.text())
   .then((responseTwo) => {
     this.setState({
         responseTwo,
     });
   })
   .catch((error) => {
     console.warn(error);
   }).done();
 }

  _navIconListener() {
       const { navigator } = this.props;
       if(navigator) {
        navigator.pop();
       }
   }

   _onListener(eventName){
     switch (eventName) {
       case 'one':
          this.fetchOneData();
         break;
       case 'two':
          this.getByFetch();
         break;
       case 'three':
          this.fetchThreeData('上海市');
        break;
       default:

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
          title="获取网络数据"/>

        <ScrollView
          keyboardDismissMode={'none','on-drag'}// NOTE: view滑动时键盘消失
          style={styles.contentContainer}>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener("one")}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                获取苏州市城市信息
              </Text>
            </View>
          </TouchableOpacity>

          <Text >
            苏州市坐标信息：{this.state.responseOne}
          </Text>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener("two")}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                获取北京市城市信息
              </Text>
            </View>
          </TouchableOpacity>

          <Text >
            北京市坐标信息：{this.state.responseTwo}
          </Text>

          <TouchableOpacity//响应用户点击操作
            style={styles.wrapper}
            onPress={() => this._onListener("three")}
            >
            <View style={styles.buttonStyle}>
              <Text style={{fontSize:20}}>
                获取上海市城市信息
              </Text>
            </View>
          </TouchableOpacity>

          <Text >
            lon:{this.state.shanghailon}
          </Text>

          <Text >
            level:{this.state.shanghailevel}
          </Text>

          <Text >
            alevel:{this.state.shanghaialevel}
          </Text>

          <Text >
            lat:{this.state.shanghailat}
          </Text>

        </ScrollView>
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
module.exports = GetDataFromNetOne;
