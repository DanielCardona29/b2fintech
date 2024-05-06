export interface userContextProps {
  children: React.ReactNode;
}

export interface userState {
  user?: string;
  password?: string;
}

export type typeReducer = (state: userState, action: {type: string}) => void;

export interface providerValues {
  user?: userState;
  setUser?: React.Dispatch<React.SetStateAction<userState>>;
  userArray?: userState[];
  setUserArray?: React.Dispatch<React.SetStateAction<userState[]>>;
  userLoged?: boolean;
  setUserLoged?: React.Dispatch<React.SetStateAction<boolean>>;
  consultStorage?: (userProp?: string, passProp?: string) => boolean;
  login?: () => boolean;
}
