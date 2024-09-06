using {
    cuid
} from '@sap/cds/common';

namespace my.fancy.namespace;

entity Teams : cuid {
  members : Composition of many { key user: Association to Users; }
}
entity Users : cuid {
  teams: Association to many Teams.members on teams.user = $self;
}