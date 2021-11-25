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

// import FormContact from "./FormContact";

function ModalComponant({
  modleVisible,
  rewardData,
  setModalVisible,
  isDone,
  // customIndex,
}) {
  console.log("iS DOne ", isDone);
  // console.log(customIndex);

  // let Cusvisible = false;

  // if (index === customIndex) {
  //   Cusvisible = true;
  // }

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

            {/* {
              if(isDone) {
                re
              }
            } */}
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modleVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable> */}
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    // marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
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
    marginBottom: 15,
    textAlign: "center",
    padding: 30,
  },
  modalHide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
export default ModalComponant;
