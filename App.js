import React, {Component} from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";


import api from './src/services/api';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:{}            
    }
    
  }
  


  componentDidMount(){
   this.load();
}
  async load(){

    
    const response = await api.get('');
    const valuesArray = response.data.items;
    console.log(valuesArray)

    let id = valuesArray.map(l=>(    
      l.id
    ))
      console.log('id', id)
    let n = valuesArray.map(l=>(    
      l.name
    ))
    this.setState({data:n})
    console.log(this.state, 'minha array')
  }

  render() {
    return (
      <SafeAreaView>     
        <View style={styles.menu}>      
          <Text style={styles.titulo}>Github ReactPop</Text>
          
        </View>   
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            console.log('item ', item)
            return (
              <View style={styles.item}>
                <Text style={styles.text2}>{item}</Text>
                
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    alignItems: "flex-start",
    backgroundColor: "#D3D3D3",
    margin: 4,
    padding: 5
  },
  titulo:{
    color: "#FFF"
  },
  text: {
    color: "#000"
  },
  text2: {
    color: "#00BFFF"
  },
  descrip:{
    color: "#333333"
  },
   menu: {
    position: 'relative',
    width: '100%',
    height: 30,
    backgroundColor: '#000000',
    justifyContent:'space-between',
    alignItems:'center',
  },
});
export default App;