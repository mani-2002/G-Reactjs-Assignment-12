export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
export const EDIT_APPOINTMENT = 'EDIT_APPOINTMENT';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';

export const addAppointment = (appoinment) =>({
    type: ADD_APPOINTMENT,
    payload: appoinment,
});

export const editAppointment = (appoinment,index) => ({
    type: EDIT_APPOINTMENT,
    payload: {appoinment,index},
});

export const deleteAppointment = (index) =>({
    type: DELETE_APPOINTMENT,
    payload: index,
});