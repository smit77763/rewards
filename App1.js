import { StatusBar } from "expo-status-bar";
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
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={DATA}
        keyExtractor={(data) => data.tostring}
        renderItem={({ item: data }) => {
          //   console.log(typeof data);

          return (
            <View style={{ alignItems: "center", flex: 1 }}>
              <ModalComponent
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                rewardData={value}
              />

              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setValue(data.title);
                }}
              >
                <Text
                  style={{
                    color: "white",
                    margin: 20,
                    padding: 10,
                    borderRadius: 10,
                    borderWidth: 2,
                    backgroundColor: "black",
                  }}
                >
                  {data.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      {/* flatlist over */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
    backgroundColor: "yellow",

    // alignItems: "center",
    fontWeight: "bold",
  },
});
