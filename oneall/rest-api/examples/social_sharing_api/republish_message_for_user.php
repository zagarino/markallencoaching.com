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

//HTTP Handler and Config
include '../../_include/init.php';

// Social Sharing API \ Re-Publish a previously published message
// http://docs.oneall.com/api/resources/social-sharing/re-publish-message/

//Republish this message
$message_token = 'b4ebb0a9-5ade-4b2e-b9c8-16385effc58f';

//Publish message for this user_token
$user_token = 'a96318d1-16a4-4461-8e7e-977d78665194';

//Publish message to this providers
$providers = array (
	'facebook',
	'twitter'
);

//Message Structure
$message_structure = array (
	'request' => array (
		'sharing_message' => array (
			'publish_for_user' => array (
				'user_token' => $user_token,
				'providers' => $providers
			)
		)
	)
);

//Encode structure
$message_structure_json = json_encode ($message_structure);

//Make Request
if ($oneall_curly->post (SITE_DOMAIN . "/sharing/messages/" . $message_token . ".json", $message_structure_json))
{
	$result = $oneall_curly->get_result ();
	print_r (json_decode ($result->body));
}
//Error
else
{
	$result = $oneall_curly->get_result ();
	echo "Error: " . $result->http_info . "\n";
}
?>