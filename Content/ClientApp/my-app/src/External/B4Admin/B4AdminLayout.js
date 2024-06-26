﻿import React, {Component} from 'react';


import './css/sb-admin-2.min.css'
import './css/all.min.css'
import './css/custom.css'
import useScript from "../../Components/Utilities/UseScript";
import LayoutPage from "../../Pages/LayoutPage";
import B4AdminBody from "./B4AdminBody";
import B4AdminMenu from "./B4AdminMenu";
import B4AdminNavbar from "./B4AdminNavbar";
import {MyCaller} from "../../Help/Socket";
import B4AdminSubMenu from "./B4AdminSubMenu";
import OntTheFlyChatPanel from "../../Components/OnTheFlyChatPanel/OntTheFlyChatPanel";
import Alarm from './../../Components/Alarm/Alarm';
import RandomBgGenerator from './../../Components/bg/RandomBgGenerator';
import {CurrentUserInfo} from "../../CurrentUserInfo";

const B4AdminLayoutScripts=()=>{
    useScript('/Content/B4Admin/jquery/jquery.min.js')
    useScript('/Content/B4Admin/bootstrap/js/bootstrap.bundle.js')
    useScript('/Content/B4Admin/jquery-easing/jquery.easing.min.js')
    useScript('/Content/B4Admin/sb-admin-2.min.js')
    
    return <></>

}
class B4AdminLayout extends Component {
    state={};

    constructor(props) {
        super(props);
        CurrentUserInfo.B4AdminLayout=this;
    }


    componentDidMount() {

        MyCaller.Send('GetMyProfile')



    }

    getMyProfileCallback(res){
        if (!res || !res.Content){
            CurrentUserInfo.LayoutPage.showError('res is null for profile');
            return ;
        }
       // CurrentUserInfo.LayoutPage.showMsg('اطلاعات پروفایل خوانده شد');

        this.setState({currentUser:res.Content.MyAccount});
    }

    render() {
    //let imgUrl = RandomBgGenerator();

        return (
            <div>
                <div id="wrapper">
                    
                    <B4AdminLayoutScripts/>

                   
                     {/* <!-- End of Sidebar-->*/}

                     {/* <!-- Content Wrapper-->*/}
                    <div id="content-wrapper" className="d-flex flex-column">

                         {/* <!-- Main Content-->*/}
                        <div id="content" style={{
      //     backgroundImage: `url('${imgUrl}')`,
            left: "0px",
            right: "0px",
            bottom: "0px",
            top: "0px",
        }}>

                             {/* <!-- Topbar-->*/}
                           
                             <B4AdminNavbar/>
                             {/* <!-- End of Topbar-->*/}

                             {/* <!-- Begin Page Content-->*/}
                            <div className="container-fluid">

                                 {/* <!-- Page Heading-->*/}

                                <B4AdminSubMenu/>
                               
                                 <B4AdminBody/>
                                 
                             

                            </div>
                             {/* <!-- /.container-fluid-->*/}

                        </div>
                         {/* <!-- End of Main Content-->*/}

                         {/* <!-- Footer-->*/}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>تمامی حقوق محفوظ است &copy; gapchat.ashpazerooz.ir 2020</span>
                                </div>
                            </div>
                        </footer>
                         {/* <!-- End of Footer-->*/}

                    </div>
                     {/* <!-- End of Content Wrapper-->*/}
                    <B4AdminMenu></B4AdminMenu>

                </div>
                
                <OntTheFlyChatPanel/>


                <Alarm/>
            </div>
        );
    }

  
}

export default B4AdminLayout;