import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ModalComponent from "./components/ModalComponent";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");

  const DATA = [
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
    { title: "6" },
    { title: "7" },
    { title: "8" },
    { title: "9" },
    { title: "10" },
  ];

  const renderHorizontalFlatList = (data) => {
    return (
      <View style={styles.horizontalFlatListView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setModalVisible(!modalVisible);
            setValue(data.title);
          }}
        >
          <Text style={styles.horizontalFlatListText}>{data.title}</Text>
        </TouchableOpacity>

        <ModalComponent
        modleVisible={modalVisible}
        rewardData={value}
        setModalVisible={setModalVisible}


        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item: data }) => renderHorizontalFlatList(data)}
        horizontal={true}
        style={styles.horizontalFlatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalFlatList: {
    marginTop: 100,
    // borderWidth: 1,
    height: 560,
  },
  btn: {
    backgroundColor: "#FF5733",
    borderRadius: 8,
    padding: 15,
  },
  horizontalFlatListText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  horizontalFlatListView: {
    marginRight: 10,
    marginLeft: 10,
  },
});
