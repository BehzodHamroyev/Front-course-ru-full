export interface User {
    id: string;
    username: string;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;  //qchonki token bo'lsa kerakli sahifa yani profilga o'tkazishi uchun kerak 
}
