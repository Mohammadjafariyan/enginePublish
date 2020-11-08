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
import {DataHolder} from "../../Help/DataHolder";
import {_showError} from "../../Pages/LayoutPage";

export const MyInput = (props) => {

    const [val, setVal] = useState();


    React.useEffect(() => {
        setVal(DataHolder.selectedEventTrigger[props.name]);
    }, [DataHolder.selectedEventTrigger[props.name]])

    return <>
        <label className={'float-right'}>{props.title}</label>
        <InputText {...props} placeholder={props.placeholder} className={'float-left'} style={{width: '100%'}}
                   value={val} onChange={(e) => {
            setVal(e.target.value);

            if (props.parent && props.parent.setState) {
                props.parent.state[props.name] = e.target.value;
                props.parent.setState({tmp: Math.random()});
            }

            if (DataHolder.selectedEventTrigger && !props.noEventHandler) {
                DataHolder.selectedEventTrigger[props.name] = e.target.value;
            }


            if (props.onChange) {
                props.onChange(e.target.value);
            }
        }}/>
    </>
}

export const MySwitcher = (props) => {

    const [val, setVal] = useState(props.checked);


    React.useEffect(() => {
        setVal(DataHolder.selectedEventTrigger[props.name]);
    }, [DataHolder.selectedEventTrigger[props.name]])


    return <div className={'MySwitcher '}>
        <label aria-label={props.description} data-microtip-position="left" role="tooltip"
               className={'float-right ' + (props.disabled ? 'disabled' : '')}>


            {props.icon && <i style={{}} className={'h3 fa fa-' + props.icon}></i>}

            {props.title}

        </label>

        <InputSwitch disabled={props.disabled} className={'float-left'} checked={val}
                     onChange={(e) => {
                         setVal(e.target.value);
                         props.parent.state[props.name] = e.target.value;
                         props.parent.setState({tmp: Math.random()});

                         if (DataHolder.selectedEventTrigger) {
                             DataHolder.selectedEventTrigger[props.name] = e.target.value;
                         }

                         if (props.onChange) {
                             props.onChange(e.target.value);
                         }
                     }}/>


        {val && <>{props.children}</>}
    </div>
}


export const MyInputG = (props) => {

    const [val, setVal] = useState();


    React.useEffect(() => {
        setVal(props.parent.state[props.name]);
    }, [props.parent.state[props.name]])

    return <>
        <label className={'float-right'}>{props.title}</label>
        <InputText {...props} placeholder={props.placeholder} className={'float-left ' + props.className}
                   style={{width: '100%'}} value={val} onChange={(e) => {
            setVal(e.target.value);

            if (props.parent && props.parent.setState) {
                props.parent.state[props.name] = e.target.value;
                props.parent.setState({tmp: Math.random()});
            }

            if (DataHolder.selectedEventTrigger && !props.noEventHandler) {
                DataHolder.selectedEventTrigger[props.name] = e.target.value;
            }


            if (props.onChange) {
                props.onChange(e.target.value);
            }
        }}/>
    </>
}


export const AddLocalizedMessage = (props) => {

    const [textArea, setTextArea] = useState();
    const [lang, setLang] = useState();
    const [localizedMessages, setlocalizedMessages] = useState();

    const [showModal, setShowModal] = useState(false);

    const footer = <div>
        <Button label="افزودن" id={'removeLanguageConfirm'} icon="pi pi-check" onClick={() => {


            if (!props.noinput) {

                if (lang && textArea) {
                    props.onConfirm(textArea, lang);
                    setShowModal(false)
                }
            } else {

                if (lang) {
                    props.onConfirm(textArea, lang);
                    setShowModal(false)
                }
            }

        }
        } autoFocus/>
        <Button label="لغو" icon="pi pi-times" onClick={() => {

            setShowModal(false);

            if (props.onCancel)
                props.onCancel();
        }
        } className="p-button-text"/>

    </div>;


    return <>
        <a onClick={() => {
            setShowModal(true)

        }}>
            {props.title ? props.title : 'یک پیغام بومی سازی شده اضافه کنید'}
        </a>


        <Dialog header="افزودن یک پیغام بومی سازی شده" visible={showModal}
                modal style={{width: '450px'}} footer={footer}
                onHide={() => setShowModal(false)}>

            <div>
                <label>زبان محلی</label>

                <Language noTitle={true} onSelect={(selectedLanguage) => {
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
                <InputTextarea rows={5} cols={30} value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
            </>

            }

            {props.body}
        </Dialog>
        {<>{props.children}
        </>}

    </>
}


export const FormInModalWithTable = (props) => {

    FormInModalWithTable.state = {};
    const [ModalName, setModalName] = useState();
    const [SecondName, setSecondName] = useState();
    const [messages, setMessages] = useState();


    const [showModal, setShowModal] = useState(false);


    React.useEffect(() => {
        setMessages(DataHolder.selectedEventTrigger[props.name]);
    }, [DataHolder.selectedEventTrigger[props.name]])

    const footer = <div>
        <Button label="تمام" id={'removeLanguageConfirm'} icon="pi pi-check" onClick={() => {

            props.onConfirm(messages);
            setShowModal(false)

        }
        } autoFocus/>


    </div>;


    return <>
        <a onClick={() => {
            setShowModal(true)

        }}>
            {props.linkTitle}
        </a>


        <Dialog header="افزودن یک پیغام بومی سازی شده" visible={showModal}
                modal style={{width: '450px'}} footer={footer}
                onHide={() => setShowModal(false)}>


            <MyInput noEventHandler={true} parent={FormInModalWithTable} onChange={(val) => {

                debugger;
                setModalName(val);

            }} title={props.inputTitle} placeholder={props.inputTitlePlaceHolder} name={'ModalName'}/>


            {props.secondinputTitle &&
            <MyInput noEventHandler={true} parent={FormInModalWithTable} onChange={(val) => {

                setSecondName(val);

            }} title={props.secondinputTitle} placeholder={props.secondinputTitlePlaceHolder} name={'Name'}/>
            }

            <Button

                style={{marginTop: '15px'}}

                onClick={() => {

                    let localizedMessages = messages;
                    if (!localizedMessages) {
                        localizedMessages = [];
                    }


                    DataHolder.selectedEventTrigger[props.name] = localizedMessages;

                    localizedMessages.push({Name: ModalName, SecondName: SecondName});
                    setMessages(localizedMessages);

                }}
                variant={'primary'}


            >
                افزودن
            </Button>


        </Dialog>
        {<>

            {messages && messages.length > 0 &&
            <>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>{props.inputTitle}</th>
                        <th>حذف</th>
                    </tr>
                    </thead>
                    <tbody>
                    {messages && messages.length > 0 &&
                    messages.map((m, i, arr) => {

                        return <tr>

                            <td>{m.Name}</td>
                            <td>
                                <Badge variant={'danger'} onClick={() => {

                                    let localizedMessages = messages;
                                    if (!localizedMessages) {
                                        localizedMessages = [];
                                    }

                                    localizedMessages = localizedMessages.filter(lm => lm !== m);

                                    DataHolder.selectedEventTrigger[props.name] = localizedMessages;
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


/*
<div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
<div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
<div class="p-3 mb-2 bg-success text-white">.bg-success</div>
<div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
<div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
<div class="p-3 mb-2 bg-info text-white">.bg-info</div>
<div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
<div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>*/

export function _getBootstrapRandomColor() {
    let colors = ['primary',
        'secondary ',
        'success ',
        'danger ',
        'warning ',
        'info ',
        'light',
        'dark ',
    ]


    let item = colors[Math.floor(Math.random() * colors.length)];

    return item;
}


class _MyHook {

    hooks: [];


    register(funcName, funcObj,unique) {

        if (!this.hooks) {
            this.hooks = [];
        }

        let i = this.hooks.findIndex(f => f.funcName === funcName)

        if (i < 0) {
            this.hooks.push(
                {
                    funcName: funcName,
                    Calles: []
                }
            );

        } else {
            let j = this.hooks[i].Calles.findIndex(f => f.unique === unique)


            if (j < 0) {

                this.hooks[i].Calles.push({
                    unique, funcObj
                })
            } else {

                this.hooks[i].Calles[j] = {
                    unique, funcObj
                };
            }

        }

    }

    call(funcName, ...args) {


        if (!this.hooks) {
            this.hooks = [];
        }

        let func = this.hooks.find(f => f.funcName === funcName)

        if (func == null) {
            _showError(funcName + " is not find");
            return;
        }


        if (func.Calles == null || func.Calles.length == 0) {
            _showError(funcName + " is  empty");
            return;
        }

        for (let i = 0; i < func.Calles.length; i++) {
            func.Calles[i].funcObj[funcName](...args);
        }


    }

}

export const MyHook = new _MyHook();





 const _IranCities=`آب‌بر-آب‌پخش-آبادان-آباده-آباده طشک-آبدان-آبدانان-آبسرد-آبش‌احمد-آبعلی-آبگرم-آبی‌بیگلو-آبیک-آذرشهر-آرادان-آران و بیدگل-آرمرده-آرین‌شهر-آزادشهر-آستارا-آستانه-آستانه اشرفیه-آسمان‌آباد-آشتیان-آشخانه-آغاجاری-آق‌قلا-آقکند-آلاشت-آلونی-آمل-آواجیق-آوج-آیسک-آلنی-ابرکوه-ابریشم-ابوزیدآباد-ابوحمیظه-ابهر-احمدآباد صولت-احمدآباد-احمدسرگوراب-اختیارآباد-ادیمی-اراک-ارجمند-ارداق-اردبیل-اردستان-اردکان-اردکان-اردل-ارزوئیه-ارسک-ارسنجان-ارکواز-ارمغان‌خانه-ارومیه-اروندکنار-ازگله-ازنا-ازندریان-اژیه-اسارا-اسالم-اسپکه-استهبان-اسدآباد-اسدیه-اسفدن-اسفراین-اسفرورین-اسکو-اسلام‌آباد غرب-اسلام‌شهر-اسلامیه-اسلام‌شهر آق‌گل-اسیر-اشترینان-اشتهارد-اشکذر-اشکنان-اشنویه-اصفهان-اصلاندوز-اتاقور-افزر-افوس-اقبالیه-اقلید-الشتر-الوان-الوند-الیگودرز-امام حسن-امام‌شهر-املش-امیدیه-امیرکلا-امیریه-امین‌شهر-انابد-انار-انارستان-انارک-انبارآلوم-اندوهجرد-اندیشه-اندیمشک-اوز-اهر-اهرم-اهل-اهواز-ایج-ایذه-ایرانشهر-ایزدخواست-ایزدشهر-ایلام-ایلخچی-ایمان‌شهر-اینچه‌برون-ایوان-ایوانکی-ایواوغلی-ایور-باب انار-باباحیدر-بابارشانی-بابل-بابلسر-باجگیران-باخرز-بادرود-بار-باروق-بازار جمعه-بازرگان-باسمنج-باشت-باغ بهادران-باغ‌ملک-باغستان-باغین-بافت-بافران-بافق-باقرشهر-بالاده-بانه-بانه‌وره-بایگ-باینگان-بجستان-بجنورد-بخشایش-بدره-برازجان-بردخون-بردستان-بردسکن-بردسیر-برزک-برزول-برف‌انبار-بروات-بروجرد-بروجن-بره‌سر-بزمان-بزنجان-بستان-بستان‌آباد-بستک-بسطام-بشرویه-بفروئیه-بلبان‌آباد-بلداجی-بلده-بم-بمپور-بن-بناب-بناب جدید-بنارویه-بنت-بنجار-بندر امام خمینی-بندر انزلی-بندر ترکمن-بندر جاسک-بندر دیر-بندر دیلم-بندر ریگ-بندرعباس-بندر کنگان-بندر گز-بندر گناوه-بندر لنگه-بندر ماهشهر-بنک-بوانات-بوشهر-بوکان-بومهن-بوئین‌زهرا-بویین سفلی-بوئین و میاندشت-بهاباد-بهار-بهاران‌شهر-بهارستان-بهبهان-بهرمان-بهشهر-بهمن-بهنمیر-بیارجمند-بیجار-بیدخت-بیدستان-بیرجند-بیرم-بیستون-بیضا-بیکا-بیله‌سوار-پاتاوه-پارس‌آباد-پارسیان-پاریز-پاکدشت-پاوه-پردنجان-پردیس-پرندک (زرندیه)-پره‌سر-پل‌دختر-پل سفید-پلدشت-پول-پهله-پیرانشهر-پیربکران-پیش‌قلعه-پیشوا-پیشین-تازه‌آباد-تازه‌شهر-تازه‌کند-تازه‌کند انگوت-تاکستان-طوالش-تایباد-تبریز-تخت-تربت جام-تربت حیدریه-ترک-ترکالکی-ترکمانچای-تسوج-تفت-تفرش-تکاب-تنکابن-تنکمان-تنگ ارم-توتکابن-توحید-تودشک-توره-تویسرکان-تهران-تیتکانلو-تیران-تیکمه‌داش-جاجرم-جالق-جاورسیان-جایزان-جبالبارز-جعفرآباد-جعفریه-جغتای-جلفا-جلین-جم-جناح-جنت‌شهر-جنت‌مکان-جندق-جنگل-جوادآباد-جوانرود-جوپار-جورقان-جوزدان-جوزم-جوشقان و کامو-جوکار-جونقان-جویبار-جویم-جهرم-جیرفت-جیرنده-چابکسر-چاپشلو-چادگان-چارک-چاف و چمخاله-چالانچولان-چالوس-چاه بهار-چترود-چرام-چرمهین-چغادک-چغامیش-چغلوندی-چقابل-چکنه-چلگرد-چمران-چمستان-چمگردان-چناران-چناره-چوار-چوبر-چورزق-چویبده-چهارباغ-چهاربرج-چهاردانگه-چیتاب-حاجی‌آباد-حاجی‌آباد-حاجی‌آباد-حبیب‌آباد-حر-حسامی-حسن‌آباد-حسن‌آباد-حسن‌آباد-حسینیه-حصارگرمخان-حلب-حمزه-حمیدیا-حمیدیه-حمیل-حنا-حویق-خاتون آباد-جزیره خارگ-خاروانا-خاش-خاکعلی-خالدآباد-خامنه-خان‌ببین-خانوک-خانه زنیان-خاوران-خداجو-خرامه-خرم‌آباد (لرستان)-خرم‌آباد (مازندران)-خرمدره-خرمدشت (تاکستان)-خرمشهر-خرو (نیشابور)-خسروشهر-خشت-خشکبیجار-خشکرود-خضرآباد-خضری دشت‌بیاض-خلخال-خلیفان-خلیل‌آباد-خلیل کرد-خلیل‌شهر-خمارلو-خمام-خمیر-خمین-خمینی‌شهر-خنج-خنداب-خواجه-خواف-خوانسار-خور-خور-خوراسگان-خورزوق-خورسند-خورموج-خوسف-خوش‌رودپی-خومه‌زار-خوی-داوودآباد-دزفول-دستجرد-دلیجان (مرکزی)-رشت-ساروق-ساری-ساوه-سردرود-سرعین-سرو-سطر-سفیدسنگ-سگزی-سلطان‌شهر-سماله-سنخواست-سنگر-سورشجان-سوسنگرد-سهرورد-سیدان-سیرکان-سیمین‌شهر-شهر جدید تیس-شازند-شوشتر-شوط-شیراز-طالقان-غرق‌آباد-فسا-قائم‌شهر-قم-قنوات-قورچی‌باشی-قهدریجان-قیر-کارچان-کاظم‌آباد-کردکوی-کرمان-کرمانشاه-کشکوئیه-کوهبنان-کوهپایه-کهنوج-کیاکلا-گوجان-گراش-گتاب-گرماب-گرمی-گشت-گلدشت-گلستان-گلمورتی-کوموش دپه-گوراب زرمیخ-گوهران-گیلانغرب-لار-لامرد-لپوئی-لطیفی-لوجلی-لوندویل-مادوان-ماکو-ماهان-مجلسی-محمدآباد (اصفهان)-محمدشهر-محمودآباد (آذربایجان غربی)-مرادلو-مردهک-مرند-مریوان-مشراگه-مشگین‌شهر-معلم‌کلایه-ملایر-منج-موچش-مؤمن‌آباد-مهدی‌شهر(سنگسر)-استان سمنان-مهردشت-میاندوآب-میداود-میمند-مینودشت-مورموری-نازک علیا-نایین-ندوشن-نسیم‌شهر-نصرآباد (خراسان رضوی)-نظام‌شهر-نقده-نگور-دهستان نوبندگان-نودژ-نورآباد (فارس)-نوشهر-نهاوند-نیر (اردبیل)-نیک‌شهر-واجارگاه-ورامین-ورزنه-ویس-هادیشهر-هرمز-هشتجین-هفتگل-هماشهر (کرمان)-هندیجان-هیدوچ-`


 const _IranStates="آذربایجان شرقی-آذربایجان غربی-اردبیل-اصفهان-البرز-ایلام-بوشهر-تهران-چهارمحال و بختیاری-خراسان جنوبی-خراسان رضوی-خراسان شمالی-خوزستان-زنجان-سمنان-سیستان و بلوچستان-فارس-قزوین-قم-کردستان-کرمان-کرمانشاه-کهگیلویه و بویراحمد-گلستان-گیلان-لرستان-مازندران-مرکزی-هرمزگان-همدان-یزد-";

export function IranStates(){

    let arr=[];
    let tempArr=_IranStates.split('-');
    for (let i = 0; i < tempArr.length; i++) {

        arr.push({name:tempArr[i]});
    }
    return arr;
}


export function IranCities(){

    let arr=[];
    let tempArr=_IranCities.split('-');
    for (let i = 0; i < tempArr.length; i++) {
        
        arr.push({name:tempArr[i]});
    }
    return arr;
}