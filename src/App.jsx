import { useState } from "react";
import Modal from "react-modal";
import { CALORIE_RECORD_DATA } from "./data/dummy-calorie-record-data";
import EditRecordForm from "./components/EditRecordForm";
import SelectSection from "./components/SelectSection";
import styles from "./App.module.css";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "transparent",
    padding: "0 12px",
    width: "fit-content",
  },
  overlay: {
    backgroundColor: "#0000004a",
  },
};

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [data, setData] = useState(CALORIE_RECORD_DATA);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>calorie tracker</h1>
      <SelectSection data={data} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <EditRecordForm handleNewData={setData} handleCloseForm={closeModal} />
      </Modal>
      <button className={styles.openFormBtn} onClick={openModal}>
        add meal
      </button>
    </div>
  );
}

export default App;
