import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
// import ModalComponent from "./components/ModalComponent";
import ModalComponant from "./ModalComponent";

const RenderFlatList = ({ data, index }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");

  //   console.log(index);
  return (
    <View style={styles.horizontalFlatListView}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setModalVisible(!modalVisible);
          setValue(data?.category);
          //   setCustomIndex(index);
        }}
      >
        <Text style={styles.horizontalFlatListText}>{data.category}</Text>
      </TouchableOpacity>

      <ModalComponant
        modleVisible={modalVisible}
        rewardData={value}
        isDone={data.isDone}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

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

export default RenderFlatList;
