// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
export default { name: 'SampleService' }
export type Teams = {};
export function _TeamAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Team extends Base {
        declare ID?: string;
        declare members?: __.Composition.of.many<__.DeepRequired<SampleService.Team>['members']>;
      declare static readonly actions: Record<never, never>
  };
}
export class Team extends _TeamAspect(__.Entity) {}
Object.defineProperty(Team, 'name', { value: 'SampleService.Teams' })
Object.defineProperty(Team, 'is_singular', { value: true })
export class Teams extends Array<Team> {$count?: number}
Object.defineProperty(Teams, 'name', { value: 'SampleService.Teams' })

export function _UserAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class User extends Base {
        declare ID?: string;
        declare teams?: __.Association.to.many<__.DeepRequired<SampleService.Team>['members']>;
      declare static readonly actions: Record<never, never>
  };
}
export class User extends _UserAspect(__.Entity) {}
Object.defineProperty(User, 'name', { value: 'SampleService.Users' })
Object.defineProperty(User, 'is_singular', { value: true })
export class Users extends Array<User> {$count?: number}
Object.defineProperty(Users, 'name', { value: 'SampleService.Users' })
