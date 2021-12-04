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
  ScrollView,
} from "react-native";
import RenderFlatList from "./components/RenderFlatList";
import RenderVerticalFlatList from "./components/RenderVerticalFlatlist";
import UpcomingRewardsModal from './components/UpcomingRewardsModal'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [batches, setBatches] = useState([]);
  const [reward, setReward] = useState();
  const [batchesLength, setBatchesLength] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const [bool, setBool] = useState(false);
  const [sortedArray, setSortedArray] = useState([]);
  const [rewardArray, setRewardArray] = useState([]);
  const [batchWiseBlock, setBatchWiseBlock] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false)
  let res;

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    let arr = [];

    //merging all blocks element in an array
    for (let i = 0; i < batchesLength; i++) {
      const temp = [...batches[i]?.blocks];
      arr = [...arr, ...temp];
    }
    setBlocks(arr);

    let temp2 = [];
    for (let i = 0; i < batchesLength; i++) {
      const temp3 = [...batches[i]?.blocks];

      temp2 = [...temp2, temp3];
    }
    setBatchWiseBlock(temp2);
  }, [bool]);

  const callApi = async () => {
    try {
      const response = await fetch(
        "https://reward-backend.herokuapp.com/api/rewardApp/10"
      );

      res = await response.json();
      setBatchesLength(res.data.rewardList[0].lenOfBatches);
      // No.of batches
      const lengthOfBacthes = res.data.rewardList[0].lenOfBatches;
      // it referes to batches array
      const blockArray = res.data.rewardList[0].batches;

      // creating a new Array to store a element in the way that has been executed
      let sortedSequenceArray = [];

      for (let i = 0; i < lengthOfBacthes; i++) {
        let blockSequence = [];

        //no. of blocks in ith batches
        let blockLength = res.data.rewardList[0].track[i].blockNumber.length;
        //it referes to ith sorted block.
        let sortBlockArray = res.data.rewardList[0].track[i].blockNumber;

        for (let j = 0; j < blockLength; j++) {
          blockSequence.push(blockArray[i].blocks[sortBlockArray[j]]);
        }
        // sortedSequenceArray.push(blockSequence);
        sortedSequenceArray.push({
          rewardDetails: res.data.rewardList[0].rewardData[i],
          blocksDetails: blockSequence,
        });
      }

      setRewardArray([...res.data.rewardList[0].rewardData]);
      //update the state
      setSortedArray(sortedSequenceArray);
      setReward(res.data.rewardList);
      setBatches(res.data.rewardList[0]?.batches);
      // console.log(batches);

      setBool(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <TouchableOpacity style={styles.upcominRewardButton}
            onPress={() => {
              setIsModalVisible(true)
            }}
          >
            <Text style={styles.upcominRewardButtonText}>Upcoming rewards on your path </Text>
            <FontAwesomeIcon style={{ marginLeft: 20 }} icon={faArrowRight} size={20} color={'#52AFEE'} />
          </TouchableOpacity>
          <UpcomingRewardsModal visible={isModalVisible} setVisible={(visible) => {
            setIsModalVisible(visible)
          }} />
        </View>

        <FlatList
          data={sortedArray}
          renderItem={({ item: data, index }) => (
            <RenderVerticalFlatList data={data} index={index} />
          )}
          numColumns={2}
          style={styles.verticalFlatList}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  upcominRewardButton: {
    height: windowHeight * 0.05,
    // width: '100%',
    marginHorizontal: 20,
    elevation: 5,
    marginVertical: 15,
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row'
  },
  upcominRewardButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  verticalFlatList: {
    marginHorizontal: 10
  },

  container: {
    marginTop: 30,
    height: windowHeight,
    backgroundColor: "white",
  },
  horizontalFlatList: {
    marginTop: 100,
    height: windowWidth * 0.2,
  },
});
