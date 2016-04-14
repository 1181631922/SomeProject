'use strict';
var React = require('react-native');
var {
  TouchableNativeFeedback,
  Navigator,
  StyleSheet,
  Text,
  Image,
  Switch,
  Picker,
  TextInput,
  ToolbarAndroid,
  ScrollView,
  View,
  NativeModules,
} = React;

import SenceC from './SenceC';
import MovieS from './MovieS';

export default class SenceA extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  _pressButton(){
    const{navigator} = this.props;
    if (navigator) {
      navigator.push({
        name:'MovieS',
        component:MovieS,
      })
    }
  }

   _navIconListener(){
     const{navigator} = this.props;
     if (navigator) {
       navigator.pop();
     }
   }

 render() {

 	return (<View style={styles.container}>

      <ToolbarAndroid
        // actions={toolbarActions}
        navIcon={require('./icon_back.png')}
        onIconClicked={this._navIconListener.bind(this)}
        style={styles.toolbar}
        title="主标题"
        subtitle="副标题"
        />

      <ScrollView
        keyboardDismissMode={'none','on-drag'}
        style={styles.contentContainer}>

          <TouchableNativeFeedback
            onPress={this._pressButton.bind(this)}>
            <View style={styles.buttonStyle}>
              <Text style={styles.titleText}>
                '相当于button click to SenceS'
              </Text>
            </View>
          </TouchableNativeFeedback>
          <View
            style={{alignItems: 'center',padding:3,height:46,backgroundColor:'#1874CD',borderRadius:5}}>
            <TextInput
              style={{alignItems: 'center',height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:20,backgroundColor:'#FFFFFF'}}
              placeholder="请输入账号："
              selectionColor="#0000CD"
              onChangeText={(text) => this.setState({text})}
              />
          </View>
          <Image
            style={{width:100,height:100}}
            source={require('./icon_menu.png')}
          />
          <Image//style需要定住宽高，否则默认显示的宽度和高度为0
            style={{width:100,height:100}}
            source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
          />
          <Image//图片只能放在drawable内，暂定为坑
            style={{width:100,height:100}}
            source={{uri:'ic_launcher',isStatic:true}}
          />

          <Switch
            onValueChange={(value) => this.setState({falseSwitchIsOn:value})}
            style={{marginTop:10,marginBottom:10}}
            value={this.state.falseSwitchIsOn}
          />

          <Switch
            onValueChange={(value) => this.setState({trueSwitchIsOn:value})}
            value={this.state.trueSwitchIsOn}
          />

          <Picker
            style={{width:200}}
            selectedValue={this.state.language}
            onValueChange={(value) => this.setState({language:value})}>
            <Picker.Item label="Java" value="java"/>
            <Picker.Item label="JavaScript" value="javaScript"/>
          </Picker>

          <Text style={styles.teststyle}>您当前选择的是：{this.state.language}</Text>

          <TouchableNativeFeedback
            onPress={this.touch}>
            <View style={styles.buttonStyle}>
              <Text style={styles.titleText}>
                退栈
              </Text>
            </View>
          </TouchableNativeFeedback>

          <Text style={styles.teststyle}>测试用的text</Text>

          <Text style={styles.teststyle}>测试用的text</Text>

          <Text style={styles.teststyle}>测试用的text</Text>

          <Text style={styles.teststyle}>测试用的text</Text>

          <Text style={styles.teststyle}>测试用的text</Text>

          <Text style={styles.teststyle}>测试用的text</Text>

          <Text style={styles.teststyle}>测试用的text</Text>

          <Text style={styles.teststyle}>测试用的text</Text>

          <Text style={styles.teststyle}>测试用的text</Text>


        </ScrollView>

      </View>);
    }

}
var RLog=NativeModules.Log;
var RToast=NativeModules.Toast;
var toolbarActions=[
  {title:'Settings',icon:require('./icon_setting.png'),show:'always'},
];
var language='';
var trueSwitchIsOn=true;
var falseSwitchIsOn=false;

var base64Icon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

var styles = StyleSheet.create({
  contentContainer:{
    paddingVertical:20,
    paddingLeft:15,
    paddingRight:15,
    // keyboardShouldPersistTaps:false,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  teststyle:{
    flex: 1,
    marginTop:20,
    backgroundColor:'#F5FCFF'
  },
  toolbar:{
    backgroundColor:'#e9eaed',
    height:56,
  },
  baseText:{
    fontFamily:'Cochin',
  },
  titleText:{
    fontSize:20,
    alignItems: 'center',
    fontWeight:'bold',
  },
  buttonStyle:{
    marginTop:10,
    marginBottom:10,
    flexDirection:'row',
    height:70,
    padding:20,
    backgroundColor:'#48D1CC',
    borderRadius:10,
  },
});
//导出场景，供外部require
module.exports = SenceA;
