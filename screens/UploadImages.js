import React, { useState, useEffect } from 'react';
import { Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS } from '../constants'
import { AntDesign } from '@expo/vector-icons'
import Input from '../components/Input'
import Button from '../components/Button'
import PageTitle from '../components/PageTitle'
import axios from 'axios';
import clarifai from 'clarifai'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { ClarifaiImageAnalysis} from './Editor'

const UploadImages = ({ navigation }) => {
    // const navigation = useNavigation() 
    const [image, setImage] = useState(null);
    const [concepts, setConcepts] = useState([]);
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  
      const generateGeographyLesson = async (clarifaiResults) => {
        try {
          // Extract relevant concepts from Clarifai analysis
          const concepts = clarifaiResults.data.concepts;
      
          // Create a text prompt based on analysis
          const prompt = `Teach students about geography with a focus on ${
            concepts.map((concept) => concept.name).join(', ')
          }. Explain what these concepts mean and why they are important.`;
      
          // Use GPT-3.5 to generate text based on the prompt
          const response = await openaiClient.completions.create({
            engine: 'davinci',
            prompt,
            max_tokens: 150, // Adjust as needed
          });
      
          // The response contains the generated text for your geography lesson
          return response.choices[0].text;
        } catch (error) {
          console.error('Error generating geography lesson:', error);
          return 'Error generating lesson.';
        }
      };
      
      console.log('image',image)
    console.log('concepts',concepts)
    const PAT = '562a96380bc8412b8536d9b072655d92';
    const USER_ID = 'clarifai';
    const APP_ID = 'main';
    const MODEL_ID = 'general-image-detection';
    const MODEL_VERSION_ID = '1580bb1932594c93b7e2e04456af7c6f';
    // const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';
  
    const analyzeImage = () => {
      const raw = JSON.stringify({
        "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
        },
        "inputs": [
          {
            "data": {
              "image": {
                "url": image
              }
            }
          }
        ]
      });
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
        },
        body: raw
      };
  
      fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => {
          const regions = result.outputs[0].data.regions;
  
          regions.forEach(region => {
            const boundingBox = region.region_info.bounding_box;
            const topRow = boundingBox.top_row.toFixed(3);
            const leftCol = boundingBox.left_col.toFixed(3);
            const bottomRow = boundingBox.bottom_row.toFixed(3);
            const rightCol = boundingBox.right_col.toFixed(3);
  
            region.data.concepts.forEach(concept => {
              const name = concept.name;
              const value = concept.value.toFixed(4);
  
              console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
            });
          });
        })
        .catch(error => console.log('error', error));
    };
  
  
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <PageTitle
                    title="Your Story"
                    onPress={() => navigation.navigate('Verification')}
                />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View
                        style={{
                            width: 100,
                            height: 100,
                            backgroundColor: COLORS.secondaryWhite,
                            borderRadius: 50,
                            marginVertical: 48,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                       
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                            }}
                            onPress={pickImage}
                        >
                           
                        </View>
                        {image && <Image source={{ uri: image }} style={{ width: 250, height: 200, borderRadius:10 }} />}
                    </View><View >
      <Animatable.View animation="rotate" easing="linear" iterationCount="infinite" duration={3000}>
        {/* Add your spinner component here */}
      </Animatable.View>
    </View>

                    <View style={{ width: '100%', paddingHorizontal: 22 }}>
                        <Input
                        style={{ height: 52 }}
                            id="objective"
                            placeholder="Educational Objectives "
                        />
                        {/* <Input
                            id="lastName"
                            placeholder="Last Name (Optional) "
                        /> */}


                         <Button 
                         title="Pick an image "
                          onPress={pickImage} 
                          style={{
                            width: '100%',
                            paddingVertical: 12,
                            marginBottom: 48,
                        }}
                          
                          />



                        <Button
                            title="Process"
                            style={{
                                width: '100%',
                                paddingVertical: 12,
                                marginBottom: 48,
                            }}
                            onPress={()=> {analyzeImage
                            navigation.navigate('Editor')}}
                        />
                    </View>
                   
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default UploadImages
