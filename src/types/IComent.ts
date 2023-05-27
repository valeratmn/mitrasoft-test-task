export interface IComent {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ComentsListProps {
  comentsList: comentProps[];
  error: boolean;
}

export interface comentProps {
  email: string;
  body: string;
  id?: number;
}
