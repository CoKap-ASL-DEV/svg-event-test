import React, { useState } from "react";
import { Modal } from "antd";

import ModulesSvg from "./modules-svg";

function SvgWrapper() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const moduleInfos = [
    { name: "Module 1", location: "north west" },
    { name: "Module 2", location: "north east" },
    { name: "Module 3", location: "south west" },
    { name: "Module 4", location: "south east" },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setModalContent(null);
    setIsModalVisible(false);
  };

  function onModuleClickHandler(ind) {
    setModalContent(moduleInfos[ind]);
    showModal();
  }
  return (
    <>
      <ModulesSvg callback={onModuleClickHandler} />
      <Modal title="test modal" visible={isModalVisible} onOk={hideModal} onCancel={hideModal}>
        {modalContent ? (
          <>
            <p>name: {modalContent.name}</p>
            <p>location: {modalContent.location}</p>
          </>
        ) : null}
      </Modal>
    </>
  );
}

export default SvgWrapper;
