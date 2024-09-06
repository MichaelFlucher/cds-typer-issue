using { my.fancy.namespace as db } from '../db/schema';

service SampleService {
    entity Teams as projection on db.Teams;
    entity Users as projection on db.Users;
}