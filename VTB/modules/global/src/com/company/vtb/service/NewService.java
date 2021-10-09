package com.company.vtb.service;

import com.company.vtb.entity.Client;
import com.haulmont.cuba.security.entity.UserRole;

import java.util.List;
import java.util.UUID;

public interface NewService {
    String NAME = "vtb_NewService";

    void registrationUser(String login, String password);

    List<Client> getInfoFromUser(UUID id);
}