import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import moment from "moment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RenderVerticalFlatList = ({ data, index }) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const date = moment(data.rewardDate).format("MMMM Do YYYY, h:mm A");
  console.log("data : ",data);
  
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <View style={styles.verticalFlatListView}>
        <Text style={styles.verticalFlatListText}>🏆Reward Earned🏆</Text>
        {/* <Text style={styles.verticalFlatListText}>
          {"\n"}₹{data.rewardAmount}
        </Text> */}

        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.modalHide}
            >
              <View style={styles.modalView}>
                <Text style={styles.modalText}>🏆 Reward of 🏆</Text>
                <Text style={styles.modalText}>₹ {data.rewardAmount}</Text>
                <Text style={styles.modalText}>earned on date</Text>
                <Text style={styles.modalText}>{date}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal> */}

        {/* new Modal */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.modalHide}
            >
              <View style={styles.modalView}>
                <View style={styles.top}>
                  <Text style={styles.modalTitle1}>Reward Earned </Text>
                  <Text style={styles.modalTitle2}>Congratulations</Text>
                  <Text style={styles.modalTitle3}>You Have Earned</Text>
                  <Text style={styles.modalTitle4}>₹ 1</Text>
                </View>
                <View style={styles.bottom}>
                  <View style={styles.leftside}>
                    <View style={[styles.circle]}>
                      <Text style={styles.leftText}>1</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.circle}>
                      <Text style={styles.leftText}>2</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View
                      style={styles.circle}
                      // { backgroundColor: "#FFAF7A" }
                    >
                      <Text style={styles.leftText}>3</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.circle}>
                      <Text style={styles.leftText}>4</Text>
                    </View>
                  </View>
                  <View style={styles.rightside}>
                    <Text style={styles.rightText}>
                      You Particiapted In {data[0].category}
                      
                    </Text>
                    <Text style={styles.rightText}>
                      You Particiapted In {data[1].category}
                    </Text>
                    <Text style={styles.rightText}>
                      You Particiapted In {data[2].category}
                    </Text>
                    <Text style={styles.rightText}>
                      You Particiapted In {data[3].category}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  verticalFlatListView: {
    width: (windowWidth / 2) * 0.9,
    height: (windowWidth / 2) * 0.9,
    alignItems: "center",
    marginLeft: 15,
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: "#EDEDED",
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
  verticalFlatListText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "rgba(255, 255, 255, 0.5)",
  // },
  // modalView: {
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: "center",
  //   shadowOffset: {
  //     width: 0,
  //     height: 0,
  //   },
  //   elevation: 1,
  //   backgroundColor: "#101010",
  // },
  // modalText: {
  //   marginBottom: 5,
  //   textAlign: "center",
  //   color: "white",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  // modalHide: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "100%",
  // },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
    backgroundColor: " rgba(0,0,0,0.25)",

    // opacity: 0.2,
  },
  modalView: {
    // zIndex: 10,
    // backgroundColor: "grey",
    backgroundColor: "white",
    width: windowWidth * 0.9,
    borderRadius: 20,
    // padding: 35,
    // paddingTop: 10,
    // paddingBottom: 30,
    paddingTop:10,
    paddingBottom: 30,
    paddingHorizontal: 15,
    justifyContent: "center",
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    elevation: 1,
    // borderWidth: 2,
    // flex: 1,
    // flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ff6600",
  },
  top: {
    marginHorizontal: 10,
    // borderWidth:1
  },
  modalTitle1: {
    fontSize: 15,
    // marginBottom:20,

    borderColor: "#ffaf7a",
    // borderBottomWidth: 1,
    fontWeight: "bold",
    letterSpacing: 1.2,
    // marginLeft: 25,
    // marginRight: 25,
  },
  modalTitle2: {
    fontSize: 28,
    // marginHorizontal: 10,
    borderColor: "#ffaf7a",
    // borderBottomWidth: 1,
    fontWeight: "bold",
    letterSpacing: 1.2,
    // marginLeft: 25,
    // marginRight: 25,
  },
  modalTitle3: {
    fontSize: 18,
    // marginHorizontal: 10,
    borderColor: "#ffaf7a",
    // borderBottomWidth: 1,
    fontWeight: "bold",
    letterSpacing: 1.2,
    // marginLeft: 25,
    // marginRight: 25,
  },
  modalTitle4: {
    fontSize: 28,
    // marginHorizontal: 10,
    borderColor: "#ffaf7a",
    borderBottomWidth: 1,
    fontWeight: "bold",
    letterSpacing: 1.2,
    // marginLeft: 25,
    // marginRight: 25,
  },

  bottom: {
    flexDirection: "row",
  },

  leftside: {
    flex: 3,
    // borderWidth: 1,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    // backgroundColor: "black",
    backgroundColor: "#FF6600",
    justifyContent: "center",
    alignItems: "center",

    // marginVertical: 10,
  },
  line: {
    width: 4,
    height: 15,
    // backgroundColor: "black",
    // overflow: "hidden",
    backgroundColor: "#FF6600",
  },
  rightside: {
    flex: 7,
    // borderWidth: 1,
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  rightText: {
    // marginBottom: 13,
    fontSize: 16,
    // borderWidth: 1,
    color: "black",
  },
  leftText: {
    color: "white",
    fontSize: 18,
  },
 
  modalHide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default RenderVerticalFlatList;
