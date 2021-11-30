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

import ModalComponant from "./ModalComponent";

const RenderFlatList = ({ data, index, batchesLength }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");
  const [btnColor, setBtnColor] = useState("#DA0037");
  // console.log("batchesLength : ", batchesLength);

  // const btColor=function(){

  //   if(data.isDone===true){
  //     setBtnColor('green');
  //   }
  //   return btnColor
  // }
  return (
    <View style={styles.horizontalFlatListView}>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor:
              batchesLength * 4 > index
                ? "blue"
                : data.isDone
                ? "green"
                : "#DA0037",
          },
        ]}
        onPress={() => {
          setModalVisible(!modalVisible);
          setValue(data?.category);
          //   setCustomIndex(index);
        }}
      >
        <Text style={styles.horizontalFlatListText}>{data.category}</Text>
      </TouchableOpacity>

      <ModalComponant
        data={data}
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
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  horizontalFlatListText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  horizontalFlatListView: {
    marginRight: 10,
    marginLeft: 10,
  },
});

export default RenderFlatList;
