// This is an automatically generated file. Please do not change its contents manually!
import * as _SampleService_Teams from './Teams';
import * as __ from './../_';
export default { name: 'SampleService' }
export function _UserAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class User extends Base {
        declare ID?: string;
        declare teams?: __.Association.to.many<_SampleService_Teams.members>;
      declare static readonly actions: Record<never, never>
  };
}
export class User extends _UserAspect(__.Entity) {}
Object.defineProperty(User, 'name', { value: 'SampleService.Users' })
Object.defineProperty(User, 'is_singular', { value: true })
export class Users extends Array<User> {$count?: number}
Object.defineProperty(Users, 'name', { value: 'SampleService.Users' })
