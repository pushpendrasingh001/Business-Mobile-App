import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    GetSliderList();
  }, []);

  const GetSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, 'Slider'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <Text style={{ fontFamily: 'Outfit-SemiBold', fontSize: 20, paddingLeft:20,paddingTop:20,marginBottom:10 }}>
        #Special For You
      </Text>
      <FlatList
      data={sliderList} 
      horizontal={true}
     
      style={{paddingLeft:10}}
    
      renderItem={({item,index}) =>{
        return (
         
          <Image
            source={{uri: item.imageUrl}}
            style={{width: 325, height: 160, marginRight:10,borderRadius:15}}
            key={index}
         />
        
       );
      }
      
      }
      />
    </View>
  );
}
