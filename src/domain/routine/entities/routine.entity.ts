import RoutineName from "../valueObjects/routineName.vo";

export default class Routine {
  private _props: InternalProps;

  constructor(props: RoutineProps) {
    this._props = {
      name: RoutineName.create(props.name),
    };
  }

  get name(): RoutineName {return this._props.name;}

}

type RoutineProps = {
  name: string;
};

type InternalProps = {
  name: RoutineName;
};
