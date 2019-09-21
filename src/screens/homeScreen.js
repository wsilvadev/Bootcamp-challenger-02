import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Style from '../styles/styles';
import api from '../services/api';
// import { Container } from './styles';

export default class screens extends Component {
  state = {
    docs: [],
    OrgRepos: '',
  };
  saveRepos = async () => {
    const {OrgRepos} = this.state;
    const response = await api.get(`/repos/${OrgRepos}`);

    this.setState({docs: response.data});
    // const response = await fetch('  https://api.github.com/users/wsilvadev');
  };

  static navigationOptions = {
    title: 'GitIssues',
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1,
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
  };
  renderItem = ({item}) => {
    {
      console.log(this.state.docs);
    }
    return (
      <View style={Style.ContainerFlexList}>
        <Image
          source={{
            uri: `https://avatars3.githubusercontent.com/u/${item.id}?v=4`,
          }}
          style={Style.Imagen}
        />
        <View style={Style.RenderText}>
          <Text
            style={Style.TitleApiName}
            numberOfLines={2}
            ellipsizeMode={'middle'}>
            {item.name}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="middle"
            style={Style.ApiDescription}>
            {item.description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ScreenNative', {
              name: item.name,
              textRepos: this.state.OrgRepos.toString(),
            })
          }>
          <Image source={require('../img/icon.png')} style={Style.Icon} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={Style.ContainerMain}>
        <View style={Style.ContainerInput}>
          <TextInput
            placeholder="Adicionar novo repositório"
            style={Style.InputContainer}
            onChangeText={Org_repos =>
              this.setState({OrgRepos: Org_repos.toString()})
            }
          />
          <TouchableOpacity style={Style.ButtonInput} onPress={this.saveRepos}>
            <Text style={Style.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.linhaView} />
        <View>
          <FlatList
            data={[this.state.docs]}
            keyExtractor={item => item.node_id}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
