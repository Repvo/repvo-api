import Routine from "@/domain/routine/entities/routine.entity";
import IRoutineRepository from "@/domain/routine/repositories/IRoutineRepository";
import DatabaseError from "@/infrastructure/core/DatabaseError";
import { prisma } from "@/infrastructure/prisma/client";
import { RoutineCreateArgs } from "@/infrastructure/prisma/generated/prisma/models";

/**
 * Repository that persists `Routine` entities using Prisma/MySQL.
 *
 * Implements the domain `IRoutineRepository` interface so the application
 * can depend on the abstraction rather than this concrete implementation.
 *
 * Notes:
 * - Uses the Prisma client imported from `@/infrastructure/prisma/client`.
 * - Converts domain entities to the Prisma persistence shape before saving.
 */
export default class PrismaRoutinesRepository implements IRoutineRepository {
  /**
   * Create a new routine record in the database.
   *
   * Accepts a domain `Routine` entity, maps it to the Prisma create args and
   * executes `prisma.routine.create`.
   *
   * @param routine - The domain `Routine` entity to persist.
   * @returns A promise that resolves when the operation completes.
   * @throws {DatabaseError} When the underlying Prisma call fails.
   */
  async create(routine: Routine): Promise<void> {
    try {
      await prisma.routine.create(this.toPersistence(routine));
    } catch (error: Error | unknown) {
      throw new DatabaseError("Error creating routine: " + (error as Error).message);
    }
  }

  /**
   * Map a domain `Routine` entity to the Prisma `RoutineCreateArgs` shape.
   *
   * The domain `Routine` uses value objects for its fields; this helper
   * extracts primitive values required by Prisma. Keeping the mapping in a
   * single private method makes it easier to test and maintain.
   *
   * @param routine - The domain `Routine` entity to convert.
   * @returns A `RoutineCreateArgs` object suitable for `prisma.routine.create`.
   */
  private toPersistence(routine: Routine): RoutineCreateArgs {
    return {
      data: {
        name: routine.name.value,
        ownerId: routine.ownerId.value,
      },
    };
  }

}
