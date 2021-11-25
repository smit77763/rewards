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
import ModalComponent from "./components/ModalComponent";
import RenderFlatList from "./components/RenderFlatList";

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

  // const [data, setData] = useState();
  const [batches, setBatches] = useState([]);
  const [reward, setReward] = useState();
  const [batchesLength, setBatchLength] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const [bool, setBool] = useState(false);
  const [customIndex, setCustomIndex] = useState(-1);

  let res;

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    let arr = [];

    for (let i = 0; i < batchesLength; i++) {
      // setBlocks([...blocks, ...batches[i]?.blocks]);
      const temp = [...batches[i]?.blocks];
      arr = [...arr, ...temp];
    }

    setBlocks(arr);
  }, [bool]);

  useEffect(() => {
    setBatchLength(batches.length);
  }, [batches]);

  // useEffect(() => {
  //   // setBatchLength(batches.length);
  //   setBatches(reward.batches);
  // }, [reward]);

  const callApi = async () => {
    try {
      const response = await fetch(
        "https://reward-backend.herokuapp.com/api/rewardApp/1"
      );

      // console.warn(response.json());
      res = await response.json();
      // const finalRes = JSON.stringify(res);
      // console.log(JSON.stringify(res));
      // console.log(res.data.length);

      // setBool(!bool);

      setReward(res.data.rewardList);
      setBatches(res.data.rewardList[0]?.batches);

      // setBlocks(batches[0]?.blocks);

      // console.log(batches[0].blocks);

      // console.log("reward", reward);
      // console.log("Batch", batches);
      // console.log("batch-length", batchesLength);
      console.log("blocks", blocks);

      setBool(true);
      // console.log("call api call thai");
    } catch (e) {
      console.log(e);
    }
  };

  // const renderHorizontalFlatList = (data, index) => {
  //   // console.log("data", data);
  //   console.log(index);
  //   return (
  //     <View style={styles.horizontalFlatListView}>
  //       <TouchableOpacity
  //         style={styles.btn}
  //         onPress={() => {
  //           setModalVisible(!modalVisible);
  //           setValue(data?.category);
  //           setCustomIndex(index);
  //         }}
  //       >
  //         <Text style={styles.horizontalFlatListText}>{data.category}</Text>
  //       </TouchableOpacity>

  //       <ModalComponent
  //         modleVisible={modalVisible}
  //         rewardData={value}
  //         isDone={data.isDone}
  //         setModalVisible={setModalVisible}
  //         // customIndex={customIndex}
  //       />
  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={blocks}
        renderItem={({ item: data, index }) => (
          <RenderFlatList data={data} index={index} />
        )}
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
