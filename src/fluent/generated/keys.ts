import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '115a4ed9936536103b65f5532bba10fb': {
                        table: 'sys_kmf_module_key_policy'
                        id: '115a4ed9936536103b65f5532bba10fb'
                    }
                    '11aa03c993adb2103b65f5532bba102a': {
                        table: 'sys_ui_element'
                        id: '11aa03c993adb2103b65f5532bba102a'
                    }
                    '15aa03c993adb2103b65f5532bba1027': {
                        table: 'sys_ui_element'
                        id: '15aa03c993adb2103b65f5532bba1027'
                    }
                    '19aa03c993adb2103b65f5532bba102f': {
                        table: 'sys_ui_element'
                        id: '19aa03c993adb2103b65f5532bba102f'
                    }
                    '1daa03c993adb2103b65f5532bba102c': {
                        table: 'sys_ui_element'
                        id: '1daa03c993adb2103b65f5532bba102c'
                    }
                    '51aa03c993adb2103b65f5532bba1000': {
                        table: 'sys_ui_section'
                        id: '51aa03c993adb2103b65f5532bba1000'
                    }
                    '51aa03c993adb2103b65f5532bba102c': {
                        table: 'sys_ui_element'
                        id: '51aa03c993adb2103b65f5532bba102c'
                    }
                    '55aa03c993adb2103b65f5532bba100c': {
                        table: 'sys_ui_element'
                        id: '55aa03c993adb2103b65f5532bba100c'
                    }
                    '55aa03c993adb2103b65f5532bba1029': {
                        table: 'sys_ui_element'
                        id: '55aa03c993adb2103b65f5532bba1029'
                    }
                    '59aa03c993adb2103b65f5532bba1026': {
                        table: 'sys_ui_element'
                        id: '59aa03c993adb2103b65f5532bba1026'
                    }
                    '59aa03c993adb2103b65f5532bba1031': {
                        table: 'sys_ui_element'
                        id: '59aa03c993adb2103b65f5532bba1031'
                    }
                    '5daa03c993adb2103b65f5532bba102e': {
                        table: 'sys_ui_element'
                        id: '5daa03c993adb2103b65f5532bba102e'
                    }
                    '91aa03c993adb2103b65f5532bba102e': {
                        table: 'sys_ui_element'
                        id: '91aa03c993adb2103b65f5532bba102e'
                    }
                    '95aa03c993adb2103b65f5532bba102b': {
                        table: 'sys_ui_element'
                        id: '95aa03c993adb2103b65f5532bba102b'
                    }
                    '99aa03c993adb2103b65f5532bba100a': {
                        table: 'sys_ui_element'
                        id: '99aa03c993adb2103b65f5532bba100a'
                    }
                    '99aa03c993adb2103b65f5532bba1028': {
                        table: 'sys_ui_element'
                        id: '99aa03c993adb2103b65f5532bba1028'
                    }
                    '9daa03c993adb2103b65f5532bba1025': {
                        table: 'sys_ui_element'
                        id: '9daa03c993adb2103b65f5532bba1025'
                    }
                    '9daa03c993adb2103b65f5532bba1030': {
                        table: 'sys_ui_element'
                        id: '9daa03c993adb2103b65f5532bba1030'
                    }
                    admin_separator: {
                        table: 'sys_app_module'
                        id: '677aa1b3c9b848f4840e6982146d273f'
                    }
                    ae04c74d936db2103b65f5532bba10f9: {
                        table: 'sys_script_fix'
                        id: 'ae04c74d936db2103b65f5532bba10f9'
                    }
                    analysis_results_module: {
                        table: 'sys_app_module'
                        id: 'b953e8cb9dab447884837f05ad5401bf'
                    }
                    analysis_timeout_prop: {
                        table: 'sys_properties'
                        id: '055187d38b634cce91504bbee66bc3a9'
                    }
                    analyze_test_attachments: {
                        table: 'sys_ui_action'
                        id: '42aa4d507f50465fb43caf441353509f'
                    }
                    auto_analysis_prop: {
                        table: 'sys_properties'
                        id: 'd83391e785154640882c3c3b74117308'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '422ae23b91ad4dbeb8afd091b18bf886'
                    }
                    confidence_threshold_prop: {
                        table: 'sys_properties'
                        id: '5f6a29ecde6a4e7caf8f457356fda516'
                    }
                    d1aa03c993adb2103b65f5532bba1030: {
                        table: 'sys_ui_element'
                        id: 'd1aa03c993adb2103b65f5532bba1030'
                    }
                    d5aa03c993adb2103b65f5532bba102d: {
                        table: 'sys_ui_element'
                        id: 'd5aa03c993adb2103b65f5532bba102d'
                    }
                    d9aa03c993adb2103b65f5532bba102a: {
                        table: 'sys_ui_element'
                        id: 'd9aa03c993adb2103b65f5532bba102a'
                    }
                    ddaa03c993adb2103b65f5532bba1027: {
                        table: 'sys_ui_element'
                        id: 'ddaa03c993adb2103b65f5532bba1027'
                    }
                    debug_level_prop: {
                        table: 'sys_properties'
                        id: '99c8bc2d10524b72a6452d0c87277ea3'
                    }
                    max_file_size_prop: {
                        table: 'sys_properties'
                        id: 'e3103c9740754148ab7829482163b235'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '1ff2cc85c51f4e81be6d68d9e96f5af8'
                    }
                    pdf_processing_prop: {
                        table: 'sys_properties'
                        id: 'ce1459d78a984d22b746bddae9f92abd'
                    }
                    photo_analysis_category: {
                        table: 'sys_app_category'
                        id: 'a02d1463e56b46c1bb2f4ba29b8f2f5a'
                    }
                    photo_analysis_log_level: {
                        table: 'sys_properties'
                        id: 'fe07de195fea429989f78593d6aa30f7'
                    }
                    photo_analysis_menu: {
                        table: 'sys_app_application'
                        id: '974286216ab445f8b59ec0ef9eb80150'
                    }
                    photo_properties_page: {
                        table: 'sys_ui_page'
                        id: '0daf9a08594143d28b6569e6fb1f7e86'
                    }
                    PhotoAnalysisEngine: {
                        table: 'sys_script_include'
                        id: '112e739772c644219a0275ce10806384'
                    }
                    properties_module: {
                        table: 'sys_app_module'
                        id: '81bd37d84d0e458e810b70509d4d6a16'
                    }
                    risk_escalation_prop: {
                        table: 'sys_properties'
                        id: '533bed9ee1724f58b22c8cd149fba066'
                    }
                    roles_module: {
                        table: 'sys_app_module'
                        id: 'd9976291268a489eafb824cf85b13759'
                    }
                    'src_server_acl-scripts_photo-admin-delete_js': {
                        table: 'sys_module'
                        id: 'f6cdee7865bb46f78a3b85443ed869fe'
                    }
                    'src_server_acl-scripts_photo-analyst-read_js': {
                        table: 'sys_module'
                        id: 'fe9dbfeba45e4537aecc64e498cd574f'
                    }
                    'src_server_acl-scripts_photo-investigator-create_js': {
                        table: 'sys_module'
                        id: '6aa8e18789e74ddbb1ed5f1e67a9fb10'
                    }
                    'src_server_acl-scripts_photo-investigator-write_js': {
                        table: 'sys_module'
                        id: 'eee9131e535c435c9a1ddf7fa3638685'
                    }
                    'src_server_photo-analyzer_js': {
                        table: 'sys_module'
                        id: '303632fa662449979cb69c5c6da5c3e6'
                    }
                    supported_formats_prop: {
                        table: 'sys_properties'
                        id: '31c2308c52c94bf7934d75cc15b4bb1a'
                    }
                    test_form_module: {
                        table: 'sys_app_module'
                        id: '9ea95cc1284245d4abed1f0c2b71a8a7'
                    }
                    testing_separator: {
                        table: 'sys_app_module'
                        id: 'bf94dbcb178d4629809ef09f07ddea6b'
                    }
                    'x_12167_analyzer/properties': {
                        table: 'sys_ux_lib_asset'
                        id: 'd5daaedae4eb4fd1988335976d73760d'
                    }
                    'x_12167_analyzer/properties.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'a84ddc41ac07460f933b13a332ba1e74'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '03c64c925d3f48079b9b7abbb11b806b'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'metadata_anomalies_found'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0559885079b44495854c861ef9dcf2cf'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'fraud_risk_level'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '057cef4b82804f24bb391d02a36e879b'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'recommended_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0891f59034d3426f9c9eccc9224d74c2'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'metadata_analysis_details'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09eefe3b944241b28e690fc45e52171a'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'analysis_findings'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '116d90830c5b46d1bca88c8006e15e30'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13cf884d3cfb4ace9de04a813bb7a22e'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'technical_findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '151508f1c626489ba24ba740edb26b59'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'recommended_action'
                            value: 'escalate'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '16fed43253ee41999ac32556f4a520a2'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'expected_risk_level'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1894c2aec2b640df8dfdeef09973cbad'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c13baaca37b4d628688540ec33f4527'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_started'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1d87dc4bacad470086533a78ec855c3a'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'actual_risk_level'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ea902f7ebcb4f32843107b9c33e0700'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '208237eceb7442709e8c895cec8e6e51'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'error_message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '21a510beec554b4a8a5065bb613b3013'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'recommended_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2214a63df359495da238f0425a76f07b'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2311beea99364976ad84990dd59d0c7b'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'actual_risk_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '233a551524974439b062203ee252f6fc'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'attachment'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '252474409bc14e8da524cd480c0f1fb4'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25e4efadbfe34ca8bc26e1051c9801ef'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'fraud_risk_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '293b9c580f36431b8b774bef4155f6bb'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'timestamp_inconsistencies'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '2a6c481ba5b642c8849e0e8cd1544fbb'
                        key: {
                            sys_ui_action: '42aa4d507f50465fb43caf441353509f'
                            sys_user_role: {
                                id: 'e13920522f1e429ea0499614b816de6c'
                                key: {
                                    name: 'x_12167_analyzer.photo_investigator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2cca42fab0624da096c0fa72e5eb61de'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_status'
                            value: 'failed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2dd91b2a69de447f957970a4a7d7f6c5'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'recommended_action'
                            value: 'investigate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f8063ec0f1945bd903d904f95299019'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'pixelation_analysis_details'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '356c798ed42348da8637d37ed54a4524'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'recommended_action'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3875c39b5f154c76b6f73e9042d8aebf'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_completed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3aa085e8f28a4665b94e08877b9d89ad'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_result'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ad7a30df9e34d37b9f4a7f81545600e'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'file_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e8fdbc8a3254019a730dcc436a843ab'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4002e421f2194686bd4411fabbcdb62c'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'timestamp_inconsistencies'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '446117cb9a384d29974f171096f17498'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '45ac1d1aac6747c0aef1adb70a3fbf93'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '47bff2252a564c8a89653bbc011c5882'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '485ad016f6cf4e3dafe46c3b6113d978'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'image_dimensions'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b2dfdd8321f41c3a8227234c1e52786'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'pixelation_anomalies_found'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d1fb93b62b94169bbf99e4f722e46bd'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'file_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51a231ae37564a20b42e193ffb90fa1d'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'fraud_risk_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '574472b123694c84852c752139a4a079'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_result'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '574b31ef5496425cb6adad638d700544'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_status'
                            value: 'error'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5a1cc72d4bfa4fb5ac1212389e861a74'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_status'
                            value: 'running'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d2dfffe931447668427c4a4d8ff2584'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_result'
                            value: 'fail'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5da27effe22b4793b1ba1d416a58f2d6'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_run_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5fe04e19bb1344558b7c6d930afd7a62'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'compression_artifacts_found'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61139adfdbc94b68b36fc92d999d5d4b'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'confidence_score'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61af6ce616734d64b72337a05ebe50bb'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'recommended_action'
                            value: 'no_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '696701c385af48f9b51044b3c0ddebd6'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'attachment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f999649225d47a29f6704b9517afd70'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'confidence_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '776c22dbd57b44bcb0258bfdf7b14146'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'technical_findings'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c58889dd64840ee8a92d4a03a3f283f'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'analysis_findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f3200da0e9d49318f1b9d057cb52dcd'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8159f8da0981482b82d61b275d7b3593'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '864352277b2043d798301b4b7c661942'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '90980913d6e84184800ddf8f2e9623ef'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '909d9c4d861f4fe5b2f39442ab33494b'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'actual_risk_level'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '90f0b17b923346cb8144e437bb5ae829'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'compression_artifacts_found'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '92ca7edb7a0540188f3a0d34298cd236'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'expected_risk_level'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9497a28673ec454d9e5415492654ff86'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'pixelation_analysis_details'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '95a474ebca8f463fa1d19a4333aa1369'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'metadata_anomalies_found'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9978b64ccec8476c9f159286dbfd0977'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'file_size_bytes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99a967e96a9f4a4eb61ae218b491ae63'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'pixelation_anomalies_found'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a0455281a07429ea2dedf58a4dcf7dc'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_notes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a5ca0174457409f98feeb3b0a91989e'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'expected_fraud_indicators'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e04287258b74283bbb0aa72c3410378'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_completed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f5bf2b28d6f4afd83dd1c0a6985c659'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'expected_fraud_indicators'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a13762997a64489aad173aea7402685f'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a22e35e286e9496493c2ace55c5388db'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3ac22163cb64eec8f20434714b378a0'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_status'
                            value: 'failed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a414016393c64834a46a43df605bec9b'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'expected_risk_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a6518845db684767b31bd27955a41eb8'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'expected_risk_level'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6a33225c0864978afa450c6e7151d6a'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'confidence_score'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aaefb3ac60f34973ba79570a1eb0f8a0'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'attachments_processed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ace389f1b5a6480181647aca7b3026ac'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ae23488ee28e43728f97eb57a2a8f205'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_started'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'af48eaa71b7b4b8a869585e262a0e72c'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b317737b32184d10b116669d30d8f2ca'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b3456e53f1894b1c96011274507eb227'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_result'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b8ded30607ff49398a2b09d2f176dee4'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'actual_risk_level'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b98528c005744ff884366e69bb0350a2'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_status'
                            value: 'ready_to_run'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd35aa4eab84424b842423696f301f04'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'recommended_action'
                            value: 'review'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c14578fcb6fb4ebebae3d453a971a024'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'error_message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c227647bd1be4340a5180ba6bd5f0e6b'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'hr_case'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c2e7ec4f4d62420a96cbc65dad22f89f'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'analysis_completed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8bb15a16d214379a274da6bbbb60dcf'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd3102abf50b4e0dac243281da9fc2fa'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cfdb565ae2ea40f0b9a3c447f6e6cd8c'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'fraud_risk_level'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1732b1d63da4157bf579a733d23a49e'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd348fbad2e0e42759440a65de02e9201'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'expected_risk_level'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd3d1af7296fd4551b22507beccc00430'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'attachments_processed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd449fe6023bf4c7d95bf7ae03e4a98d9'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'metadata_analysis_details'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd5444df92181437aa383b6d6a6433766'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd66087ac43c343b9a5895e00be5ccd21'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7859bd41a494c9a941085093ac4f5dc'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'expected_risk_level'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd9a9169e122e419194b7ddd424576a11'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'actual_risk_level'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da074b7ef249462e8cefc5d3b13ccd68'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'confidence_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db8100a95ac1436a9f5b00f36aa6d6a5'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_result'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dd6497bbd1644f40a5602f2a30836832'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_run_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'de0486f01176487d85bcb7311b3af90c'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'fraud_risk_level'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dec62eab57bf45d6ac2e23c3e62b40e5'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'hr_case'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e07c69ca28534624b9906831b5dee302'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'fraud_risk_level'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e22a209ce5134857a866fd7aeb55d6f6'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'test_result'
                            value: 'pass'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e5d85355523b40d89f6ab4b827a42136'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'analysis_completed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e8201560bdf44295ba884050be7b498c'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'actual_risk_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e9ed29e8858443428736284e8aeda879'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'analysis_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eeb1bed1b7db41b7aa2489ab925536e7'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'actual_risk_level'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'efec0ea4c1674dcca27f43aecd875bab'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'image_dimensions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd04d9fde32047feb57c4c7223e0dd7e'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'file_size_bytes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fe1ff514f7b74d03ad3262d9a53b1d2e'
                        key: {
                            name: 'x_12167_analyzer_photo_test_cases'
                            element: 'expected_risk_level'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fffa8c0d83c14260872f983645576b65'
                        key: {
                            name: 'x_12167_analyzer_photo_analysis_results'
                            element: 'fraud_risk_level'
                            value: 'medium'
                        }
                    },
                ]
            }
        }
    }
}
