'use strict';

var React = require('react-native');
var {
  ToolbarAndroid,
  NativeModules,
  Navigator,
  Text,
  View,
  Alert,
  Image,
  Dimensions,
  ScrollView,
} = React;

var REQUEST_INDEX_URL = 'http://www.shanxiu365.com/portal/index.do';

var RLog = NativeModules.Log;
var RToast = NativeModules.Toast;
var ViewPager = require('react-native-viewpager');
var deviceWidth = Dimensions.get('window').width;

var bannerList=[
  'http://static.shanxiu365.com/images/banner/banner7.jpg'
];
var tagList='';

class tag {
  constructor(icon_url,name) {
    this.icon_url=icon_url;
    this.name=name;
  }
}

class qingfu {
  constructor(description,fu_id,handler_id,handler_name,like_count,picUrl,price,sect_name,temple_id,temple_name,title) {
    this.description=description;
    this.fu_id=fu_id;
    this.handler_id=handler_id;
    this.handler_name=handler_name;
    this.like_count=like_count;
    this.picUrl=picUrl;
    this.price=price;
    this.sect_name=sect_name;
    this.temple_id=temple_id;
    this.temple_name=temple_name;
    this.title=title;
  }
}

class QiuFuApp extends React.Component {

  constructor(props){
    super(props);
    var dataSource = new ViewPager.DataSource({
      pageHasChanged:(p1,p2) => p1 !== p2,
    });
    this.state={
      dataSource:null,
      banner:null,
      event:null,
      qingfu:null,
      shangxiang:null,
      state:null,
      tab:null,
      tags:null,
    };
  }



  componentDidMount(){
    this.initData();
  }

  initData(){
    fetch(REQUEST_INDEX_URL)
      .then((response) => response.json())
      .then((responseData) => {

        if (this.state.banner!=null) {
          for (var i = 0; i < this.state.banner.length; i++) {
            bannerList.push(this.state.banner.bannerUrl);
          };
          this.state = {
            dataSource:dataSource.cloneWithPages(bannerList)
          }
        }

        console.log(bannerList);

        this.setState({
          dataSource:dataSource.cloneWithPages(bannerList),
          banner:responseData.banner,
          event:responseData.event,
          qingfu:responseData.qingfu,
          shangxiang:responseData.shangxiang,
          state:responseData.state,
          tab:responseData.tab,
          tags:responseData.tags,
        });
      })
      .catch((error) => {
        console.warn(error);
      })
      .done();




  }

  _renderPage(data,pageID) {
    return (
      <Image
        source={{uri: data}}
        style={styles.page} />
        )
  }

  _navIconListener() {
       const { navigator } = this.props;
       if(navigator) {
         this.props.navigator.pop();
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
          title="测试es6语法（错误）"/>

          <ScrollView
            keyboardDismissMode={'none','on-drag'}// NOTE: view滑动时键盘消失
            style={styles.contentContainer}>

            <View style={{height:200}}>
            <ViewPager
              dataSource={this.state.dataSource}
              renderPage={this._renderPage}
              isLoop={true}
              autoPlay={true}/>

            </View>
            <Text >
              {this.state.state}
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
  page:{
   width:deviceWidth,
   height:200,
   resizeMode:'stretch',
  },
});
// AppRegistry.registerComponent('hi', () => MoviesApp);
module.exports = QiuFuApp;
