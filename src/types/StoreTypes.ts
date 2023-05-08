interface ISequelize {
  createdAt: string;
  updatedAt: string;
}

export interface IUser extends ISequelize {
  id: number;
  login: string;
  initials: string;
  password: string;
  governance: string;
  department: string;
  jobTitle: string;
  efficiency: number;
  rating: number;
  activeProjects: number;
  commandName: string | null;
  phone: string | null;
  commandId: number | null;
  speed: number;
  quality: number;
  understanding: number;
  sociability: number;
  knowledge: number;
}

export interface ICommand extends ISequelize {
  id: number;
  name: string;
  description: string;
  departmentId: number;
  managerUserId: number;
  userIds: Array<number>;
  taskIds: Array<number>;
}
