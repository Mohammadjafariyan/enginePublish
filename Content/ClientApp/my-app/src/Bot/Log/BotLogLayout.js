import React, {Component} from 'react';
import BotLogForm from "./BotLogForm";
import BotLogTable from "./BotLogTable";
import {CurrentUserInfo} from "../../Help/Socket";
import BotLogDetail from "./BotLogDetail";
import {_showError} from "../../Pages/LayoutPage";

class BotLogLayout extends Component {
    state = {};

    constructor(props) {
        super(props);
        CurrentUserInfo.BotLogLayout = this;
    }

    getBotLogSingleCallback(res) {
        if (!res || !res.Content) {
            _showError('دیتای بازگشتی نال است')
            return;
        }

        this.setState({SelectedBotLog: res.Content});

    }

    render() {
        return (
            <>

                <h3>آمار ربات ها</h3>

                {!this.state.SelectedBotLog &&
                <>
                    
                    <BotLogForm/>

                    
                    <hr/>

                    <BotLogTable/>

                </>}

                {this.state.SelectedBotLog &&
                <>

                    <BotLogDetail parent={this} selectedBot={this.state.SelectedBotLog}/>

                </>}

            </>
        );
    }
}

export default BotLogLayout;