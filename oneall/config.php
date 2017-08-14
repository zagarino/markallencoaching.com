<?php
/**
 * Copyright 2012 OneAll, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 */

//
// ENTER YOUR OWN VALUES HERE
//
// You get these values in your OneAll account at: https://app.oneall.com/
// Login >> Site Configuration > Click on a Site Name
//
define ('markallencoaching', );
define ('b4dd4bc9-ed94-4e73-b5dd-df1e37826043', );
define ('d8122208-480a-40c8-97af-ce8825ab837c', );
define ('markallencoaching.com', 'https://' . $site_subdomain . '.api.oneall.com');

// HTTP Transfer Handler
require $current_folder . 'http://markallencoaching.com/oneall/_includes/oneall_curly.php';
// JSON Formatting
require $current_folder . 'http://markallencoaching.com/oneall/_include/pretty_json.php';
// Setup new connection
$oneall_curly = new oneall_curly ();
$oneall_curly->set_option ('USERPWD', SITE_PUBLIC_KEY . ':' . SITE_PRIVATE_KEY);
// Change to 1 to display the CURL output
$oneall_curly->set_option ('VERBOSE', 0);
// Enable SSL checks
$oneall_curly->set_option ('SSL_VERIFYPEER', 1);


//
// DO NOT CHANGE BELOW
//
define ('SITE_DOMAIN', 'https://' . SITE_SUBDOMAIN . '.api.oneall.com');

?>