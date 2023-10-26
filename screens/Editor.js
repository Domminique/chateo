import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import PageContainer from '../components/PageContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images, COLORS, SIZES, FONTS } from '../constants'
import Button from '../components/Button'

export default function Walkthrough({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        marginHorizontal: 22,
                    }}
                >
                    <Image
                        source={images.nature}
                        resizeMode="contain"
                        style={{
                            width: SIZES.width * 0.8,
                            height: SIZES.width * 0.8,
                            marginVertical: 48,
                        }}
                    />

                    <Text
                        style={{
                            ...(SIZES.width <= 360
                                ? { ...FONTS.h2 }
                                : { ...FONTS.h1 }),
                            textAlign: 'center',
                            marginHorizontal: SIZES.padding * 0.8,
                        }}
                    >
                        Image Analysis Results:

            Hill, Nature, Landscape, Scenic View, Mountain, Outdoors
                    </Text>

                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text
                            style={{
                                ...FONTS.body3,
                                marginVertical: 12,
                            }}
                        >
                            



<Text style={{marginBottom:5}}></Text>
Geography Lesson: Exploring Kenyan Landscapes

Once upon a time, in the heart of Kenya, there stood a magnificent hill. This hill was not just any ordinary hill; it was a symbol of the rich and diverse landscapes that Kenya has to offer. Today, we embark on a journey to explore this mesmerizing landform and understand the geography of our beautiful country.
<Text style={{marginBottom:5}}></Text>
Introduction
<Text style={{marginBottom:5}}></Text>
As we gaze upon the image of the splendid hill, we are reminded of the importance of understanding the natural features that make up our surroundings. In this geography lesson, we'll dive into the concept of landscapes, and, specifically, the significance of hills and mountains in Kenya.
<Text style={{marginBottom:5}}></Text>
Lesson Highlights
<Text style={{marginBottom:5}}></Text>
1. Understanding Kenya's Varied Landscape:
   - Kenya is a land of diversity, with an array of landscapes ranging from savannas to mountains. Our focus today is on the picturesque hills that adorn our country.

2. The Role of Hills in Kenya:
   - Hills play a vital role in our geography. They serve as natural water catchment areas, providing the precious resource of water for rivers and communities.

3. Biodiversity in Kenyan Hills:
   - The lush vegetation on these hills hosts diverse wildlife and is an integral part of Kenya's ecosystems.

4. The Magic of Scenic Views:
   - Kenyan hills offer breathtaking panoramic views. The scenic beauty of our land is a treasure that we must preserve.

Assignments:

Assignment 1: Draw Your Favorite Kenyan Hill
   - Encourage students to draw their favorite Kenyan hill and label its features. What makes it unique?

Assignment 2: Write a Short Story About a Kenyan Hill
   - Students can let their imagination run wild and create a short story that revolves around a Kenyan hill. They should consider the flora, fauna, and people living in the vicinity.

Assignment 3: Explore a Local Hill
   - Encourage students to explore a nearby hill and document their findings. What do they observe in terms of plants, animals, and geographical features?

Conclusion:

As we wrap up this geography lesson, remember that our homeland, Kenya, is a place of awe-inspiring landscapes. By appreciating and understanding the hills, mountains, and the incredible biodiversity they offer, we become better stewards of our environment. We hope you enjoyed this journey through Kenya's enchanting geography.

<Text style={{marginBottom:5}}> This storytelling format lesson and assignments aim to engage primary school students in Kenya, helping them explore the geography and landscapes of their beautiful country.</Text>


                        </Text>

                        <Button
                            title="Publish "
                            onPress={() => navigation.navigate('BottomTabNavigation')}
                            style={{
                                width: '100%',
                                paddingVertical: 12,
                                marginBottom: 48,
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
