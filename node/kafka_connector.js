const { Kafka, logLevel } = require("kafkajs");

// const EXAMPLE_TOPIC = "test";
// const KAFKA_BROKER_ADDRESS = "localhost:9092";
// const KAFKA_BROKER_ADDRESS = "http://localhost:9092";

const EXAMPLE_TOPIC = "awstopic";
const KAFKA_BROKER_ADDRESS =
  "ec2-3-110-218-174.ap-south-1.compute.amazonaws.com:8082";
const kafka = new Kafka({
  brokers: [KAFKA_BROKER_ADDRESS],
  logLevel: logLevel.ERROR,
});

const producer = kafka.producer();

async function produce_message() {
  const event = "I am testing the producer";
  await producer.connect();
  await new Promise(async (res) => {
    await producer.send({
      topic: EXAMPLE_TOPIC,
      messages: [{ value: event }],
    });

    setTimeout(() => res(null), 3 * Math.random() * 250);
  });
  await producer.disconnect();
  return "success";
}

exports.produce_message = produce_message;
// produce_message();
