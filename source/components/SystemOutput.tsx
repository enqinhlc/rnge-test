import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  ScrollView,
  TextStyle,
} from 'react-native';
import { MAX_WIDTH } from '@source/Constants';

interface Style {
  container: ViewStyle;
  text: TextStyle;
  usedSkill: TextStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    width: 300,
    height: 100,
    backgroundColor: 'rgba(0,0,0,.90)',
    borderRadius: 5,
    position: 'absolute',
    left: (MAX_WIDTH - 300) / 2,
    bottom: 10,
  },
  text: {
    fontSize: 11,
    color: 'white',
    fontWeight: 'bold',
  },
  usedSkill: {
    color: 'orange',
    fontWeight: '300',
  },
});

const SystemOutput = ({ chat }: { chat: string[] }) => {
  const scrollViewRef = useRef();
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }>
        {chat.map((chat, index) => {
          let customStyle = {};
          if (styles[chat.type]) {
            customStyle = styles[chat.type];
          }
          return (
            <Text style={[styles.text, customStyle]} key={`${index}`}>
              {chat.type}: {chat.text}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SystemOutput;
