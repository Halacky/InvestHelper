create table VTB_CLIENT (
    ID uuid,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    User_id uuid not null,
    balance decimal(19, 2),
    completeCourse integer,
    levelFinance integer,
    timeFirstSession time,
    --
    primary key (ID)
);