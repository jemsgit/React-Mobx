import React from 'react';
import { types, getSnapshot } from 'mobx-state-tree';
import { User } from './models/user'

export const RootStore = types
    .model('RootStore', 
    {
        userStore: types.optional(User, {isAuth: false, login: '1234'})
    })

const rootStore = RootStore.create({});

export default rootStore;

export const MobxContext = React.createContext(rootStore);
export const MobxProvider = MobxContext.Provider;
export const MobxConsumer = MobxContext.Consumer;