'use strict'

var React = require('react-native');
var{
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Text,
  Image,
  ToolbarAndroid,
  View,
  NativeModules,
  Navigator,
  ScrollView,
  Dimensions,
  Image,
  LoginOverlay,
} = React;

import MenuButton from './MenuButton';
import GetArgs from './GetArgs';

var toolbarActions=[
  {title:'Setting',icon:require('./icon_setting.png'),show:'always'}
];
var RLog = NativeModules.Log;
var RToast = NativeModules.Toast;
var ViewPager = require('react-native-viewpager');
var deviceWidth = Dimensions.get('window').width;

var IMGS=[
  'http://static.shanxiu365.com/images/banner/banner9.jpg',
  'http://static.shanxiu365.com/images/banner/banner8.jpg',
  'http://static.shanxiu365.com/images/banner/banner7.jpg'
];

var fu0 = {
  img:'http://static.shanxiu365.com/images/temple/default/fu_full11.jpg',
  name:'时来运转符'
};

var fu1 = {
  img:'http://static.shanxiu365.com/images/temple/default/fu_full11.jpg',
  name:'和合因缘符'
};

var fu2 = {
  img:'http://static.shanxiu365.com/images/temple/default/fu_full11.jpg',
  name:'学业有成符'
};

var fu3 = {
  img:'http://static.shanxiu365.com/images/temple/default/fu_full11.jpg',
  name:'求子送子符'
};

var fu4 = {
  img:'http://static.shanxiu365.com/images/temple/default/fu_full11.jpg',
  name:'晋职升学符'
};

var fuArray=[
  fu0,
  fu1,
  fu2,
  fu3,
  fu4
];

class FuItem {
  constructor(img,name) {
    this.img=img;
    this.name=name;
  }
}

var createLingFuItem = (Object,i) => <LingFuItem
                                        key={i}
                                        img={Object.img}
                                        num={i}
                                        name={Object.name}/>;

class LingFuItem extends React.Component{

  constructor(props){
    super(props);
  }

  showToast(num:i){
    RToast.shortShow(num+'个');
  }

  _pressButton(){
    let _this = this;
    const{navigator} = this.props;
    RToast.shortShow("naviagtor之前");
    if (navigator) {
      RToast.shortShow("naviagtor之后");
      navigator.push({
        name:'GetArgs',
        component:GetArgs,
        params:{
          id:this.props.num
        }
      })
    }
  }

  render(){
    return(

      <TouchableOpacity
        style={{marginTop:10,marginBottom:10}}
        onPress={this._pressButton.bind(this)}
      >
          <View
            style={{flexDirection:'row',backgroundColor:'#FFFFFF',marginTop:15,marginBottom:15}}
          >
            <View
              style={{marginLeft:15,marginRight:15}}
            >
              <Image
                style={{width:80,height:80,borderRadius:40}}
                source={{uri:this.props.img}}
              />
            </View>

            <View style={{width:deviceWidth-110,marginRight:15}}>
              <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <Text>
                    {this.props.name}
                  </Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end',marginRight:15}}>
                  <Text
                    style={{fontSize:12}}
                  >
                    已有300人请符
                  </Text>
                </View>
              </View>
              <Text
                numberOfLines={1}
              >
                具有开运，旺财和化解各种灾难的不拉不拉
              </Text>
              <Text>
                北京平谷药王庙 常高璐道长手书
              </Text>
              <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <Text>
                    ￥200元
                  </Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end',marginRight:15}}>
                  <Text>
                    参加
                  </Text>
                </View>
              </View>
            </View>
          </View>

      </TouchableOpacity>

    )
  }
}

export default class ViewpagerDemo extends React.Component{

  constructor(props){
    super(props);
    var dataSource = new ViewPager.DataSource({
      pageHasChanged:(p1,p2) => p1 !== p2,
    });
    this.state = {
      dataSource:dataSource.cloneWithPages(IMGS)
    }
  }

  componentWillMount(){
    this.addFu();
  }

  addFu( ){
        for (var i = 0; i < 3; i++) {
          fuArray.push(new FuItem('http://static.shanxiu365.com/images/temple/default/fu_full11.jpg','name'+i));
      }
  }

  _navIconListener(){
    const{navigator} = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  _renderPage(data,pageID) {
    return (
      <Image
        source={{uri: data}}
        style={styles.page} />
        )
  }

  _pressButton(name){
    let _this = this;
    const{navigator} = this.props;
    if (navigator) {
      navigator.push({
        name:'GetArgs',
        component:GetArgs,
        params:{
          id:name
        }
      })
    }
  }

  render(){//渲染页面
    return(
      <View style={styles.container}>
        <ToolbarAndroid
          // actions={toolbarActions}
          navIcon={require('./icon_back.png')}
          onIconClicked={this._navIconListener.bind(this)}
          style={styles.toolbar}
          title="求福APP首页"
          />

          <ScrollView
            keyboardDismissMode={'none','on-drag'}
          >
            <View // NOTE: 首页轮播图
              style={{height:200}}
            >
              <ViewPager
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={true}/>
            </View>

            <View // NOTE: 一下是八个icon
              style={{flexDirection:'row',marginTop:8}}
            >
              <View
                style={{flex:1,alignItems:'center'}}
              >
                <View style={{alignItems:'center'}}>
                  <Image
                    style={{width:60,height:60}}
                    source={require('./mipmap/maintop_1.png')}
                  />
                  <Text
                    style={{marginTop:3}}
                  >
                  祈福开运
                  </Text>
                </View>
              </View>

              <View
                style={{flex:1,alignItems:'center'}}
              >
                <View style={{alignItems:'center'}}>
                  <Image
                    style={{width:60,height:60}}
                    source={require('./mipmap/maintop_2.png')}
                  />
                  <Text
                    style={{marginTop:3}}
                  >
                  姻缘求子
                  </Text>
                </View>
              </View>

              <View
                style={{flex:1,alignItems:'center'}}
              >
                <View style={{alignItems:'center'}}>
                  <Image
                    style={{width:60,height:60}}
                    source={require('./mipmap/maintop_3.png')}
                  />
                  <Text
                    style={{marginTop:3}}
                  >
                  平安健康
                  </Text>
                </View>
              </View>

              <View
                style={{flex:1,alignItems:'center'}}
              >
                <View style={{alignItems:'center'}}>
                  <Image
                    style={{width:60,height:60}}
                    source={require('./mipmap/maintop_4.png')}
                  />
                  <Text
                    style={{marginTop:3}}
                  >
                  招财进宝
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{flexDirection:'row',marginTop:8}}
            >
              <View
                style={{flex:1,alignItems:'center'}}
              >
                <View style={{alignItems:'center'}}>
                  <Image
                    style={{width:60,height:60}}
                    source={require('./mipmap/maintop_5.png')}
                  />
                  <Text
                    style={{marginTop:3}}
                  >
                  驱邪避灾
                  </Text>
                </View>
              </View>

              <View
                style={{flex:1,alignItems:'center'}}
              >
                <View style={{alignItems:'center'}}>
                  <Image
                    style={{width:60,height:60}}
                    source={require('./mipmap/maintop_6.png')}
                  />
                  <Text
                    style={{marginTop:3}}
                  >
                  智慧学业
                  </Text>
                </View>
              </View>

              <View
                style={{flex:1,alignItems:'center'}}
              >
                <View style={{alignItems:'center'}}>
                  <Image
                    style={{width:60,height:60}}
                    source={require('./mipmap/maintop_7.png')}
                  />
                  <Text
                    style={{marginTop:3}}
                  >
                  镇宅安家
                  </Text>
                </View>
              </View>

              <View
                style={{flex:1,alignItems:'center'}}
              >
                <View style={{alignItems:'center'}}>
                  <Image
                    style={{width:60,height:60}}
                    source={require('./mipmap/maintop_8.png')}
                  />
                  <Text
                    style={{marginTop:3}}
                  >
                  职场事业
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{backgroundColor:'#F3F2F0',height:50,paddingLeft:15,paddingRight:15,marginTop:8,flexDirection:'row'}}
            >
                <View
                  style={{flex:1,flexDirection:'row'}}
                >
                  <Image
                    style={{width:40,height:40,marginRight:3,marginTop:10}}
                    source={require('./mipmap/fashi_icon.png')}
                  />
                  <Text
                    style={{fontSize:14,marginTop:27}}
                  >
                    推荐祈福
                  </Text>
                </View>
                <View
                  style={{flex:1,alignItems:'flex-end'}}
                >
                  <Text
                    style={{fontSize:12,marginTop:30}}
                  >
                  查看往期>>
                  </Text>
                </View>
            </View>

            <View
              style={{flexDirection:'row',backgroundColor:'#FFFFFF',marginTop:15}}
            >
              <View
                style={{marginLeft:15,marginRight:15}}
              >
                <Image
                  style={{width:80,height:80,borderRadius:40}}
                  source={{uri:'http://static.shanxiu365.com/images/buddha2/2/nd004.jpg'}}
                />
              </View>

              <View style={{width:deviceWidth-110,marginRight:15}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{flex:1}}>
                    <Text>
                      玄天上帝圣诞
                    </Text>
                  </View>
                  <View style={{flex:1,alignItems:'flex-end',marginRight:15}}>
                    <Text>
                      30人报名
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{flexWrap:'wrap'}}
                    numberOfLines={2}
                  >
                    测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据
                  </Text>
                  <Text
                    numberOfLines={1}
                  >
                    北京平谷药王庙 常高璐道长领香祈福
                  </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <View style={{flex:1}}>
                    <Text>
                      2016年04月09号
                    </Text>
                  </View>
                  <View style={{flex:1,alignItems:'flex-end',marginRight:15}}>
                    <Text>
                      参加
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{backgroundColor:'#F3F2F0',height:50,paddingLeft:15,paddingRight:15,marginTop:8,flexDirection:'row'}}
            >
                <View
                  style={{flex:1,flexDirection:'row'}}
                >
                  <Image
                    style={{width:40,height:48,marginRight:3,marginTop:2}}
                    source={require('./mipmap/lingfu_icon.png')}
                  />
                  <Text
                    style={{fontSize:14,marginTop:27}}
                  >
                    推荐灵符
                  </Text>
                </View>
                <View
                  style={{flex:1,alignItems:'flex-end'}}
                >
                  <Text
                    style={{fontSize:12,marginTop:30}}
                  >
                  更多>>
                  </Text>
                </View>
            </View>

            <TouchableOpacity//响应用户点击操作
              style={styles.wrapper}
              onPress={() => this._pressButton('太岁符')}
              >

                <View
                  style={{flexDirection:'row',backgroundColor:'#FFFFFF',marginTop:15,marginBottom:15}}
                >
                  <View
                    style={{marginLeft:15,marginRight:15}}
                  >
                    <Image
                      style={{width:80,height:80,borderRadius:40}}
                      source={{uri:'http://static.shanxiu365.com/images/temple/default/fu_full11.jpg'}}
                    />
                  </View>

                  <View style={{width:deviceWidth-110,marginRight:15}}>
                    <View style={{flexDirection:'row'}}>
                      <View style={{flex:1}}>
                        <Text>
                          太岁符
                        </Text>
                      </View>
                      <View style={{flex:1,alignItems:'flex-end',marginRight:15}}>
                        <Text
                          style={{fontSize:12}}
                        >
                          已有300人请符
                        </Text>
                      </View>
                    </View>
                    <Text
                      numberOfLines={1}
                    >
                      具有开运，旺财和化解各种灾难的不拉不拉
                    </Text>
                    <Text>
                      北京平谷药王庙 常高璐道长手书
                    </Text>
                    <View style={{flexDirection:'row'}}>
                      <View style={{flex:1}}>
                        <Text>
                          ￥200元
                        </Text>
                      </View>
                      <View style={{flex:1,alignItems:'flex-end',marginRight:15}}>
                        <Text>
                          参加
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

            </TouchableOpacity>

            <LingFuItem
              key={10}
              img={fu0.img}
              num={10}
              name={fu0.name}
              onPress={() => {
                  this.props.navigator.push({
                      name:'GetArgs',
                      component:GetArgs,
                      params:{
                        id:fu0.name
                      }
                    })
                }}
              />


            {fuArray.map(createLingFuItem)}



          </ScrollView>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  contentContainer:{
    paddingRight:15,
    paddingLeft:15,

  },
  container:{
    flex:1,
    backgroundColor:'#FFFFFF'
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
  page:{
    width:deviceWidth,
    height:200,
    resizeMode:'stretch',
  },
});

module.exports = ViewpagerDemo;
