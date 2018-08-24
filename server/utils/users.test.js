const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Mark 1',
                room: 'Node Course'
            },
            {
                id: '2',
                name: 'Mark 2',
                room: 'React Course'
            },
            {
                id: '3',
                name: 'Mark 3',
                room: 'Node Course'
            }
        ];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Mark',
            room: 'The Party'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(resUser).toEqual(user);
        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mark 1', 'Mark 3']);
    });

    it('should remove a user', () => {
        var userID = "1";
        var user = users.removeUser(userID);

        expect(user.id).toBe(userID);
        expect(users.users.length).toBe(2);
    });

    it('shoudl not remove a user', () => { 
        var userID = "4";
        var user = users.removeUser(userID);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var user = users.getUser('3');

        expect(user).toEqual(users.users[2]);
    });

    it('should not find user', () => {
        var user = users.getUser('4');

        expect(user).toNotExist();
    });
});