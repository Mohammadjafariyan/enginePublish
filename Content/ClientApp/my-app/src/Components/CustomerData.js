﻿import React, {Component} from 'react';
import {DataHolder} from "../Help/DataHolder";
import Table from "react-bootstrap/Table";
import {InputGroup, FormControl} from "react-bootstrap";
import {_showError, _showMsg} from "../Pages/LayoutPage";

import {MyCaller} from './../Help/Socket';
import {CurrentUserInfo} from "../CurrentUserInfo";


class CustomerData extends Component {
    state = {};


    constructor(props) {
        super(props);
        CurrentUserInfo.CustomerData=this;
    }


    getCustomerDataListCallback(res) {
        if (!res || !res.Content) {
            return;
        }
        
        
        

        this.setState({customerDataList: res.Content});
    }

    componentDidMount() {

        if (!this.props.Customer) {
            return;
        }
        MyCaller.Send('GetCustomerDataList', {customerId: this.props.Customer.Id})
    }

    render() {

        debugger
        if (!this.props.Customer) {
            return <></>;
        }

        return (
            <div>


                <div
                    className={"card "}>
                    <div className="card-header">
                        اطلاعات کاربر
                    </div>

                    <div className="card-body" style={{display: 'flex', textAlign: 'center'}}>

                        <Table striped bordered hover>
                            <thead>

                            </thead>
                            <tbody>
                            <tr>

                                <td colSpan={'2'} style={{
                                    padding: '0px',
                                    margin: '0px'
                                }}>

                                    <form autocomplete="on">
                                        <small style={{display: 'flex'}}>

                                            <div className="p-inputgroup flex-1">
    <span >
          <div  className="p-inputgroup-addon" id="basic-addon1" onClick={() => {


              if (this.state.sending){

                  _showMsg('لطفا تا ذخیره کلید قبلی صبر کنید')
              }else{
                  this.AddCustomerData();
              }

          }}>

                                                        {!this.state.sending &&
                                                            <i className={'fa fa-plus'}></i>

                                                        }

              {this.state.sending &&
                  <i className={'fa fa-circle-o-notch'}></i>

              }

                                                    </div>
        <i className="pi pi-user"></i>
    </span>
                                                <FormControl autoComplete="on"
                                                             placeholder="مقدار"
                                                             aria-label="Username"
                                                             aria-describedby="basic-addon1"

                                                             value={this.state.value}

                                                             onChange={(e) => {

                                                                 this.setState({value: e.target.value})
                                                             }}
                                                />
                                                <FormControl autoComplete="on"
                                                             placeholder="کلید"
                                                             aria-label="Username"
                                                             value={this.state.key}
                                                             aria-describedby="basic-addon1"
                                                             onChange={(e) => {

                                                                 this.setState({key: e.target.value})
                                                             }}
                                                />
                                            </div>
                                         
                                        </small>
                                        <small>

                                        </small>
                                    </form>
                                </td>

                            

                            </tr>
                            {this.state.customerDataList &&
                            this.state.customerDataList.map((data, i, arr) => {


                                return <tr>
                                    <td>

                                        <i className={'text-danger float-left fa fa-times'} onClick={()=>{
                                            this.deleteKey(data.Id)
                                        }}></i>
                                        
                                        
                                        {data.Key}
                                    
                                    
                                    </td>
                                    <td>{data.Value}
                                    
                                    
                              
                                        
                                    
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </Table>


                    </div>
                </div>
            </div>
        );
    }


    deleteKey(id){
        this.setState({sending:true});
        _showMsg('در حال حذف کلید')
        MyCaller.Send('DeleteKey', {
            id: id,
            customerId:this.props.Customer.Id
        })
    }

    deleteKeyCallback(res){
        this.setState({sending:false});
        _showMsg('کلید حذف شد')

        this.componentDidMount();
    }


    saveKeyCallback(res){
        this.setState({sending:false});
        _showMsg('کلید جدید ذخیره شد')

        this.componentDidMount();
    }
    AddCustomerData() {

        if (!this.state.key) {
            _showError('کلید خالی است لطفا عنوان کلید را وارد کنید')
            return;
        }

        if (!this.state.value) {
            _showError('مقدار کلید خالی است لطفا مقدار کلید را وارد کنید')
            return;
        }
        

        _showMsg('در حال ذخیره کلید جدید')
        
        this.setState({sending:true})

        MyCaller.Send('SaveKey', {
            Key: this.state.key,
            Value: this.state.value,
            customerId:this.props.Customer.Id
        })
    }
}

export default CustomerData;