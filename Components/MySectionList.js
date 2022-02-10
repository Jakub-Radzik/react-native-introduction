import {SectionList, Text, StyleSheet} from "react-native";
import React from 'react';
const MySectionList = () => {
    return (
        <SectionList
            sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader = {({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
    );
}

const styles = StyleSheet.create(
    {
        item: {
            padding: 10,
            fontSize: 18,
            height: 44
        },

        sectionHeader: {
            paddingTop: 2,
            fontSize:20,
            fontWeight: 'bold',
            backgroundColor: 'rgb(255,0,0)'
        }
    }
)

export default MySectionList;