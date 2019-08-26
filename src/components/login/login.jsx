import React, {Component} from 'react';
import { observer } from 'mobx-react';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { MobxContext } from '../../stores/rootStore';
import LoginForm from '../login-form/login-form';

import './login.css';

let form = new LoginForm();

class Login extends Component {
    componentDidMount() {
        let value = this.context;
        console.log(value.userStore.login + 'hererere');
    }

    render() {
        let value = this.context;
        console.log(value.userStore)
        return (
            <div className='login-page'>
                Hello
                <form>

                    <Input {...form.$('login').bind()} />
                    <p>{form.$('login').error}</p>
                    <Input type='password'
                        {...form.$('password').bind()} 
                    />
                    <p>{form.$('password').error}</p>
                    <Button type="submit" onClick={form.onSubmit}>Submit</Button>

                    <p>{form.error}</p>
                </form>
            </div>
        );
    }
}

Login.contextType = MobxContext;

export default observer(Login);