import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree';
import { reaction } from 'mobx';
import { User } from './user';

it('should be unauthorized', () => {
    let item = User.create({
        isAuth: false,
        login: '213'
    });
    let patches = [];

    onPatch(item, (patch) => {
        patches.push(patch)
    })

    item.setAuth(true);
    expect(patches).toMatchSnapshot();
})

it('should return login', ( ) => {
    let item = User.create({
        isAuth: false,
        login: '213'
    });

    expect(item.loginator).toBe('213');
    let chan = 0;
    reaction(() => item.isAuth, () => chan++);
    expect(chan).toBe(0);
    item.setAuth(true);
    expect(chan).toBe(1);
}) 