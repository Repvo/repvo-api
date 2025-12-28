import Routine from "../entities/routine.entity";

export default interface IRoutineRepository {
    create(routine: Routine): Promise<Routine>;
}