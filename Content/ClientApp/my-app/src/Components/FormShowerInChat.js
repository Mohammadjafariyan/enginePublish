import React, {Component} from 'react';
import {CurrentUserInfo, MyCaller} from "../Help/Socket";
import {Card} from "react-bootstrap";
import {FormRenderer} from "../Pages/FormCreatorPage";

class FormShowerInChat extends Component {

    state = {
        elements: this.props.elements,
        // You can even call functions and class methods:
        Name: this.props.formName,

    };
 

    constructor(args) {
        super(args);


        

        FormShowerInChatHolder[this.props.formId+''+this.props.chatUniqId]=this;

    }

    componentDidMount() {

        //consolelog('FormShowerInChat->componentDidMount:')
        //consolelog(this.state.elements)
        if (!this.state.elements)
        {
            MyCaller.Send('GetFormSingle', {formId: this.props.formId,uniqId:this.props.chatUniqId});
        }
    }

    ///این ممتد در واقع باید بیرون از این کلاس می بود
    saveFormDataCallback(res){
        //debugger
        //consolelog('FormShowerInChat->saveFormDataCallback:')

        //consolelog(res)

        /*form.AfterMessage,
                    formId,
                    chatId,
                    FormValues*/
        if (!res || !res.Content || !res.Content.FormValues || res.Content.FormValues.length==0) {
            CurrentUserInfo.LayoutPage.showError('اطلاعات بازگشتی از سرور نال است');
            return;
        }
        
        if (!this.state.elements || this.state.elements.length==0){
            CurrentUserInfo.LayoutPage.showError('المنت های فرم خالی است');
            return;
        }


        if (!CurrentUserInfo.ChatPage){
            return ;

        }else{


            CurrentUserInfo.ChatPage.addChat({type:'form',formId:res.Content.formId,Message:'',
                elements:res.Content.formElements,IsReceive:true,UniqId:res.Content.UniqId
            },true)

        }

        this.setState({tmp:Math.random()});

        //consolelog(res);
    }

    getFormSingleCallback(res) {
        
       // debugger

        if (!res || !res.Content) {
            CurrentUserInfo.LayoutPage.showError('اطلاعات بازگشتی از سرور نال است');
            return;
        }

        //consolelog('this.state.elements', this.state.elements);

        this.setState({
            elements: res.Content.Elements,
            Name: res.Content.Name,
            AfterMessage: res.Content.AfterMessage,
            OnlyMe: res.Content.OnlyMe,
            Message: res.Content.Message,
            Id: res.Content.Id
        });

        //consolelog(res);

    }

    render() {
        return (
            <div>
                {!this.state.elements && <p>در حال ارسال فرم</p>}

                {this.state.Name && <h6>{this.state.Name}</h6>}
                {this.state.elements && <FormRenderer elements={this.state.elements} editable={false}/>}

            </div>
        );
    }
}

export default FormShowerInChat;

/*لیست کامپونت های فرم ها در این ابجکت نگه داری می شود|*/
export const FormShowerInChatHolder = {}