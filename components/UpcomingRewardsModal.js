import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function UpcomingRewardsModal({ visible, setVisible }) {
  return (

    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(!visible)}
    >
      <View style={styles.centeredView}>
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={styles.modalHide}
        >
          <View style={styles.modalView}>
            <View style={styles.top}>
              <Text style={styles.modalTitle1}>Reward Ahead </Text>
              <Text style={styles.modalTitle2}>₹ 1 Reward </Text>
              <Text style={styles.modalTitle3}>Complete below milestone to </Text>
              <Text style={styles.modalTitle4}>get rewarded</Text>
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
                <View style={styles.circle}>
                  <Text style={styles.leftText}>3</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.circle}>
                  <Text style={styles.leftText}>4</Text>
                </View>
              </View>
              <View style={styles.rightside}>
                <Text style={styles.rightText}>You Participated In Ja Puch Ke Aa</Text>
                <Text style={styles.rightText}>You Participated In Ja Puch Ke Aa</Text>
                <Text style={styles.rightText}>You Participated In Ja Puch Ke Aa</Text>
                <Text style={styles.rightText}>You Participated In Ja Puch Ke Aa</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  
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
    fontSize: 30,
    borderColor: "#ffaf7a",
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  modalTitle3: {
    fontSize: 16,
    borderColor: "#ffaf7a",
    fontWeight: "bold",
    letterSpacing: 1.1,
  },
  modalTitle4: {
    fontSize: 16,
    borderColor: "#ffaf7a",
    borderBottomWidth: 2,
    fontWeight: "bold",
    paddingBottom:5,
    letterSpacing: 1.1
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
export default UpcomingRewardsModal;
