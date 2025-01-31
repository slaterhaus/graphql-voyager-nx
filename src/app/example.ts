export const example = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ]
          },
          {
            "name": "users",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "User"
              }
            },
            "args": []
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              },
              {
                "name": "email",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String"
                  }
                }
              },
              {
                "name": "role",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "Role"
                  }
                }
              },
              {
                "name": "managerId",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID"
                }
              }
            ]
          },
          {
            "name": "updateUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              },
              {
                "name": "name",
                "type": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              },
              {
                "name": "email",
                "type": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              },
              {
                "name": "role",
                "type": {
                  "kind": "ENUM",
                  "name": "Role"
                }
              },
              {
                "name": "managerId",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID"
                }
              }
            ]
          },
          {
            "name": "deleteUser",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID"
                  }
                }
              }
            ]
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID"
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "Role"
              }
            }
          },
          {
            "name": "manager",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            }
          },
          {
            "name": "directReports",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "User"
              }
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "Role",
        "enumValues": [
          {
            "name": "EMPLOYEE"
          },
          {
            "name": "MANAGER"
          },
          {
            "name": "DIRECTOR"
          },
          {
            "name": "VP"
          },
          {
            "name": "CEO"
          }
        ]
      }
    ]
  }
}
