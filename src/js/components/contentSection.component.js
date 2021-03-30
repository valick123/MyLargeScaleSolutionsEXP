import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React from "react";
import {connect} from "react-redux";
import { Col, Container, Row } from "reactstrap";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
         head:{
             backgroundColor: theme.palette.primary.main,
         },
         headText:{
             color:theme.palette.primary.contrastText
         }
    })
)

const ContentSection = props => {
    const classes = useStyles()
    const renderTable = () => {
        return(
            <TableContainer >
                <Table>
                    <TableHead className={classes.head}>
                        <TableRow>
                            <TableCell>
                                <Typography className={classes.headText}>
                                    Index
                                </Typography>                                
                            </TableCell>
                            <TableCell>
                                <Typography className={classes.headText}>
                                    String
                                </Typography>
                                
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.currentData.map((item,index)=>{
                                return(
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Typography>
                                                {
                                                    index+1
                                                }
                                            </Typography>
                                            
                                        </TableCell>
                                        <TableCell>
                                            <Typography>
                                                {
                                                    item
                                                }  
                                            </Typography>
                                            
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
           
        ) 
    }
    return(
        <Container>
            <Row>
                <Col md={{size:8,offset:2}}>
                    <Paper elevation={2}>
                        <Box p={2}>
                            {
                                renderTable() 
                            }
                        </Box>
                    </Paper>
                    
                </Col>
            </Row>
            
        </Container>
    )
}

const mapStateToProps = store => ({
    currentData:store.main.currentData
})

export default connect(mapStateToProps)(ContentSection);