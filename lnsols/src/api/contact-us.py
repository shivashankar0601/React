import json
import boto3
from botocore.exceptions import ClientError
import uuid
from datetime import datetime

# Initialize the DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('RequestsTable')

def lambda_handler(event, context):
    # Initialize response variables
    status_code = 200
    response_body = {}

    try:
        # Parse the incoming JSON body
        item = json.loads(event['body'])
        print(type(event))
        print(type(event['body']))
        response_body['datatype']=type(event)
        response_body['bodytype']=type(event['body'])
        response_body['content']=event['body']
        # Ensure the required fields are present
        required_fields = ['fullName', 'email', 'phoneNumber', 'message']
        for field in required_fields:
            if field not in item:
                raise ValueError(f"Missing required field: {field}")

        # Generate a unique ID for the item
        item['id'] = str(uuid.uuid4())
        item['createdAt'] = datetime.utcnow().isoformat()
        item['modifiedDate'] = datetime.utcnow().isoformat()  # Set modified date
        item['isContacted'] = False  # Default to false

        # Put the item into the DynamoDB table
        table.put_item(Item=item)

        response_body = {
            'message': 'Item successfully added to RequestsTable!',
            'item': item
        }

    except ClientError as e:
        status_code = 400
        response_body = {
            'error': e.response['Error']['Message']
        }
    except ValueError as ve:
        status_code = 400
        return {
            "message": str(response_body)
        }
        # response_body = {
        #     'error': str(ve)
        # }
        return response_body
    except Exception as e:
        status_code = 500
        response_body = {
            'error': str(e)
        }

    return {
        'statusCode': status_code,
        'body': json.dumps(response_body),
        'headers': {
            'Content-Type': 'application/json'
        }
    }
