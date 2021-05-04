import {getRepository} from 'typeorm'
import {Activy} from '../models/Activy'

interface ActivyData{
    name:string
    course_unit_id:string
    activy_date: string
}

class CreateActivyService{
    public async execute({name,activy_date,course_unit_id}:ActivyData){
    
            const activyRepository = getRepository(Activy);
            const checkActivyExists = await activyRepository.findOne({name});
        
            if(checkActivyExists){
                throw new Error ('name activy exists')
                
            }
            
            const activy = {
                name,
                activy_date,
                course_unit_id
            }
            await activyRepository.save(activy);

            return activy;
        
        
    }
}
export {CreateActivyService}