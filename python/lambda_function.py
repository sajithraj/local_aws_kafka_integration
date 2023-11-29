import json
from time import sleep
from json import dumps
from kafka import KafkaProducer

EXAMPLE_TOPIC = "awstopic"
KAFKA_BROKER_ADDRESS = "ec2-3-110-218-174.ap-south-1.compute.amazonaws.com:8082"


def lambda_handler(event, context):

    my_producer = KafkaProducer(
        bootstrap_servers=[KAFKA_BROKER_ADDRESS],
        value_serializer=lambda x: dumps(x).encode('utf-8'))

    for n in range(5):
        my_data = {'num': n}
        print("my_data ", my_data)
        my_producer.send(EXAMPLE_TOPIC, value=my_data)
        sleep(2)

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }


lambda_handler("", "")
