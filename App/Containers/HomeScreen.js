import React, { Component } from 'react';
import { View, Text,  ListView,  TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import GridListRow from '../Components/GridListRow';
import CocktailsActions from '../Redux/HomeRedux';
import AnimatedEllipsis from 'react-native-animated-ellipsis';

// Styles
import styles from './Styles/HomeScreenStyles';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([]),
      errorMsg: '',
      isLoading: false,
      getData: false,
      data: []
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount(){
    // eslint-disable-next-line react/prop-types
    this.props.getAllCocktails();
  }
    
  // eslint-disable-next-line complexity
  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/prop-types
    const { data, error, errorMessage, fetching  } = this.props;

    // eslint-disable-next-line no-restricted-syntax
    console.log('componentDidUpdate');

    // eslint-disable-next-line react/prop-types
    if(!prevProps.fetching && fetching) {
      this.setState({ isLoading: true, errorMsg: '', getData: false });
    }
    // eslint-disable-next-line react/prop-types
    if(prevProps.fetching && !fetching && !error) {
      this.setState({
        isLoading: false,
        errorMsg: '',
        data: data,
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
        <GridListRow {...item} />
      );
    }


    // eslint-disable-next-line complexity
    render() {
      const { errorMsg, isLoading, getData, data } = this.state;

      return (
        <View style={styles.container}>
          <View style={styles.statusbar}>
            <View style={styles.statusBarLeftTitle}></View>
            <Text style={styles.statusBarTitle}>Home</Text>
            <TouchableOpacity style={styles.statusBarRightTitleBg} onPress={() => this.props.navigation.navigate('PostScreen')}>
              <Text style={styles.statusBarRightTitle}>Next</Text>
            </TouchableOpacity>
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
                contentContainerStyle={styles.gridCocktails}
                data={data}
                keyExtractor={data => data.id.toString()}
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
  console.log('HOME mapStateToProps');
  // eslint-disable-next-line no-restricted-syntax
  console.log(state);
  return {
    data: state.photos.cocktails,
    error: state.photos.error,
    errorMessage: state.photos.errorMessage,
    fetching: state.photos.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCocktails: () => dispatch(CocktailsActions.getCocktailsRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
