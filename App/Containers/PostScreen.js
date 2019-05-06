import React, { Component } from 'react';
import { View, Text, ListView,  FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import FlatListRow from '../Components/FlatListRow';
import PostActions from '../Redux/PostRedux';
import AnimatedEllipsis from 'react-native-animated-ellipsis';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Styles
import styles from './Styles/PostScreenStyles';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class PostScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([]),
      errorMsg: '',
      isLoading: false,
      getData: false,
      postList: []
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount(){
    // eslint-disable-next-line react/prop-types
    this.props.getAllPosts();
  }
    
  // eslint-disable-next-line complexity
  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/prop-types
    const { data, error, errorMessage, fetching  } = this.props;

    // eslint-disable-next-line no-restricted-syntax
    console.log('componentDidUpdate');
    // console.log(data)
    //     console.log(error)
    //     console.log(errorMessage)
    //     console.log(fetching)

    // eslint-disable-next-line react/prop-types
    if(!prevProps.fetching && fetching) {
      this.setState({ isLoading: true, errorMsg: '', getData: false });
    }

    // eslint-disable-next-line react/prop-types
    if(prevProps.fetching && !fetching && !error) {
      this.setState({
        isLoading: false,
        errorMsg: '',
        postList: data,
        getData: true
      });
    }
    
    // eslint-disable-next-line react/prop-types
    if(prevProps.fetching && !fetching && error) {
      this.setState({ isLoading: false, errorMsg: errorMessage, getData: true });
    }
  }    

    renderItem= ({ item }) => {
      return (
        <FlatListRow {...item} />
      );
    }


    // eslint-disable-next-line complexity
    render() {
      const { errorMsg, isLoading, getData, postList } = this.state;

      return (
        <View style={styles.container}>
          <View style={styles.statusbar}>
            <TouchableOpacity style={styles.statusBarLeftTitleBg} onPress={() => this.props.navigation.navigate('HomeScreen')}> 
              {/*<Text style={styles.statusBarLeftTitle}>Back</Text>*/}
              <Ionicons name="ios-arrow-back" color="white" size={25} style={styles.backArrow}/>
            </TouchableOpacity>
            <Text style={styles.statusBarTitle}>Next</Text>
            <View style={styles.statusBarRightTitle}></View>
          </View>
          {
            (isLoading && 
              <View style={styles.loadingBg}>
                <AnimatedEllipsis numberOfDots={3}
                  minOpacity={0.4}
                  animationDelay={200}
                  style={styles.ellipsis}
                />
              </View>)       
          }
          {
            (errorMsg !== '' && !isLoading &&
              <Text style={styles.infoMessage}>Error fetching data</Text>
            )
          }
          {
            (errorMsg === '' && !isLoading && getData &&
              <FlatList
                data={postList}
                keyExtractor={postList => postList.id.toString()}
                renderItem={this.renderItem}
              />
            )
          }                                
        </View>
      );
    }
}

const mapStateToProps = (state) => {
  // eslint-disable-next-line no-restricted-syntax
  console.log('post mapStateToProps');
  //   console.log(state);
  return {
    data: state.post.posts,
    error: state.post.error,
    errorMessage: state.post.errorMessage,
    fetching: state.post.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(PostActions.getPostRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
