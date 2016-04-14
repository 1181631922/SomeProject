'use strict';

var React = require('react-native');
var {
  ToolbarAndroid,
  NativeModules,
  Navigator,
  Text,
  View,
  ScrollView,
  Dimensions,
  PixelRatio,
} = React;

class LayoutDemo extends React.Component {

  constructor(props){
    super(props);
  }

  _navIconListener() {
       const { navigator } = this.props;
       if(navigator) {
         navigator.pop();
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
          title="测试布局"/>

        <ScrollView
          keyboardDismissMode={'none','on-drag'}
          style={styles.contentContainer}
          >

          <Text
            style={styles.textStyle}
          >
            window.width={Dimensions.get('window').width + '\n'}
            window.height={Dimensions.get('window').height + '\n'}
            pxielRatio={PixelRatio.get()}
          </Text>

          <Text
            style={styles.textStyle}
          >
            根节点上放一个元素，不设置宽度
          </Text>
          <View
            style={{height:20,backgroundColor:'#333333'}}
          />

          <Text
            style={styles.textStyle}
          >
            固定宽度的元素上放一个view，不设置宽度
          </Text>
          <View
            style={{width:100}}
          >
            <View style={{height:20,backgroundColor:'#333333'}}/>
          </View>

          <Text
            style={styles.textStyle}
          >
            flex的元素上放一个view，不设置宽高
          </Text>
          <View
            style={{flexDirection:'row',marginTop:5}}
          >
            <View
              style={{flex:1}}
            >
              <View
                style={{height:40,backgroundColor:'#333333'}}
              />
            </View>
            <View
              style={{flex:1,alignItems:'center'}}
            >
              <Text
              >
                上面（居中）
              </Text>
              <Text
              >
                下面（居中）
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection:'row',marginTop:5}}
          >
            <View
              style={{flex:1}}
            >
              <View
                style={{height:40,backgroundColor:'#333333'}}
              />
            </View>
            <View
              style={{flex:1}}
            >
              <Text
              >
                上面（居左）
              </Text>
              <Text
              >
                下面（居左）
              </Text>
            </View>
          </View>
          <View
            style={{flexDirection:'row',marginTop:5}}
          >
            <View
              style={{flex:1}}
            >
              <View
                style={{height:40,backgroundColor:'#333333'}}
              />
            </View>
            <View
              style={{flex:1,alignItems:'flex-end'}}
            >
              <Text
              >
                上面（居右）
              </Text>
              <Text
              >
                下面（居右）
              </Text>
            </View>
          </View>

          <Text
            style={styles.textStyle}
          >
            水平居中
          </Text>
          <View
            style={{height:100,backgroundColor:'#333333',alignItems:'center'}}
          >
            <View
              style={{backgroundColor:'#fefefe',width:30,height:30,borderRadius:15}}
            />
          </View>

          <Text
            style={styles.textStyle}
          >
            垂直居中
          </Text>
          <View
            style={{height:100,backgroundColor:'#333333',justifyContent:'center'}}
          >
            <View
              style={{backgroundColor:'#fefefe',width:30,height:30,borderRadius:15}}
            />
          </View>

          <Text
            style={styles.textStyle}
          >
            水平垂直居中
          </Text>
          <View
            style={{height:100,backgroundColor:'#333333',alignItems:'center',justifyContent:'center'}}
          >
            <View
              style={{backgroundColor:'#fefefe',width:30,height:30,borderRadius:15}}
            />
          </View>

          <View
            style={styles.flexContainer}
          >
            <View
              style={styles.cell}
            >
              <Text
                style={styles.welcome}
              >
                cell1
              </Text>
            </View>

            <View
              style={styles.cell}
            >
              <Text
                style={styles.welcome}
              >
                cell2
              </Text>
            </View>

            <View
              style={styles.cell}
            >
              <Text
                style={styles.welcome}
              >
                cell3
              </Text>
            </View>

          </View>

          <View
            style={styles.flexContainer}
          >
            <View
              style={styles.cellfixed}
            >
              <Text
                style={styles.welcome}
              >
                flex
              </Text>
            </View>

            <View
              style={styles.cell}
            >
              <Text
                style={styles.welcome}
              >
                flex1
              </Text>
            </View>

            <View
              style={styles.cellfixed}
            >
              <Text
                style={styles.welcome}
              >
                flex
              </Text>
            </View>
          </View>


          <View
            style={{height:10}}
          />

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
    paddingBottom:10,
  },
  container: {
    flex: 1,
    backgroundColor:'#F5FCFF',
  },
  toolbar:{
    backgroundColor:'#e9eaed',
    height:56,
  },
  textStyle:{
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
    marginRight:5,
  },
  flexContainer:{
    flexDirection:'row',
    marginTop:5,
  },
  cell:{
    flex:1,
    height:50,
    backgroundColor:'#aaaaaa',
    justifyContent:'center',
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:20,
  },
  cellfixed:{
    height:50,
    width:80,
    backgroundColor:'#fefefe',
    justifyContent:'center',
  },
});
module.exports = LayoutDemo;
