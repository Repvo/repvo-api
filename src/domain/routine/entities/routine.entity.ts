import UserId from "@/domain/user/valueObjects/userId.vo";
import RoutineName from "../valueObjects/routineName.vo";
import RoutineId from "../valueObjects/routineId.vo";

export default class Routine {
  private _props: InternalProps;

  constructor(props: RoutineProps) {
    this._props = {
      id: RoutineId.create(props.id),
      name: RoutineName.create(props.name),
      ownerId: UserId.create(props.ownerId)
    };
  }

  get name(): RoutineName {return this._props.name;}
  get ownerId(): UserId {return this._props.ownerId;}

}

type RoutineProps = {
  id: string;
  name: string;
  ownerId: string;
};

type InternalProps = {
  id: RoutineId;
  name: RoutineName;
  ownerId: UserId
};
