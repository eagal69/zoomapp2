import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'zQF0ndJZRZmZSSzxQtVU_g',
  sdkSecret: 'lVa63xwoRl0nL6ryl9wiNRS0GIM41988AOmw',
  webEndpoint: 'zoom.us',
  topic: '1234567890',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '123456',
  signature: '',
  sessionKey: '',
  userIdentity: 'Carjiffy',
  // The user role. 1 to specify host or co-host. 0 to specify participant, Participants can join before the host. The session is started when the first user joins. Be sure to use a number type.
  role: 0
};
