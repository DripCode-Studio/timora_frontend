export interface Notification {
  id: string;
  title: string;
  dueDate: string;
  timeLeft: string;
  isUnread: boolean;
}


export interface UserInfos{
  id?: string;
  email?: string;
  name?: string;
  avatarUrl?: string;
}

export interface AuthState{
  user: UserInfos | null;
  token: string | null;
  error: string | null;
  loading: boolean;
  setUser: (user: UserInfos) => void;
  setToken: (token: string) => void;
  setError: (error: string) => void;
  logout: () => void;
}