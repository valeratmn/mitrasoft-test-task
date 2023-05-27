export interface ProfileProps {
  name: string;
  email: string;
  website: string;
  username?: string;
  address: {
    city: string;
  };
}

export interface ProfileState {
  user: ProfileProps;
  isLoading: boolean;
  isLoaded: boolean;
  error: string;
}
