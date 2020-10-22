import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import {AddLocalizedMessage, FormInModalWithTable, MyInput, MySwitcher} from "../../Utilities/Utility";
import {Dialog} from "primereact/dialog";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {_showError} from "../../../Pages/LayoutPage";
import {CurrentUserInfo} from "../../../Help/Socket";

class EtFormTriggerEvents extends Component {
    state={};

    constructor(props) {
        super(props);
        
        CurrentUserInfo.EtFormTriggerEvents=this;
    }

    /*set*/
    setS_EventOnExitTab(S_EventOnExitTab){
        this.setState({S_EventOnExitTab})
    }

    setS_EventOnLinkClick(S_EventOnLinkClick){
        this.setState({S_EventOnLinkClick})
    }

    setS_EventSpecificPages(S_EventSpecificPages){
        this.setState({S_EventSpecificPages})
    }

    setS_EventAddressParameters(S_EventAddressParameters){
        this.setState({S_EventAddressParameters})
    }

    setS_EventUserCustomName(S_EventUserCustomName){
        this.setState({S_EventUserCustomName})
    }

    setS_EventDelay(S_EventDelay){
        this.setState({S_EventDelay})
    }


    setlinks(val){
        this.setState({links:val})
    }
    setpages(val){
        this.setState({pages:val})
    }
    setpageParameters(val){
        this.setState({pageParameters:val})
    }
    setuserEventNames(val){
        this.setState({userEventNames:val})
    }
    
    /*get*/
    getS_EventOnExitTab(){
        return this.state.S_EventOnExitTab;
    }

    getS_EventOnLinkClick(){
        return this.state.S_EventOnLinkClick;
    }

    getS_EventSpecificPages(){
        return this.state.  S_EventSpecificPages
    }

    getS_EventAddressParameters(){
        return this.state.S_EventAddressParameters
    }
    
    getS_EventUserCustomName(){
        return this.state.S_EventUserCustomName
    }

    getS_EventDelay(){
        return this.state.S_EventDelay
    }


    getlinks(){
        return this.state.links
    }

    getpages(){
        return this.state.pages
    }

    getpageParameters(){
        return this.state.pageParameters
    }

    getuserEventNames(){
        return this.state.userEventNames
    }




    isValid(){

        if (this.state.S_EventOnLinkClick && (!this.state.links || this.state.links.length===0))
        {
            _showError('درصورت انتخاب لینک بایستی لینکی تعریف شود')
            return false
        }

        if (this.state.S_EventSpecificPages && (!this.state.pages || this.state.pages.length===0))
        {
            _showError('در صورت انتخاب فیلتر صفحات ، بایستی حداقل یک صفحه تعریف شود')
            return false
        }
        if (this.state.S_EventAddressParameters && (!this.state.pageParameters || this.state.pageParameters.length===0))
        {
            _showError('در صورت انتخاب فیلتر پارامتر های آدرس ، باید حداقل یک پارامتر انتخاب شود')
            return false
        }

        if (this.state.EventUserCustomName && (!this.state.userEventNames || this.state.userEventNames.length===0))
        {
            _showError('در صورت انتخاب رویداد های کاربر ، باید حداقل یک نام رویداد وارد شود')
            return false
        }


        if (this.state.S_EventDelay && (!this.state.delay))
        {
            _showError('فیلتر رویداد با تاخیر فعال است اما زمان وارد نشده است')
            return false
        }

        
        
        return true;
    }
    render() {
        return (
            <div>
                <Card
                   
                >
                    <Card.Header className={'bg-light'}>
                        <span className={'float-right'}>
                          Event Trigger تنظیمات رویداد این  
                        </span>

                        <small className={'float-left '} style={{color:'#6c757d'}}>
                            Event Trigger    رویداد یا واقعه این 
                        </small>

                    </Card.Header>
                    <Card.Body>
                        {/*<Card.Title>{variant} Card Title </Card.Title>*/}
                        <Card.Text>

                            <MySwitcher onChange={(checked)=>this.setEnabled(checked,'S_EventOnExitTab','S_EventSpecificPages',
                                'S_EventAddressParameters','S_EventDelay')} 
                                        disabled={this.Isdisabled('S_EventOnExitTab')} title={'زمان ترک کردن صفحه'}
                                        name={'EventOnExitTab'} parent={this}>


                            </MySwitcher>

                            <hr/>
                            <MySwitcher onChange={(checked)=>this.setEnabled(checked,'S_EventOnLinkClick')}
                                        disabled={this.Isdisabled('S_EventOnLinkClick')} 
                                        title={'کلیک روی یک لینک'} name={'EventOnLinkClick'} parent={this}>

                                
                                <FormInModalWithTable inputTitle={'Style CSS #id'}

                                                      inputTitlePlaceHolder={'کد مخصوص در html'}
                                    linkTitle={"افزودن یک لینک"}

                                                      onConfirm={(links)=>{
                                                          
                                                          this.setState({links})
                                                      }}
                                />
                                
                            </MySwitcher>
                            <hr/>

                            <MySwitcher  onChange={(checked)=>this.setEnabled(checked,'S_EventSpecificPages','S_EventOnExitTab','S_EventDelay')}
                                         disabled={this.Isdisabled('S_EventSpecificPages')} 
                                        title={'در صفحات خاص'} name={'EventSpecificPages'} parent={this}>



                                <FormInModalWithTable inputTitle={'آدرس اینترنتی صفحه (علامت * برای زیر صفحات ، علامت ** برای انتخابگر هرچیز و علامت ! برای انتخابگر منفی)'}

                                                      inputTitlePlaceHolder={'برای مثال : acme.com/blog/*/category/**'}
                                                      linkTitle={"افزودن یک صفحه"}

                                                      onConfirm={(pages)=>{

                                                          this.setState({pages})
                                                      }}
                                />
                            </MySwitcher>

                            <hr/>

                            <MySwitcher   onChange={(checked)=>this.setEnabled(checked,'S_EventAddressParameters','S_EventOnExitTab','S_EventDelay')}
                                          disabled={this.Isdisabled('S_EventAddressParameters')}  
                                        title={'در پارامتر های آدرس '} name={'EventAddressParameters'} parent={this}>



                                <FormInModalWithTable
                                    inputTitle={'URL parameter key (eg. \'key\' in \'https://acme.com/?key=value\')'}
                                    inputTitlePlaceHolder={'عنوان کلید'}

                                    secondinputTitle={'URL parameter value (eg. \'value\' in \'https://acme.com/?key=value\')'}
                                    secondinputTitlePlaceHolder={'مقادر کلید'}
                                    linkTitle={"افزودن یک پارامتر در آدرس"}
                                    onConfirm={(pageParameters)=>{

                                                          this.setState({pageParameters})
                                                      }}
                                />
                            </MySwitcher>

                            <hr/>

                            <MySwitcher    onChange={(checked)=>this.setEnabled(checked,'S_EventUserCustomName','S_EventDelay')}
                                           disabled={this.Isdisabled('S_EventUserCustomName')}  
                                         title={'در event خاص شما'} name={'EventUserCustomName'} parent={this}>


                                <FormInModalWithTable
                                    inputTitle={'عنوان event شما'}
                                    inputTitlePlaceHolder={'عنوان event : onSelectEvent'}

                                    linkTitle={" event افزودن یک  "}
                                    onConfirm={(userEventNames)=>{

                                        this.setState({userEventNames})
                                    }}
                                />

                            </MySwitcher>

                   {/*         <MySwitcher title={'بعد از زدن session کاربر یا ورود به سیستم'} name={'IsPlayASound'} parent={this}>

                            </MySwitcher>
*/}

                            <hr/>
                            <MySwitcher  
                                          disabled={this.Isdisabled('S_EventDelay')}  
                                         title={'بعد از تاخیر ( زمان)'} name={'EventDelay'} parent={this}>


                                <br/>
                                <br/>
                                <br/>
                                <Row>
                                    <Col></Col>
                                    <Col md={4}>
                                        <MyInput onChange={(val)=>{

                                            this.setState({delay:val})

                                        }} title={''} placeholder={'زمان به ثانیه'} name={'delay'} parent={this} />
                                    </Col>
                                    <Col></Col>

                                </Row>
                                
                            </MySwitcher>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    Isdisabled(s) {
        return !this.state[s] && this.state.S_SelectAny ? 'disabled':null
    }

    setEnabled(checked, name) {
        
        let arr= [
            'S_EventOnExitTab',
            'S_EventOnLinkClick',
            'S_EventSpecificPages',
            'S_EventAddressParameters',
            'S_EventUserCustomName',
            'S_EventDelay',
        ];
       debugger;
        let obj={
            S_EventOnExitTab:false,
            S_EventOnLinkClick:false,
            S_EventSpecificPages:false,
            S_EventAddressParameters:false,
            S_EventUserCustomName:false,
            S_EventDelay:false,
        };
        
        // اگر اولین انتخاب باشد
        if (!this.lastSelectedBulb){

            // اعمال کن
                for (var i = 0; i < arguments.length; i++) {
                    obj[arguments[i]]=true;
                }
        }else{
            // اگر اولین انتخاب نباشد و قبل از این یک انتخاب دیگر بوده باشد
            obj=Object.assign({},this.lastSelectedBulb);


            // اگر مثبت انتخاب شده اعمال کن و اگر منفی است ، به تنظیمات انتخاب اول باز می گردد
            if (checked) {

                let argumentsArray=Array.from(arguments);
                
                for (var i = 0; i < arr.length; i++) {
                    
                    let element=arr[i];
                    
                    // اگز در بین گزینه های موجود انتخاب اول بوده باشد هیچ و الا آن را غیر فعال کن
                    if (obj[arr[i]] && argumentsArray.find(f=>f===element))
                    {
                        debugger;
                        obj[element]=true;
                    }
                    else {
                        debugger;

                        obj[element]=false;

                    }
                }
            }
            
        }
        
      



        // انتخاب بار اول 
        if (!this.lastSelectedName) {
            this.lastSelectedName = name;
            this.lastSelectedBulb=obj;
        }
        
       // اگر همان گزینه اول انتخاب شود
        if (this.lastSelectedName===name)
        {
            
            if(!checked){
                this.lastSelectedName=null;

                this.lastSelectedBulb=null;
                obj={
                    S_EventOnExitTab:false,
                    S_EventOnLinkClick:false,
                    S_EventSpecificPages:false,
                    S_EventAddressParameters:false,
                    S_EventUserCustomName:false,
                    S_EventDelay:false,
                };
            }
            obj['S_SelectAny']=checked;




        }
        
        this.setState(obj);
    }
}

export default EtFormTriggerEvents;