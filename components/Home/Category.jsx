import { View, Text,FlatList,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from './../../constants/Colors'
import {collection,getDocs,query} from 'firebase/firestore'

import {db} from '../../configs/FirebaseConfig'
import CategoryItem from './CategoryItem'

export default function Category() {
  const [categoryList, setCategoryList] =useState([])
  useEffect(()=>{
    GetCategoryList();
  },[])
  const GetCategoryList=async ()=>{
    setCategoryList([]) 
    const q=query(collection(db, 'Category'))
    const querySnapshot=await getDocs(q);
    querySnapshot.forEach((doc)=>{
     setCategoryList(prev=>[...prev, doc.data()])
    })
  }
  return (
    <View>
      <View style={{padding:20,display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,alignItems:'center'}}>
      <Text  style={{ fontFamily: 'Outfit-SemiBold', fontSize: 20,marginBottom:10 }}>Category</Text>
      <Text style={{fontFamily: 'Outfit-Medium',fontSize:15,color:Colors.PRIMARY}}>
        View all
      </Text>
    </View>
    <FlatList
      data={categoryList} 
      horizontal={true}
      style={{marginLeft:10 }}
      renderItem={({item,index}) =>(
      <CategoryItem category={item} key={index}
      
      onCategoryPress={(category)=>console.log(category)
      }
      />
      )
      }
      />
         
    </View>
  )
}