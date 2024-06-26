﻿import React, {Component} from 'react';
import StatBase from "../StatBase";
import {_GetRandomColor} from "../../Components/Utilities/ColorsList";
import {CurrentUserInfo} from "../../CurrentUserInfo";

class MostExitUrlInSite extends StatBase {

    constructor(props) {
        super(props);
        
        CurrentUserInfo.MostExitUrlInSite = this;
        this.state={
            title: 'آمار صفحه ای که بیشترین خروج از سایت را داشته ',
            type: null,
            arrName:'MostExitUrlInSite'
        };
    }
    

    componentDidMount() {
       

        
        if(this.props.data){
            this.getVisitedPagesForCurrentSiteCallback(this.props.data)
        }
    }
}


export default MostExitUrlInSite;