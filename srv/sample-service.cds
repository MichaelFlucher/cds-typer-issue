using { my.fancy.namespace as db } from '../db/schema';

service SampleService {
    entity Users as projection on db.Users;
}