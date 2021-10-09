package com.company.vtb.web.screens.client;

import com.haulmont.cuba.gui.screen.*;
import com.company.vtb.entity.Client;

@UiController("vtb_Client.browse")
@UiDescriptor("client-browse.xml")
@LookupComponent("clientsTable")
@LoadDataBeforeShow
public class ClientBrowse extends StandardLookup<Client> {
}