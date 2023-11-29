import boto3
import json

endpoint_url = "http://localhost.localstack.cloud:4566"

LAMBDA_FN_NAME = 'localstack-node-kafka1'


def main():
    client = boto3.client("lambda", endpoint_url=endpoint_url)
    response = client.invoke(
        FunctionName=LAMBDA_FN_NAME,
        Payload=json.dumps({}),
        LogType='None',
    )
    print("response ", response['Payload'])
    print(json.loads(response["Payload"].read()))


if __name__ == "__main__":
    main()
