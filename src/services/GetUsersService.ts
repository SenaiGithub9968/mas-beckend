import {getRepository} from 'typeorm';
import {User} from '../models/User';

interface userData {
    id: string;
}

class GetUsersService{
    public async execute({id}:userData): Promise<User | {} >{
        
        const userRepository = getRepository(User);

        const user = await userRepository.findOne({id});

        if(!user){
            return{
                message:"users not found"
            }
        }

        return {
            id: user.id,
            name:user.name,
            email:user.email
        };
    }
}
export {GetUsersService};