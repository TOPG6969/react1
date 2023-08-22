import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const useStyles = makeStyles((theme) => ({
  autocomplete: {
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '82%',
    },
  },
}));
function MyAutocomplete(props) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState(null);
  const options = [
    "Apple",
    "Microsoft",
    "Amazon Web Services (AWS)",
    "Google",
    "Meta",
    "Alibaba Cloud",
    "Oracle",
    "IBM",
    "Tencent",
    "Adobe",
    "Amazon",
    "Salesforce",
    "SAP",
    "VMware",
    "Cisco Systems",
    "Intel",
    "NVIDIA",
    "Qualcomm",
    "Zoom Video Communications",
    "Square",
    "Netflix",
    "Spotify",
    "Atlassian",
    "Slack",
    "Samsung Electronics",
    "Sony",
    "Dell Technologies",
    "ServiceNow",
    "Intuit",
    "Baidu",
    "Tata Consultancy Services (TCS)",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant",
    "Hewlett Packard Enterprise (HPE)",
    "Lenovo",
    "ASUS",
    "HP Inc.",
    "GitHub",
    "Dropbox",
    "Twilio",
    "Shopify",
    "Palantir Technologies",
    "UiPath",
    "Snowflake",
    "Splunk",
    "Fortinet",
    "CrowdStrike",
    "DocuSign"
  ];
  function onSumit(){
    props.onSearch(selectedValue);
  }
  return (<div className='search'>
    <Container>
      <Grid container justifyContent="center">
        <Autocomplete
          className={classes.autocomplete}
          options={options}
          onChange={(event, newValue) => {
            setSelectedValue(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select an option" variant="outlined" fullWidth />
          )}
        />
      </Grid>
      <Grid container justifyContent="center">
        <div>Selected Value: {selectedValue}</div>
      </Grid>
    </Container>
    <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={onSumit}>Search Tag</Button>
              <Button variant="outlined">Popular Searches</Button>
            </Stack>
    </div>
  );
}
export default MyAutocomplete;
