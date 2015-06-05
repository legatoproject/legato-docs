var legato_services =
[
    [ "Overview", "legato_services_overview.html", null ],
    [ "AirVantage Connector", "c_le_avc.html", [
      [ "Firmware/Application Update", "c_le_avc.html#c_le_avc_update", [
        [ "Update Control", "c_le_avc.html#c_le_avc_update_control", null ],
        [ "Application Blocking", "c_le_avc.html#c_le_avc_update_app", null ],
        [ "Partial Downloads", "c_le_avc.html#c_le_avc_partial_download", null ]
      ] ]
    ] ],
    [ "ADC Channel API", "c_adc.html", null ],
    [ "Application Information API", "c_app_info.html", null ],
    [ "Antenna Monitoring", "c_antenna.html", [
      [ "IPC interfaces binding", "c_antenna.html#le_antenna_binding", null ],
      [ "Cellular or Diversity antenna", "c_antenna.html#le_antenna_cell_section", [
        [ "Diagnostics principle", "c_antenna.html#le_antenna_cell_diag_subsection", null ],
        [ "Thresholds", "c_antenna.html#le_antenna_cell_thres_subsection", null ]
      ] ],
      [ "GNSS antenna", "c_antenna.html#le_antenna_gnss_section", [
        [ "Diagnostics principle", "c_antenna.html#le_antenna_gnss_diag_subsection", null ],
        [ "Thresholds", "c_antenna.html#le_antenna_gnss_thre_subsection", null ]
      ] ],
      [ "API description", "c_antenna.html#API_desc", null ]
    ] ],
    [ "Audio", "c_audio.html", [
      [ "IPC interfaces binding", "c_audio.html#le_audio_binding", null ],
      [ "Configure the Audio", "c_audio.html#le_audio_configuration", null ],
      [ "Open/Close an Audio Interface", "c_audio.html#le_audio_interfaces", null ],
      [ "Control an Audio Stream", "c_audio.html#le_audio_streams", null ],
      [ "Create Audio connectors", "c_audio.html#le_audio_connectors", null ],
      [ "Specifying audio formats", "c_audio.html#le_audio_formats", [
        [ "Set / Get media configuration", "c_audio.html#le_audio_media_profile", null ],
        [ "Play / Record a file", "c_audio.html#le_audio_pb_rec", null ]
      ] ],
      [ "DTMF", "c_audio.html#le_audio_dtmf", null ],
      [ "Code samples", "c_audio.html#le_audio_samples", null ]
    ] ],
    [ "Cellular Network", "c_le_cellnet.html", [
      [ "IPC interfaces binding", "c_le_cellnet.html#le_cellnet_binding", null ],
      [ "Requesting the Cellular Network", "c_le_cellnet.html#c_le_cellnet_requesting", null ],
      [ "Network Options", "c_le_cellnet.html#c_le_cellnet_options", null ],
      [ "Cellular Network configuration tree", "c_le_cellnet.html#c_le_cellnet_configdb", null ]
    ] ],
    [ "Config Tree", "legato_services_config_tree.html", "legato_services_config_tree" ],
    [ "Data Connection", "c_le_data.html", [
      [ "IPC interfaces binding", "c_le_data.html#le_data_binding", null ],
      [ "Default Data Connection", "c_le_data.html#c_le_data_default", null ],
      [ "Configuration tree", "c_le_data.html#c_le_data_configdb", null ],
      [ "Data Connection Options", "c_le_data.html#c_le_data_options", null ]
    ] ],
    [ "eCall", "c_ecall.html", "c_ecall" ],
    [ "GNSS", "c_gnss.html", [
      [ "IPC interfaces binding", "c_gnss.html#le_gnss_binding", null ],
      [ "Force cold restart", "c_gnss.html#le_gnss_ForceColdRestart", null ],
      [ "GNSS constellation selection", "c_gnss.html#le_gnss_SetGetConstellation", null ],
      [ "Assisted GNSS", "c_gnss.html#le_gnss_Assisted_GNSS", [
        [ "Server based Extended Ephemeris", "c_gnss.html#le_gnss_Assisted_GNSS_EE", null ],
        [ "3GPP User Plane (OMA SUPL)", "c_gnss.html#le_gnss_Assisted_GNSS_UP", null ]
      ] ]
    ] ],
    [ "Input Power Supply Monitoring API", "c_ips.html", [
      [ "IPC interfaces binding", "c_ips.html#le_ips_binding", null ],
      [ "Power Supply Monitoring", "c_ips.html#Input", null ]
    ] ],
    [ "Modem Call Control", "c_mcc.html", "c_mcc" ],
    [ "Modem Data Control", "c_mdc.html", [
      [ "IPC interfaces binding", "c_mdc.html#le_mdc_binding", null ],
      [ "Data Profiles", "c_mdc.html#le_mdc_profile", null ],
      [ "Data Sessions", "c_mdc.html#le_mdc_session", null ],
      [ "Data Statistics", "c_mdc.html#le_mdc_dataStatistics", null ]
    ] ],
    [ "Modem Firmware Update", "c_fwupdate.html", [
      [ "IPC interfaces binding", "c_fwupdate.html#le_fwupdate_binding", null ],
      [ "Update Firmware Image", "c_fwupdate.html#le_fwupdate_image", null ]
    ] ],
    [ "Modem Information", "c_info.html", [
      [ "IPC interfaces binding", "c_info.html#le_info_binding", null ],
      [ "Query Firmware Version", "c_info.html#le_info_version", null ],
      [ "Query Device information", "c_info.html#le_info_model", null ]
    ] ],
    [ "Modem Radio Control", "c_mrc.html", [
      [ "IPC interfaces binding", "c_mrc.html#le_mrc_binding", null ],
      [ "Radio Power Management", "c_mrc.html#le_mrc_power", null ],
      [ "Radio Configuration preferences", "c_mrc.html#le_mrc_configuration", null ],
      [ "Radio Access Technology (RAT)", "c_mrc.html#le_mrc_rat", null ],
      [ "Network Registration", "c_mrc.html#le_mrc_registration", null ],
      [ "Signal Quality", "c_mrc.html#le_mrc_signal", null ],
      [ "Current Network Information", "c_mrc.html#le_mrc_network_information", null ],
      [ "Network Scan", "c_mrc.html#le_mrc_networkScan", null ],
      [ "Neighboring Cells Information", "c_mrc.html#le_mrc_ngbr", null ]
    ] ],
    [ "Positioning", "c_pos.html", "c_pos" ],
    [ "Power Manager", "c_pm.html", [
      [ "IPC interfaces binding", "c_pm.html#le_pm_binding", null ],
      [ "Requesting and releasing a wakeup source", "c_pm.html#le_pm_request", null ]
    ] ],
    [ "Ring Indicator Signal", "c_ri_pin.html", [
      [ "IPC interfaces binding", "c_ri_pin.html#c_riPin_binding", null ],
      [ "Ring Indication signal", "c_ri_pin.html#c_riPin_usage", null ]
    ] ],
    [ "Secure Storage", "c_sec_store.html", null ],
    [ "SIM", "c_sim.html", [
      [ "IPC interfaces binding", "c_sim.html#le_sim_binding", null ],
      [ "Select a card to use", "c_sim.html#le_sim_SelectCard", null ],
      [ "SIM identification information", "c_sim.html#le_sim_id", null ],
      [ "SIM Authentication", "c_sim.html#le_sim_auth", null ],
      [ "SIM states", "c_sim.html#le_sim_state", null ],
      [ "Local SIM profile switch", "c_sim.html#le_sim_profile_switch", null ],
      [ "SIM Toolkit", "c_sim.html#le_sim_stk", null ]
    ] ],
    [ "SMS", "c_sms.html", "c_sms" ],
    [ "SMS Inbox Service", "c_sms_inbox.html", [
      [ "IPC interfaces binding", "c_sms_inbox.html#le_smsInbox_binding", null ],
      [ "Initialise a message box", "c_sms_inbox.html#le_smsInbox_init", null ],
      [ "Receiving a message", "c_sms_inbox.html#le_smsInbox_receiving", null ],
      [ "Getting received messages", "c_sms_inbox.html#le_smsInbox_listing", null ],
      [ "Deleting a message", "c_sms_inbox.html#le_smsInbox1_deleting", null ],
      [ "Close a message box", "c_sms_inbox.html#le_smsInbox_end", null ],
      [ "Configuration tree", "c_sms_inbox.html#le_smsInbox_configdb", null ],
      [ "Deleting a message", "c_sms_inbox.html#le_smsInbox_deleting", null ]
    ] ],
    [ "Software Update", "c_update.html", [
      [ "API Usage Guideline", "c_update.html#API_Usage_Guideline", null ],
      [ "Sample Code", "c_update.html#update_example", null ]
    ] ],
    [ "Supervisor", "legato_services_supervisor.html", "legato_services_supervisor" ],
    [ "Temperature Monitoring", "c_temp.html", [
      [ "IPC interfaces binding", "c_temp.html#le_temp_binding", null ],
      [ "Radio Temperature Thresholds", "c_temp.html#c_temp_radio", null ],
      [ "Platform Temperature Thresholds", "c_temp.html#c_temp_platform", null ],
      [ "Monitoring", "c_temp.html#Temperature", null ]
    ] ],
    [ "Voice Call Service", "c_le_voicecall.html", [
      [ "IPC interfaces binding", "c_le_voicecall.html#le_voicecall_binding", null ],
      [ "Starting a Voice call", "c_le_voicecall.html#c_le_voicecall_outgoing", null ],
      [ "Answering a Voice call", "c_le_voicecall.html#c_le_voicecall_incoming", null ],
      [ "Voice call Options", "c_le_voicecall.html#c_le_voicecall_options", null ]
    ] ],
    [ "Watchdog Service", "c_wdog.html", null ]
];