-- begin VTB_CLIENT
alter table VTB_CLIENT add constraint FK_VTB_CLIENT_ON_USER foreign key (USER_ID) references SEC_USER(ID)^
create index IDX_VTB_CLIENT_ON_USER on VTB_CLIENT (USER_ID)^
-- end VTB_CLIENT
