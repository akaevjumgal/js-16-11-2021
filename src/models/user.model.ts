// Interfaces, Class, Types

import { Component } from "react";

interface IUserEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

interface IUserProfile extends IUserEntity {
  name: string;
  age: number | undefined;
}

interface BasicInsuranceService {
  userService: () => IUserService
}

interface IUserService {
  getFullName: (firstName: string, lastName: string) => string;
}

const userEntity: IUserEntity = {
  id: 1,
  createdAt: new Date().toDateString(),
  updatedAt: new Date().toDateString(),
};
const userProfile: IUserProfile = {
  id: 1,
  name: 'John',
  age: 41,
  createdAt: new Date().toDateString(),
  updatedAt: new Date().toDateString(),
};

class UserService implements IUserService {
  getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }
}

class InsuranceService implements BasicInsuranceService {
  userService() {
    const userServiceInstance = new UserService();

    return userServiceInstance;
  }
}

// Extends and Implements
class ProfileService extends UserService implements BasicInsuranceService {
  userService() {
    return new UserService();
  };
}

type ButtonVariants = 'outlined' | 'filled' | 'basic';

interface ButtonComponentState {
  type: ButtonVariants;
}

export class ButtonComponent extends Component<ButtonComponentState> {
  componentDidMount() {
    if (this.props.type === 'basic') {
      return true;
    }
  }
}

enum RequestMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

type RequestResolver = { [key in RequestMethods]: () => void };

type Components = [a: string, b: string];

const components: Components = ['Component 1', 'Component 2'];
const [first, last] = components;

const ResolveRequestByMethod: RequestResolver = {
  POST: () => console.log('Call POST request...'),
  GET: () => console.log('Call GET request...'),
  PUT: () => console.log('Call PUT request...'),
  DELETE: () => console.log('Call DELETE request...'),
  PATCH: () => console.log('Call PATCH request...'),
}

const s = ResolveRequestByMethod[RequestMethods.DELETE];

s()




