import React, {useState} from 'react';
import {ScrollView, Text, View, Image, TextInput} from 'react-native';

const MyScrollView: React.FC = () => {
  const [text, setText] = useState<string>('');
  return (
    <ScrollView>
      <Text>{text}</Text>
      <View>
        <Text>Some text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue={text}
        onChangeText={newText => {
          setText(newText);
        }}
      />
    </ScrollView>
  );
};

export default MyScrollView;
