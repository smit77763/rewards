import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  Dimensions,
  Button,
} from "react-native";
import ModalComponent from "./components/ModalComponent";
import RenderFlatList from "./components/RenderFlatList";
import RenderVerticalFlatList from "./components/RenderVerticalFlatlist";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");
  // cons

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
  const [sortedArray, setSortedArray] = useState([]);

  let res;

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    let arr = [];

    //merging all blocks element in an array
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

  const callApi = async () => {
    try {
      const response = await fetch(
        "https://reward-backend.herokuapp.com/api/rewardApp/1"
      );

      res = await response.json();

      // No.of batches
      const lengthOfBacthes = res.data.rewardList[0].lenOfBatches;
      // it referes to batches array
      const blockArray = res.data.rewardList[0].batches;

      // creating a new Array to store a element in the way that has been executed
      const sortedArray = [];

      for (let i = 0; i <= lengthOfBacthes; i++) {
        //no. of blocks in ith batches
        let blockLength = res.data.rewardList[0].track[i].blockNumber.length;
        //it referes to ith sorted block.
        let sortBlockArray = res.data.rewardList[0].track[i].blockNumber;

        for (let j = 0; j < blockLength; j++) {
          sortedArray.push(blockArray[i].blocks[sortBlockArray[j]]);
        }
      }

      let blockLength =
        res.data.rewardList[0].track[lengthOfBacthes].blockNumber.length;
      let findArray = res.data.rewardList[0].track[lengthOfBacthes].blockNumber;
      const lastBatchArray = blockArray[lengthOfBacthes].blocks;

      if (blockLength < 4) {
        let leftBlocksIndex = 0;

        while (leftBlocksIndex != 4) {
          const isExist = findArray.indexOf(leftBlocksIndex);
          if (isExist === -1) sortedArray.push(lastBatchArray[leftBlocksIndex]);
          leftBlocksIndex++;
        }
      }

      //update the state
      setSortedArray(sortedArray);

      // console.log("sortedArray", sortedArray);

      setReward(res.data.rewardList);
      setBatches(res.data.rewardList[0]?.batches);

      setBool(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedArray}
        renderItem={({ item: data, index }) => (
          <RenderFlatList data={data} index={index} />
        )}
        horizontal={true}
        style={styles.horizontalFlatList}
      />

      <FlatList
        data={sortedArray}
        renderItem={({ item: data, index }) => (
          <RenderVerticalFlatList data={data} index={index} />
          //  <RenderFlatList data={data} index={index} />;
        )}
        numColumns={2}
        style={styles.verticalFlatList}
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
    height: windowWidth * 0.4,
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
  verticalFlatList: {
    alignSelf: "center",
  },
  verticalFlatListView: {
    width: (windowWidth / 2) * 0.9,
    height: (windowWidth / 2) * 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: "yellow",
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  verticalFlatListText: {},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    // marginTop: 22,
  },
  modalView: {
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 1,
    backgroundColor: "#101010",
    // borderWidth: 2,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center",
    color: "white",
  },
  modalHide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
