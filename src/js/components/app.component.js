import React from 'react';
import {HeaderComponent} from "../components/layout/header.component";
import {FooterComponent} from "../components/layout/footer.component";
import { Main } from './main.component';
import { CssBaseline } from '@material-ui/core';

const repoName = "/repo-name/";

export const AppComponent = props =>{
    
    
        return(    
                <>
                        <CssBaseline/>
                        <Main/>
                </>
        )
    
}