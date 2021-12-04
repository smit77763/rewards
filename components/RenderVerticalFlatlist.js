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
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RenderVerticalFlatList = ({ data, index }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const date = moment(data.rewardDetails.rewaradDate).format("Do MMMM YYYY ");
  // console.log(" my data  is : ", data);

  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <View style={styles.verticalFlatListView}>
        <LinearGradient
          colors={["#52AFEE", "#3891CC"]}
          style={styles.linearGradient}
        >
          <View style={styles.leftRight}>
            <Text style={styles.date}>{date}</Text>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              style={{ marginBottom: 6 }}
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
              ₹ {data.rewardDetails.rewardAmount}{" "}
            </Text>
            {/* <View style={styles.info}>
              <Text>i</Text>
            </View> */}
            <FontAwesomeIcon
              style={styles.info}
              icon={faInfoCircle}
              size={20}
            />
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
                        You Participated In {data.blocksDetails[0].category}
                      </Text>
                      <Text style={styles.rightText}>
                        You Participated In {data.blocksDetails[1].category}
                      </Text>
                      <Text style={styles.rightText}>
                        You Participated In {data.blocksDetails[2].category}
                      </Text>
                      <Text style={styles.rightText}>
                        You Participated In {data.blocksDetails[3].category}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 10.9,
  },
  leftRight: {
    flexDirection: "row",
    paddingHorizontal: 2,
    marginTop: 2,
    marginLeft: 4,
    borderBottomColor: "orange",
    borderBottomWidth: 1,
    width: (windowWidth / 2) * 0.9 * 0.95,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  date: {
    color: "white",
    fontSize: 12,
  },
  rewardPrice: {
    fontFamily: "Arial",
    color: "white",
    fontSize: 48,
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
    marginTop: 60,
    marginRight: 3,
  },

  verticalFlatListView: {
    width: (windowWidth / 2) * 0.9,
    height: (windowWidth / 2) * 0.7,
    borderColor: "red",
    marginHorizontal: 4.5,
    marginBottom: 10,
    borderRadius: 10.9,
  },
  verticalFlatListText: {
    fontWeight: "bold",
    fontSize: 16,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: " rgba(0,0,0,0.7)",
  },
  modalView: {
    backgroundColor: "white",
    width: windowWidth * 0.9,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 15,
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 1,
    borderWidth: 1,
    borderColor: "#ff6600",
  },
  top: {
    marginHorizontal: 10,
  },
  modalTitle1: {
    fontSize: 15,
    borderColor: "#ffaf7a",
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  modalTitle2: {
    fontSize: 28,
    borderColor: "#ffaf7a",
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  modalTitle3: {
    fontSize: 18,
    borderColor: "#ffaf7a",
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  modalTitle4: {
    fontSize: 30,
    borderColor: "#ffaf7a",
    borderBottomWidth: 1,
    fontWeight: "bold",
    letterSpacing: 1.2,
    paddingBottom: 5,
  },

  bottom: {
    flexDirection: "row",
  },

  leftside: {
    flex: 3,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#FF6600",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: 4,
    height: 15,
    backgroundColor: "#FF6600",
  },
  rightside: {
    flex: 7,
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  rightText: {
    fontSize: 16,
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
