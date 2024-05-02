import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addAppointment,
  editAppointment,
  deleteAppointment,
} from "./store/action";
import "./App.css";
import Form from "./components/TopForm";
import Table from "./components/BottomTable";

function App(props) {
  const [editIndex, setEditIndex] = useState(null);
  const [mode, setMode] = useState("add");

  const { tableData, addAppointment, editAppointment, deleteAppointment } =
    props;

  const [formInputData, setFormInputData] = useState({
    patientName: "",
    gender: "",
    age: "",
    phoneNumber: "",
    date: "",
    time: "",
    doctorName: "",
    status: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      id: editIndex !== null ? tableData[editIndex].id : Date.now(),
      patientName: formInputData.patientName,
      gender: formInputData.gender,
      age: formInputData.age,
      phoneNumber: formInputData.phoneNumber,
      date: formInputData.date,
      time: formInputData.time,
      doctorName: formInputData.doctorName,
      status: formInputData.status,
    };

    if (mode === "edit") {
      editAppointment(payload, editIndex);
      setEditIndex(null);
      setMode("add");
    } else {
      addAppointment(payload);
    }

    setFormInputData({
      patientName: "",
      gender: "",
      age: "",
      phoneNumber: "",
      date: "",
      time: "",
      doctorName: "",
      status: "",
    });
  };

  const onEdit = (rowData, index) => {
    setFormInputData({ ...rowData });
    setEditIndex(index);
    setMode("edit");
  };

  const onDelete = (index) => {
    deleteAppointment(index);
  };

  return (
    <div>
      <Form
        handleChange={handleChange}
        formInputData={formInputData}
        handleSubmit={handleSubmit}
      />
      <Table tableData={tableData} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

const stateToProps = (state) => ({
  tableData: state.appointments.tableData,
});

const dispatchToProps = (dispatch) => ({
  addAppointment: (appointment) => dispatch(addAppointment(appointment)),
  editAppointment: (appointment, index) =>
    dispatch(editAppointment(appointment, index)),
  deleteAppointment: (index) => dispatch(deleteAppointment(index)),
});

export default connect(stateToProps, dispatchToProps)(App);
