//======================== INFRASTRUCTURE ========================//

import IRoutineRepository from "@/domain/routine/repositories/IRoutineRepository";
import PrismaRoutinesRepository from "@/infrastructure/routines/repositories/PrismaRoutinesRepository";

// repositories
export const routinesRepository: IRoutineRepository = new PrismaRoutinesRepository();