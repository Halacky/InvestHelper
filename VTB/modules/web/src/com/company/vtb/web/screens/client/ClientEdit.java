package com.company.vtb.web.screens.client;

import com.haulmont.cuba.gui.screen.*;
import com.company.vtb.entity.Client;

@UiController("vtb_Client.edit")
@UiDescriptor("client-edit.xml")
@EditedEntityContainer("clientDc")
@LoadDataBeforeShow
public class ClientEdit extends StandardEditor<Client> {
}