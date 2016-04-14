import React, {
  AppRegistry,
  Component,
  TouchableNativeFeedback,
  Navigator,
  ToolbarAndroid,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MovieS extends Component {

  constructor(props){
    super(props);
    this.state={
      dataSource:new ListView.DataSource({
          rowHasChanged:(row1, row2) => row1 !== row2,
        }),
      loaded:false,
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  _navIconListener(){
    const{navigator} = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  fetchData(){
    fetch(REQUEST_URL)
      .then((response)=>response.json())
      .then((responseData)=>{
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
            loaded:true,
          });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return(
      <View style={styles.fatherContainer}>
        <ToolbarAndroid
          actions={toolbarActions}
          navIcon={require('./icon_back.png')}
          onIconClicked={this._navIconListener.bind(this)}
          style={styles.toolbar}
          title="我的电影资源"
          />

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderMovie}
            style={styles.listview}
            />
      </View>
      );

  }


  renderLoadingView(){
    return (
        <View style={styles.fatherContainer}>
        <ToolbarAndroid
          actions={toolbarActions}
          navIcon={require('./icon_back.png')}
          onIconClicked={this._navIconListener.bind(this)}
          style={styles.toolbar}
          title="我的电影资源"
          />
          <Text
            style={styles.loadingContainer}
          >
            正在加载电影数据......
          </Text>
        </View>
      );
  }

  renderMovie(movie){
    return(
        <View style={styles.container}>
          <Image
            source={{uri:movie.posters.thumbnail}}
            style={styles.thumbnail}
            />
          <View style={styles.rightContainer}>
           <Text style={styles.title}>{movie.title}</Text>
           <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
  }

}

var REQUEST_URL='https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var toolbarActions=[
  // {title:'Create',icon:require('./icon_back.png'),show:'always'},相当于在右侧新加icon，或title
  // {title:'Filter'},相当于原生应用的三个点
  {title:'Settings',icon:require('./icon_setting.png'),show:'always'},
];

const styles = StyleSheet.create({
  fatherContainer:{
    flex:1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:56,
    backgroundColor: '#F5FCFF',
  },
  loadingContainer:{
    flex:1,
    marginTop:56,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail:{
    width: 53,
    height: 88,
  },
  rightContainer:{
    flex: 1,
  },
  title:{
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year:{
    textAlign: 'center'
  },
  listview:{
    backgroundColor:'#F5FCFF'
  },
  toolbar:{
    backgroundColor:'#e9eaed',
    height:56,
  },
});
//导出场景，供外部require
module.exports = MovieS;
//AppRegistry.registerComponent('TestReact', () => TestReact);
