// // import mongoose from "mongoose";
// // import validator from "validator";

// // const reservationSchema = new mongoose.Schema({
// //     firstName:{
// //         type:String,
// //         required:true,
// //         minLength: [3,"First name must contain at least 3 characters!"],
// //         maxLength: [30,"First name cannot exceed 30 characters!"],
// //     },
// //     lastName:{
// //         type:String,
// //         required:true,
// //         minLength:[3,"First name must contain at least 3 characters!"],
// //         maxLength: [30,"First name cannot exceed 30 characters!"],
// //     },
// //     email:{
// //         type:String,
// //         required:true,
// //         validate:[validator.isEmail,"Provide a valid email"],   
// //     },
// //     phone:{
// //         type:String,
// //         required:true,
// //         minLength:[10,"phone number must contain min 10"],
// //         maxLength: [12,"phone number cannot exceed 12 digit"],

// //     },
// //     time:{
// //         type:String,
// //         required:true,
// //     },
// //     date:{
// //         type:String,
// //         required:true,
// //     },
// // });

// // export const Reservation = mongoose.model("Reservation",reservationSchema)

// import mongoose from "mongoose";
// import validator from "validator";

// const reservationSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//     minLength: [3, "First name must be of at least 3 Characters."],
//     maxLength: [30, "First name cannot exceed 30 Characters."],
//   },
//   lastName: {
//     type: String,
//     required: true,
//     minLength: [3, "Last name must be of at least 3 Characters."],
//     maxLength: [30, "Last name cannot exceed 30 Characters."],
//   },
//   date: {
//     type: String,
//     required: true,
//   },
//   time: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     validate: [validator.isEmail, "Provide a valid email"],
//   },
//   phone: {
//     type: String,
//     required: true,
//     minLength: [10, "Phone number must contain minimum 10 Digits."],
//     maxLength: [12, "Phone number can contain maximum 12  Digits."],
//   },
// });

// export const Reservation = new mongoose.model("Reservation", reservationSchema);

import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be of at least 3 Characters."],
    maxLength: [30, "Last name cannot exceed 30 Characters."],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain minimum 10 Digits."],
    maxLength: [12, "Phone number can contain maximum 12  Digits."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation;