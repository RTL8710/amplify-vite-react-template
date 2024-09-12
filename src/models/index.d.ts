import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly event_time?: string | null;
  readonly event_data?: string | null;
  readonly device_id?: string | null;
  readonly event_snap_image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly event_time?: string | null;
  readonly event_data?: string | null;
  readonly device_id?: string | null;
  readonly event_snap_image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerDeviceUUID = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DeviceUUID, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly customer?: string | null;
  readonly status?: string | null;
  readonly validity?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDeviceUUID = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DeviceUUID, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly customer?: string | null;
  readonly status?: string | null;
  readonly validity?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DeviceUUID = LazyLoading extends LazyLoadingDisabled ? EagerDeviceUUID : LazyDeviceUUID

export declare const DeviceUUID: (new (init: ModelInit<DeviceUUID>) => DeviceUUID) & {
  copyOf(source: DeviceUUID, mutator: (draft: MutableModel<DeviceUUID>) => MutableModel<DeviceUUID> | void): DeviceUUID;
}

type EagerDevice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Device, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Users?: (DeviceUser | null)[] | null;
  readonly deviceType?: string | null;
  readonly productType?: string | null;
  readonly deviceName?: string | null;
  readonly deviceModelName?: string | null;
  readonly deviceDateTime?: string | null;
  readonly deviceVersion?: string | null;
  readonly deviceConnectStatus?: boolean | null;
  readonly devicePicture?: string | null;
  readonly deviceGeneralInformation?: string | null;
  readonly alarmNotification?: string | null;
  readonly alarmInformation?: string | null;
  readonly storageInformation?: string | null;
  readonly cardInformation?: string | null;
  readonly motionDetectionInformation?: string | null;
  readonly recordInformation?: string | null;
  readonly electricInformation?: string | null;
  readonly videoInformation?: string | null;
  readonly audioInformation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDevice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Device, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Users: AsyncCollection<DeviceUser>;
  readonly deviceType?: string | null;
  readonly productType?: string | null;
  readonly deviceName?: string | null;
  readonly deviceModelName?: string | null;
  readonly deviceDateTime?: string | null;
  readonly deviceVersion?: string | null;
  readonly deviceConnectStatus?: boolean | null;
  readonly devicePicture?: string | null;
  readonly deviceGeneralInformation?: string | null;
  readonly alarmNotification?: string | null;
  readonly alarmInformation?: string | null;
  readonly storageInformation?: string | null;
  readonly cardInformation?: string | null;
  readonly motionDetectionInformation?: string | null;
  readonly recordInformation?: string | null;
  readonly electricInformation?: string | null;
  readonly videoInformation?: string | null;
  readonly audioInformation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Device = LazyLoading extends LazyLoadingDisabled ? EagerDevice : LazyDevice

export declare const Device: (new (init: ModelInit<Device>) => Device) & {
  copyOf(source: Device, mutator: (draft: MutableModel<Device>) => MutableModel<Device> | void): Device;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly awsUserID?: string | null;
  readonly awsUserName?: string | null;
  readonly phoneNumber?: string | null;
  readonly email?: string | null;
  readonly picture?: string | null;
  readonly devices?: (DeviceUser | null)[] | null;
  readonly region?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly awsUserID?: string | null;
  readonly awsUserName?: string | null;
  readonly phoneNumber?: string | null;
  readonly email?: string | null;
  readonly picture?: string | null;
  readonly devices: AsyncCollection<DeviceUser>;
  readonly region?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerDeviceUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DeviceUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly deviceId?: string | null;
  readonly userId?: string | null;
  readonly device: Device;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDeviceUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DeviceUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly deviceId?: string | null;
  readonly userId?: string | null;
  readonly device: AsyncItem<Device>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DeviceUser = LazyLoading extends LazyLoadingDisabled ? EagerDeviceUser : LazyDeviceUser

export declare const DeviceUser: (new (init: ModelInit<DeviceUser>) => DeviceUser) & {
  copyOf(source: DeviceUser, mutator: (draft: MutableModel<DeviceUser>) => MutableModel<DeviceUser> | void): DeviceUser;
}