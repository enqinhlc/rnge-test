import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Image,
  TextStyle,
  ImageStyle,
  ScrollView,
} from 'react-native';

interface Style {
  container: ViewStyle;
  subContainer: ViewStyle;
  itemContainer: ViewStyle;
  itemText: TextStyle;
  imageContainer: ViewStyle;
  imageStyle: ImageStyle;
  title: TextStyle;
}
const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    left: 50,
    right: 50,
    top: 50,
    bottom: 50,
    zIndex: 30,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 12,
    paddingVertical: 10,
    backgroundColor: 'gray',
    textAlign: 'center',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
  },
  itemContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 1,
  },
  imageContainer: {
    width: 30,
    height: 30,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  itemText: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Inventory = ({ items }: { items: [] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      <ScrollView contentContainerStyle={styles.subContainer}>
        {items.map((item, index) => {
          return (
            <View key={`${index}`} style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={item.image}
                  resizeMode="stretch"
                  style={styles.imageStyle}
                />
              </View>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Inventory;
