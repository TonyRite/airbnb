import { View, Text } from 'react-native';
import React, { useState ,useMemo} from 'react';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import Listing from '@/components/Listing';
import listingData from '@/assets/data/airbnb-listings.json';


const Page = () => {
    const [category, setCategory] = useState<string>('Tiny homes');
    const items = useMemo(()=>listingData as any,[]);
    const onDataChanged = (category: string) => {
        setCategory(category);
    };

    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    header: () => <ExploreHeader onCategoryChanged={onDataChanged} />
                }}
            />
            <Listing listing={items} category={category} />

        </View>
    )
}

export default Page