// components/CustomModal.js

"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function CustomModal({ children, openModal, setOpenModal }) {
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          {children} {/* This is where children are injected */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)}>I accept</Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
