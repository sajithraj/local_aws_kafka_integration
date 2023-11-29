const { produce_message } = require("./kafka_connector");

exports.handler = async (event) => {
  return await produce_message();
};

// console.log(
//   this.handler("I am testing the producer")
//     .then((res) => console.log("its success"))
//     .catch((err) => {
//       console.log("Error : ", err.message);
//     })
// );
