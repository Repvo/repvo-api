import Routine from "@/domain/routine/entities/routine.entity";

export default interface IRoutinesService {
  create(routine: Routine): Promise<Routine>;
}