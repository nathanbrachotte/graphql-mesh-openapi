// @ts-nocheck
export default {
  "name": "openApi",
  "baseUrl": "http://temp",
  "operations": [
    {
      "method": "GET",
      "path": "/spaces",
      "type": "query",
      "field": "spaces",
      "description": "User's spaces",
      "responseByStatusCode": {
        "200": {
          "responseSchema": {
            "type": "object",
            "required": [
              "spaces"
            ],
            "properties": {
              "spaces": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/Space"
                }
              }
            },
            "title": "spaces_200_response"
          }
        }
      },
      "headers": {
        "accept": "application/json"
      }
    }
  ],
  "operationHeaders": {},
  "referencedSchema": {
    "$ref": "#/definitions/_schema",
    "definitions": {
      "_schema": {
        "type": "object",
        "title": "_schema",
        "properties": {
          "query": {
            "$ref": "#/definitions/Query"
          },
          "queryInput": {
            "$ref": "#/definitions/QueryInput"
          }
        },
        "required": [
          "query"
        ]
      },
      "Query": {
        "type": "object",
        "title": "Query",
        "properties": {
          "spaces": {
            "$ref": "#/definitions/spaces_200_response"
          }
        },
        "readOnly": true
      },
      "spaces_200_response": {
        "type": "object",
        "required": [
          "spaces"
        ],
        "properties": {
          "spaces": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Space"
            }
          }
        },
        "title": "spaces_200_response"
      },
      "Space": {
        "type": "object",
        "required": [
          "name"
        ],
        "properties": {
          "name": {
            "type": "string",
            "example": "Communication",
            "nullable": true
          }
        },
        "title": "Space",
        "$resolvedRef": "/components/schemas/Space"
      },
      "QueryInput": {
        "type": "object",
        "title": "QueryInput",
        "writeOnly": true,
        "additionalProperties": true
      }
    }
  }
}