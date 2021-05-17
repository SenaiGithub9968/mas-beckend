import {getRepository} from 'typeorm';
import {CourseUnit} from '../models/CourseUnit';

interface userId {
    id: string;
}

class GetCourseUnitiesService{
    public async execute({id}:userId){
        const courseUnitRepository = getRepository(CourseUnit);

        const courseUnities = courseUnitRepository.find();

        if(!courseUnities){
            return{
                message:"activies units not found"
            }
        }
        return courseUnities;
    }
}
export {GetCourseUnitiesService};