function YourJSON() {
    return Promise.resolve({
            "groups": [
                {
                    "GroupName": "Details",
                    "GroupOrder": 1,
                    "fields": [
                        {
                            "FieldId": 2,
                            "FieldName": "Day",
                            "FieldType": "Select",
                            "Value": "Option1",
                            "Choices": [
                                "Option1",
                                "Option2"
                            ]
                        }
                    ]
                },
                {
                    "GroupName": "Attributes",
                    "GroupOrder": 2,
                    "fields": [
                        {
                            "FieldId": 2,
                            "FieldName": "Night",
                            "FieldType": "Text",
                            "Value": "Night time",
                            "Choices": [
                                null
                            ]
                        },
                        {
                            "FieldId": 3,
                            "FieldName": "Todays Date",
                            "FieldType": "Date",
                            "Value": "2020-08-12",
                            "Choices": [
                                null
                            ]
                        }
                    ],
                }
            ]
        }
    )
}

export default YourJSON;