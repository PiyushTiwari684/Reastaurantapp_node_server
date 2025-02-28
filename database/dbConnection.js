// import mongoose from " mongoose";

// export const dbConnection = ()=>{
//     mongoose
//     .connect(process.env.MONGO_URI,{
//       dbName:"RESTAURANT",  
//     })
//     .then(()=>{
//         console.log("Connected to database successfully!");
//     })
//     .catch((err)=>{
//         console.log(`Some error occured while connecting to database! ${err}`);
//     });
// };

import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database Successfully!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};