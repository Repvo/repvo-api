import Routine from "@/domain/routine/entities/routine.entity";
import IRoutinesService from "../interfaces/IRoutines.service";
import IRoutineRepository from "@/domain/routine/repositories/IRoutineRepository";

export default class RoutinesService implements IRoutinesService {

  constructor(
    private readonly _routinesRepository: IRoutineRepository
  ) {}

  async create(routine: Routine): Promise<Routine> {
    return this._routinesRepository.create(routine);
  }
}
