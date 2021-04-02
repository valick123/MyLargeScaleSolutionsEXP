import { FormControlLabel, TextField, Checkbox,ButtonGroup, Button, Paper, Box} from "@material-ui/core";
import React, { useRef } from "react";
import {connect} from "react-redux";
import { Col, Container, Row } from "reactstrap";

const SearchBar = props =>{
    // получения значения запроса из Input
    const requestInput = useRef();
    // получения значения checkbox для регистра
    const registerCheckBox = useRef();
    // поиск по подстроке
    const searchBySubstring = () =>{
        // создание регулярного выражения
        const regexp = new RegExp(`${requestInput.current.value === " "?`\\s`:requestInput.current.value}`,`g${registerCheckBox.current.checked?"i":""}`);
        // запись в хранилище
        props.dispatch({
            type:"SEARCH_WITH_DATA",
            // фильтрация по регулярному выражению
           payload:[...props.data.filter(item => item.search(regexp) !==-1?true:false)] 
        }) 
        
    }
    // сброс рузультатов поиса при пустой строке
    const searchReset = () => {
        if(!requestInput.current.value){
            props.dispatch({
                type:"RESET"
            })
        }
    }
    // поиск по длине строки
    const searchByLength = () =>{
        props.dispatch({
            type:"SEARCH_WITH_DATA",
            // фильтрация по длине строки
           payload:[...props.data.filter(item => item.length >requestInput.current.value?true:false )]
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
// подключение хранилища Redux
export default connect(mapStateToProps)(SearchBar);