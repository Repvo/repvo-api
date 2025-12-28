import UserId from "@/domain/user/valueObjects/userId.vo";
import RoutineName from "../valueObjects/routineName.vo";

export default class Routine {
  private _props: InternalProps;

  constructor(props: RoutineProps) {
    this._props = {
      name: RoutineName.create(props.name),
      userId: UserId.create(props.userId)
    };
  }

  get name(): RoutineName {return this._props.name;}
  get ownerId(): UserId {return this._props.userId;}

}

type RoutineProps = {
  name: string;
  userId: string;
};

type InternalProps = {
  name: RoutineName;
  userId: UserId
};
