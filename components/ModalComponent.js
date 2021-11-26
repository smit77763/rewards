import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import moment from "moment";

// import FormContact from "./FormContact";

function ModalComponant({
  modleVisible,
  rewardData,
  setModalVisible,
  isDone,
  data,
}) {
  const date = moment(data.date).format("MMMM Do YYYY, h:mm A");
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modleVisible}
      onRequestClose={() => setModalVisible(!modleVisible)}
    >
      <View style={styles.centeredView}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modleVisible)}
          style={styles.modalHide}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {isDone
                ? `you have completed ${rewardData}`
                : `you have to finish ${rewardData}`}
            </Text>
            <Text style={styles.modalText}>Category : {data.category}</Text>
            <Text style={styles.modalText}>
              Fees : {data.free ? "free" : data.fees}
            </Text>
            {isDone && <Text style={styles.modalText}>Date : {date}</Text>}
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modleCon: {},
  btnClose: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    margin: 20,
  },
  text: {
    color: "white",
  },
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
export default ModalComponant;
