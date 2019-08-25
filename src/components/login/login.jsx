import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import { MobxConsumer } from '../../stores/rootStore';

class Login extends Component {
    componentDidMount() {
        let value = this.context;
        console.log(value.userStore.login + 'hererere');
    }

    render() {
        let value = this.context;
        console.log(value.userStore)
        return (
            <div>Hello React,Web23pack2 4 & Babel 27!<span> {value.userStore.login} </span></div>
        );
    }
}

Login.contextType = MobxConsumer;

export default observer(Login);