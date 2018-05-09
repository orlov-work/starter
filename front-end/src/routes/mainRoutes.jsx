import { UserContainer } from '../features/users';

const mainRoutesConfig = [
  {
    exact: true,
    path: '/users',
    component: UserContainer,
    componentProps: {}
  }
];

export default mainRoutesConfig;
