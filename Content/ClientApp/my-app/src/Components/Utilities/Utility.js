﻿import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import {InputSwitch} from "primereact/inputswitch";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import Language from "../HelpDesk/Language/Language";
import {InputTextarea} from "primereact/inputtextarea";

import '../../styles/myStyle.css'
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

export const MyInput=(props)=>{

    const [val,setVal]= useState();
   
    React.useEffect(() => {
        setVal(props.parent.state[props.name]);
    }, [props.parent.state[props.name]])
    
    return <>
        <label className={'float-right'}>{props.title}</label>
        <InputText  placeholder={props.placeholder} className={'float-left'} style={{width:'100%'}} value={val} onChange={(e) => {
            setVal( e.target.value);
            
            if (props.parent) {
                props.parent.state[props.name]=e.target.value;
                props.parent.setState({tmp:Math.random()});
            }
         
            
            if (props.onChange) {
                props.onChange(e.target.value);
            }
        }} />
    </>
}

export const MySwitcher=(props)=>{

    const [val,setVal]= useState(props.checked);
    return <div className={'MySwitcher'}>
        <label className={'float-right ' + (props.disabled ? 'disabled' : '')} >
            
            
            {props.icon && <i style={{}} className={'h3 fa fa-'+props.icon}></i> }
            
            {props.title}
        
        </label>

        <InputSwitch  disabled={props.disabled}  className={'float-left'} checked={val}
                       onChange={(e) => {
                           setVal( e.target.value);
                           props.parent.state[props.name]=e.target.value;
                           props.parent.setState({tmp:Math.random()});
                           
                           
                           if (props.onChange){
                               props.onChange(e.target.value);
                           }
                       }} />


        {val && <>{props.children}</>}
    </div>
}



export const AddLocalizedMessage=(props)=>{

    const [textArea,setTextArea]= useState();
    const [lang,setLang]= useState();
    const [localizedMessages,setlocalizedMessages]= useState();
    
    const [showModal,setShowModal]= useState(false);

    const footer= <div>
        <Button label="افزودن" id={'removeLanguageConfirm'} icon="pi pi-check" onClick={() => {


            if (!props.noinput) {

                if (lang && textArea) {
                    props.onConfirm(textArea,lang);
                    setShowModal(false)
                }
            }else {

                if (lang ) {
                    props.onConfirm(textArea,lang);
                    setShowModal(false)
                }
            }
           
        }
        } autoFocus />
        <Button label="لغو" icon="pi pi-times" onClick={() => {

            setShowModal(false);

            if (props.onCancel)
            props.onCancel();
        }
        } className="p-button-text" />

    </div>;


    return <>
        <a  onClick={()=>{
            setShowModal(true)

        }}>
            {props.title ? props.title : 'یک پیغام بومی سازی شده اضافه کنید'}
        </a>




        <Dialog header="افزودن یک پیغام بومی سازی شده" visible={showModal}
                modal style={{ width: '450px' }} footer={footer}
                onHide={() => setShowModal(false)}>

            <div>
                <label>زبان محلی</label>

                <Language noTitle={true} onSelect={(selectedLanguage)=>{
                    //  this.onLanugageSelect()

                    setLang(selectedLanguage);

                }}/>
            </div>

            {!props.noinput &&
           <>

               <br/>
               <br/>
               <br/>
               <br/>
               <label>متن پیغام</label>
               <br/>
               <InputTextarea rows={5} cols={30} value={textArea} onChange={(e) => setTextArea(e.target.value)} />
           </>

            }

            {props.body}
        </Dialog>
        {<>{props.children}
            </>}

    </>
}





export const FormInModalWithTable=(props)=>{

    const [Name,setName]= useState();
    const [SecondName ,setSecondName]= useState();
    const [messages,setMessages]= useState();
    
    
    const [showModal,setShowModal]= useState(false);

    const footer= <div>
        <Button label="تمام" id={'removeLanguageConfirm'} icon="pi pi-check" onClick={() => {

            props.onConfirm(messages);
            setShowModal(false)
          
        }
        } autoFocus />
      

    </div>;


    return <>
        <a  onClick={()=>{
            setShowModal(true)

        }}>
            {props.linkTitle}
        </a>



        <Dialog header="افزودن یک پیغام بومی سازی شده" visible={showModal}
                modal style={{ width: '450px' }} footer={footer}
                onHide={() => setShowModal(false)}>


            <MyInput onChange={(val)=>{

                setName(val);

            }} title={props.inputTitle} placeholder={props.inputTitlePlaceHolder} name={'Name'}  />


            {props.secondinputTitle && 
            <MyInput onChange={(val)=>{

                setSecondName(val);

            }} title={props.secondinputTitle}  placeholder={props.secondinputTitlePlaceHolder} name={'Name'} />
            }

            <Button
                
                style={{marginTop:'15px'}}
            
                onClick={()=>{
                  
                    let localizedMessages= messages;
                    if(!localizedMessages){
                        localizedMessages=[];
                    }

                    localizedMessages.push({Name:Name,SecondName:SecondName});
                    setName(null)
                    setMessages(localizedMessages);
               
                }}
                variant={'primary'}
                
                
            >
                افزودن
            </Button>   
            

        </Dialog>
        {<>

            {messages && messages.length>0 &&
            <>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>{props.inputTitle}</th>
                        <th>حذف</th>
                    </tr>
                    </thead>
                    <tbody>
                    {messages && messages.length>0 &&
                        messages.map((m,i,arr)=>{

                            return  <tr>

                                <td>{m.Name}</td>
                                <td>
                                    <Badge variant={'danger'} onClick={()=>{

                                        let localizedMessages= messages;
                                        if(!localizedMessages){
                                            localizedMessages=[];
                                        }

                                        localizedMessages=  localizedMessages.filter(lm=>lm!==m);
                                        setMessages(localizedMessages);

                                    }}>

                                        <i className={'fa fa-trash'}></i>
                                    </Badge>

                                </td>
                            </tr>
                        })
                    }
                    </tbody>

                </Table></>}
        </>}

    </>
}

