import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
  Image,
} from "react-native";
import moment from "moment";

import Svg, {
  Circle,
  Ellipse,
  G,
  // Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  // Image,
  Symbol,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

// import InfoIcon from "@mui/icons-material/Info";
import LinearGradient from "react-native-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RenderVerticalFlatList = ({ data, index }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const date = moment(data.rewardDetails.rewaradDate).format("Do MMMM YYYY ");
  // console.log(" my data  is : ", data);

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.linearGradient}
    >
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.verticalFlatListView}>
          <View style={styles.leftRight}>
            <Text style={styles.date}>{date}</Text>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <G id="Arrow-reward" transform="translate(-152 -149)">
                <Circle
                  id="Ellipse_177"
                  data-name="Ellipse 177"
                  cx="10.5"
                  cy="10.5"
                  r="10.5"
                  transform="translate(152 149)"
                  fill="#fff"
                />
                <Path
                  id="ic_check_24px"
                  d="M8.3,17.022,5.735,14.607H3.41L8.3,19.5,18.8,9l-1.963,1.194L14.666,11.64Z"
                  transform="translate(151.09 145.502)"
                  fill="#3fac00"
                  stroke="#3fac00"
                  stroke-width="1"
                />
              </G>
            </Svg>
            {/* <Text style={styles.date}>done</Text> */}
          </View>

          <View style={styles.leftRight2}>
            <Text style={styles.rewardPrice}>
              {" "}
              ₹.{data.rewardDetails.rewardAmount}{" "}
            </Text>
            <View style={styles.info}>
              <Text>i</Text>
            </View>
            {/* <InfoIcon /> */}
          </View>

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
                    <Text style={styles.modalTitle4}>
                      {" "}
                      ₹ {data.rewardDetails.rewardAmount}{" "}
                    </Text>
                    {/* <Text style={styles.modalTitle3}> on {date} </Text> */}
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
                        You Particiapted In {data.blocksDetails[0].category}
                      </Text>
                      <Text style={styles.rightText}>
                        You Particiapted In {data.blocksDetails[1].category}
                      </Text>
                      <Text style={styles.rightText}>
                        You Particiapted In {data.blocksDetails[2].category}
                      </Text>
                      <Text style={styles.rightText}>
                        You Particiapted In {data.blocksDetails[3].category}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  leftRight: {
    flexDirection: "row",
    paddingHorizontal: 2,
    marginTop: 2,
    borderBottomColor: "orange",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    paddingTop: 10,
  },
  date: {
    fontSize: 12,
  },
  rewardPrice: {
    fontSize: 50,
    paddingTop: 15,
  },
  leftRight2: {
    flexDirection: "row",
    paddingHorizontal: 2,
    marginTop: 2,
    justifyContent: "space-between",
    paddingTop: 7,
  },

  info: {
    width: 18,
    height: 18,
    borderWidth: 1,
    marginTop: 50,
    marginLeft: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  verticalFlatListView: {
    width: (windowWidth / 2) * 0.9,
    height: (windowWidth / 2) * 0.7,
    // alignItems: "center",
    marginLeft: 15,
    // justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
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
    paddingTop: 10,
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
