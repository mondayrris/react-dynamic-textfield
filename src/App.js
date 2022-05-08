// noinspection JSIgnoredPromiseFromCall

import './App.css';
import {Accordion, AccordionDetails, AccordionSummary, Box, MenuItem, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import YourJSON from "./YourJSON";

const App = () => {
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        // imitate an api call
        setDetails(await YourJSON());
    };

    const generalFieldTypes = (fieldType) => {
        return ["Text", "Decimal", "Number"].includes(fieldType);
    }
    const dateFieldTypes = (fieldType) => {
        return fieldType === 'Date';
    }

    const handleChange = (e, fieldIndex, groupIndex) => {
        console.log(JSON.stringify(details));

        let update = details;
        update['groups'][groupIndex]['fields'][fieldIndex]['Value'] = e.target.value;

        console.log(JSON.stringify(update));

        setDetails(update);
    }

    const DynamicField = (field, fieldIndex, groupIndex) => {
        const {FieldId, FieldName, FieldType, Value, Choices} = field;

        if (generalFieldTypes(FieldType)) {
            return <TextField
                defaultValue={Value}
                onChange={
                    (e) => handleChange(e, fieldIndex, groupIndex)
                }
                label={FieldName}
                InputLabelProps={{shrink: true}}
            />;
        } else if (dateFieldTypes(FieldType)) {
            return <TextField
                type="date"
                defaultValue={Value}
                onChange={
                    (e) => handleChange(e, fieldIndex, groupIndex)
                }
                label={FieldName}
                InputLabelProps={{shrink: true}}
            />;
        } else {
            return <TextField
                defaultValue={Value}
                onChange={
                    (e) => handleChange(e, fieldIndex, groupIndex)
                }
                select
                label={FieldName}
            >
                {
                    Choices.map((choice) => (
                        <MenuItem key={choice} value={choice}>
                            {choice}
                        </MenuItem>
                    ))
                }
            </TextField>;
        }
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <div className="App">
            {details && details["groups"]?.map((group, groupIndex) => {
                    const {GroupName, GroupOrder, fields} = group;
                    return (
                        <Accordion>
                            {/*I won't have your expandIcon, thereby remove it*/}
                            <AccordionSummary>
                                <Typography>{GroupName}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box>
                                    {
                                        fields.map((field, fieldIndex) => {
                                            return DynamicField(field, fieldIndex, groupIndex);
                                        })
                                    }
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    );
                }
            )}
        </div>
    );
}

export default App;