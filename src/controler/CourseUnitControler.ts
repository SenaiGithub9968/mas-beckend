import {Request, Response} from 'express';
import {CreateCourseUnitService} from '../services/CreateCourseUnitService'
import {GetCourseUnitiesService} from '../services/GetCourseUnitiesService';


class CourseUnitController {
    async create (request: Request, response: Response){
        const courseUnitData = request.body
        const createCourseUnit = new CreateCourseUnitService()
        const CourseUnit = await createCourseUnit.execute(courseUnitData)

        return response.json(CourseUnit);
    }

    async show (request:Request, response: Response){
        const userId = request.body.user;

        const getCourseUnits = new GetCourseUnitiesService();

        const courseUnits = await getCourseUnits.execute(userId);

        return response.json(courseUnits);
    }
}
export {CourseUnitController};