// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, DeviceUUID, Device, User, Todo, DeviceUser } = initSchema(schema);

export {
  Event,
  DeviceUUID,
  Device,
  User,
  Todo,
  DeviceUser
};