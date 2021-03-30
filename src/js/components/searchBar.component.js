import { FormControlLabel, TextField, Checkbox,ButtonGroup, Button, Paper, Box} from "@material-ui/core";
import React, { useRef } from "react";
import {connect} from "react-redux";
import { Col, Container, Row } from "reactstrap";

const SearchBar = props =>{
    const requestInput = useRef();
    const registerCheckBox = useRef();

    const searchBySubstring = () =>{
        const regexp = new RegExp(`${requestInput.current.value}`,`g${registerCheckBox.current.checked?"i":""}`)
        props.dispatch({
            type:"SEARCH_WITH_DATA",
           payload:[...props.data.filter(item => regexp.test(item)?true:false)]
        }) 
        
    }
    const searchReset = () => {
        if(requestInput.current.value === ''){
            props.dispatch({
                type:"RESET"
            })
        }
    }
    const searchByLength = () =>{
        console.log(requestInput.current.value)
        props.dispatch({
            type:"SEARCH_WITH_DATA",
           payload:[...props.data.filter(item => item.length >=requestInput.current.value?true:false )]
        }) 
    }
    return(
        <Container>
            <Row>
                <Col md={{size:8,offset:2}} className="mb-2">
                    <Paper elevation={2} >
                        <Box p={2}>
                            <TextField margin="normal" label="Request" variant="outlined" fullWidth onInput={searchReset} inputRef={requestInput} type="text"/>
                            <FormControlLabel 
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Register"
                                inputRef={registerCheckBox}
                            />
                            <ButtonGroup variant="contained" color="primary">
                                <Button onClick={searchByLength}>
                                    By lenght
                                </Button>
                                <Button onClick={searchBySubstring}>
                                    By subString
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Paper>
                    
                    
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps = store => ({
    data:store.main.data
})

export default connect(mapStateToProps)(SearchBar);