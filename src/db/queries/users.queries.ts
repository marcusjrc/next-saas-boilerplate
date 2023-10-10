/** Types generated for queries found in "src/db/queries/users.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'FindUserByEmail' parameters type */
export interface IFindUserByEmailParams {
  email?: string | null | void;
}

/** 'FindUserByEmail' return type */
export interface IFindUserByEmailResult {
  email: string;
  id: number;
}

/** 'FindUserByEmail' query type */
export interface IFindUserByEmailQuery {
  params: IFindUserByEmailParams;
  result: IFindUserByEmailResult;
}

const findUserByEmailIR: any = {"usedParamSet":{"email":true},"params":[{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":42,"b":47}]}],"statement":"SELECT id, email\nFROM users\nWHERE email = :email\nLIMIT 1"};

/**
 * Query generated from SQL:
 * ```
 * SELECT id, email
 * FROM users
 * WHERE email = :email
 * LIMIT 1
 * ```
 */
export const findUserByEmail = new PreparedQuery<IFindUserByEmailParams,IFindUserByEmailResult>(findUserByEmailIR);


/** 'CreateNewUser' parameters type */
export interface ICreateNewUserParams {
  email?: string | null | void;
}

/** 'CreateNewUser' return type */
export type ICreateNewUserResult = void;

/** 'CreateNewUser' query type */
export interface ICreateNewUserQuery {
  params: ICreateNewUserParams;
  result: ICreateNewUserResult;
}

const createNewUserIR: any = {"usedParamSet":{"email":true},"params":[{"name":"email","required":false,"transform":{"type":"scalar"},"locs":[{"a":34,"b":39}]}],"statement":"INSERT INTO users (email)\nVALUES (:email)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO users (email)
 * VALUES (:email)
 * ```
 */
export const createNewUser = new PreparedQuery<ICreateNewUserParams,ICreateNewUserResult>(createNewUserIR);


