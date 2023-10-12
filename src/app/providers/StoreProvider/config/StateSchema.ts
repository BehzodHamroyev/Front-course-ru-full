import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginTypes } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginAuth:LoginTypes
}
