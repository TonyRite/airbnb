import { View, Text, StyleSheet } from 'react-native';
import React, { useState ,useMemo, useCallback, useRef} from 'react';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import Listing from '@/components/Listing';
import listingData from '@/assets/data/airbnb-listings.json';
import listingDataGeo from '@/assets/data/airbnb-listings.geo.json'
import ListingsMaps from '@/components/ListingsMaps';
import ListingBottomSheet from '@/components/ListingBottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TouchableOpacity } from '@gorhom/bottom-sheet';


const Page = () => {
    const [category, setCategory] = useState<string>('Tiny homes');
    const items = useMemo(()=>listingData as any,[]);
    const onDataChanged = (category: string) => {
        setCategory(category);
    };


    return (
        <GestureHandlerRootView style={{flex:1}}>
            <View style={{ flex: 1}}>
            <Stack.Screen
                options={{
                    header: () => <ExploreHeader onCategoryChanged={onDataChanged} />
                }}
            />
            {/* <Listing listing={items} category={category} /> */}
            <ListingsMaps listing={listingDataGeo} />
            <ListingBottomSheet listings={items} category={category}/>
         </View>
      </GestureHandlerRootView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      height: 50,
      borderRadius: 25,
      aspectRatio: 1,
      backgroundColor: 'white',
      opacity: 0.6,
    },
  });

export default Page