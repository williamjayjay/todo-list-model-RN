import React, { useState } from 'react';
import { View, Text, StyleSheet, 
  FlatList, TextInput, Button } from 'react-native';
import {Colors } from './components/colors'

const App = () => {
  const [description, setDescription] = React.useState('')
  
  const [list, setList] = React.useState([
     {description:'Item1', done:false},
     {description:'Item2', done:false},
     {description:'Item3', done:false},

  ]);
  
  const handleAddTodo = (event) => {

     let newList = {
       description:event,
       done:false
     }

     setList([...list, newList])

     setDescription('')

     console.log(list)

  }
  return (

  <View style={styles.container} >
    <Text style={styles.centralTitle} >List</Text>


    <View style={styles.anotationField} >

    
    <FlatList
    
    showsVerticalScrollIndicator={false}
    style={styles.lista}
      data={list}
      keyExtractor={(item,index)=> index  }
      renderItem={(data) => {
        return (
          <View style={styles.flatlistStyle} >

          <View  style={{  borderWidth:1, alignSelf:'flex-start', borderRadius:50,  }} > 

          <Text style={styles.textNum} >{data.index}</Text>
          </View>

          <Text style={styles.text} >{data.item.description}</Text>
          </View>
          )

      }}
      
    />
    </View>


    <View style={styles.inputView} >


    <TextInput
    value={description}
    multiline 
    style={styles.input}
    onChangeText={(text)=> {setDescription(text)}}
    
    />
    <Button onPress={()=> handleAddTodo(description)} title={"Inserir"} />
    </View>
  
  </View>


  )}

  const styles = StyleSheet.create({
    container: {
      flex:1, 
      backgroundColor:Colors.BACKWHITE,
      paddingTop:18
    },
    centralTitle:{
      fontSize:28,
      alignSelf:'center',
      color:Colors.DARKGRAY,

    },
    anotationField:{
      backgroundColor:'yellow',
      marginHorizontal:16,
      borderRadius:2,flex:1
    },
    textNum:{
      fontSize:18,
      color:Colors.DARKGRAY,
      
      fontWeight:'700',

      marginHorizontal:7.5,
      padding:2


   

    },
    text:{
      fontSize:18,
      color:Colors.DARKGRAY,
      paddingHorizontal:8,
      marginHorizontal:4,
      maxWidth:'80%'


    },
    lista:{
      marginVertical:8
    },
    inputView:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginHorizontal:8
    },
    input:{
      borderRadius:4,
      flex:1,
      margin:16,
      padding:10,
      borderWidth:3,
      borderColor:Colors.OFFLINE_GRAY,
      backgroundColor:Colors.WHITE,
      maxHeight:200
    },
    flatlistStyle:{
      flexDirection:'row',
      borderBottomWidth:1,
      borderRadius:4,
      marginHorizontal:4,
      paddingVertical:8,
      alignItems:'center',

    }
    
  })

export default App;