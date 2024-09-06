// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './../../..';
import * as __ from './../../../_';
export function _TeamAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Team extends _._cuidAspect(Base) {
        declare members?: __.Composition.of.many<Array< {
  user?: __.Association.to<User>,
}>>;
      declare static readonly actions: typeof _.cuid.actions & Record<never, never>
  };
}
export class Team extends _TeamAspect(__.Entity) {}
Object.defineProperty(Team, 'name', { value: 'my.fancy.namespace.Teams' })
Object.defineProperty(Team, 'is_singular', { value: true })
export class Teams extends Array<Team> {$count?: number}
Object.defineProperty(Teams, 'name', { value: 'my.fancy.namespace.Teams' })

export function _UserAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class User extends _._cuidAspect(Base) {
        declare teams?: __.Association.to.many<__.DeepRequired<my.fancy.namespace.Team>['members']>;
      declare static readonly actions: typeof _.cuid.actions & Record<never, never>
  };
}
export class User extends _UserAspect(__.Entity) {}
Object.defineProperty(User, 'name', { value: 'my.fancy.namespace.Users' })
Object.defineProperty(User, 'is_singular', { value: true })
export class Users extends Array<User> {$count?: number}
Object.defineProperty(Users, 'name', { value: 'my.fancy.namespace.Users' })
