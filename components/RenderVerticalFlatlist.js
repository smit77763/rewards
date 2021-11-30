import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
// import ModalComponent from "./components/ModalComponent";
import ModalComponant from "./ModalComponent";
import moment from "moment";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RenderVerticalFlatList = ({ data, index }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState("");
  const date = moment(data.rewardDate).format("MMMM Do YYYY, h:mm A");
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <View style={styles.verticalFlatListView}>
        <Text style={styles.verticalFlatListText}>🏆Reward Earned🏆</Text>
        <Text style={styles.verticalFlatListText}>
          {"\n"}₹{data.rewardAmount}
        </Text>

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
                <Text style={styles.modalText}>🏆 Reward of 🏆</Text>
                <Text style={styles.modalText}>₹ {data.rewardAmount}</Text>
                <Text style={styles.modalText}>earned on date</Text>
                <Text style={styles.modalText}>{date}</Text>
              </View>
              {/* </View> */}
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    // marginTop: 22,
  },
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
    fontSize: 16,
    fontWeight: "bold",
  },
  modalHide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default RenderVerticalFlatList;
