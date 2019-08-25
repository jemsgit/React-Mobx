import { types } from 'mobx-state-tree';

const data = {
    isAuth: false,
    login: 'User'
}

export const User = types.model({
    isAuth: types.boolean,
    login: types.string
}).actions(self => {
    function setAuth(auth) {
        self.isAuth = auth
    }
    return {
        setAuth
    }
}).views(self => ({
    get loginator(){
        return self.login;
    }
}));