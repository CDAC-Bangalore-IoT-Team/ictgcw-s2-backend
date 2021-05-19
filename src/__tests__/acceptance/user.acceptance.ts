// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Client, expect} from '@loopback/testlab';
import {IctgcwS2BackendApplication} from '../..';
import {setupApplication} from './test-helper';

export let token: string;

describe('User Management', () => {
  let client: Client;
  let app: IctgcwS2BackendApplication;
  // let token: string;

  const testUserCredential = {
    fullname: 'Utkarsh Mankad',
    username: 'utkarshmankad',
    emailid: 'utkarsh.mankad4@cdac.in',
    phonenumber: '1234567890',
    companyname: 'cdac',
    companyaddress: 'ecity',
    password: 'password123',
  };

  const loginUserCredentials = {
    emailid: 'utkarsh.mankad4@cdac.in',
    password: 'password123',
  };

  before(givenAClient);

  after(async () => {
    await app.stop();
  });

  async function givenAClient() {
    ({app, client} = await setupApplication());
  }

  it('fails when getting user without login', async () => {
    await client.get('/getuser').expect(401);
  });

  it('sign up successfully', async () => {
    await client.post('/signup').send(testUserCredential).expect(200);
  });

  it('user login successfully', async () => {
    const res = await client
      .post('/login')
      .send(loginUserCredentials)
      .expect(200);
    token = res.body.token;
  });

  /* it('get user successfully after login', async () => {
    await client
      .get('/getuser')
      .set('Authorization', 'Bearer ' + token)
      .expect(200);
  }); */

  it('invokes GET /ping', async () => {
    const res = await client
      .get('/ping?msg=world')
      .set('Authorization', 'Bearer ' + token);
    expect(res.body).to.containEql({greeting: 'Hello from LoopBack'});
  });
});
