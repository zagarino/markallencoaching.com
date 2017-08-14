<?php
/*****************************************************************************
/ Javier Basualdo - 2012
/****************************************************************************/

$FOLDER_PROGRESS = 'http://scottzagarino/markallencoaching/downloads/progress';
$FOLDER_FILES = 'http://scottzagarino/markallencoaching/downloads/files/';

switch($_REQUEST['acc']){

	case 'download':

		$file = trim($_REQUEST['n']);
				
		if(!file_exists($FOLDER_FILES.$file)){
			echo '<script>alert("Error: The file do not exists.");</script>';
		} else {
			$continue = 'OK';
		}
						
		if($continue=='OK'){
			
			$result = fopen($FOLDER_FILES.$file,'r');
			$bytes = filesize($FOLDER_FILES.$file);
			
			if($bytes<1){
				//header('Location: /');
				echo '<script>alert("Error: The file bytes length is 0.");</script>';
			} else {
				
				$fp1 = fopen($FOLDER_PROGRESS.trim($_REQUEST['tmp']).'.html','w');
				fwrite($fp1,'Downloading');
				fclose($fp1);
				
				header("Pragma: public");
				header("Expires: 0");
				header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
				header("Cache-Control: public");
				header("Content-Description: File Transfer");
				header("Content-type: application/force-download");
				header("Content-Disposition: attachment; filename=".$file); 
				header("Content-Type: application/octet-stream");
				header("Content-Transfer-Encoding: binary");
				header("Content-Length: ".$bytes."");
				
				ignore_user_abort(true);
				
				while ( !feof($result)) {
					echo fread($result, 4096); //handle
					if (connection_status()!=0 || connection_aborted()){
						$bytes_transferred = ftell($result); //handle
						if($bytes_transferred<$bytes) $accion = 'Canceled'; else $accion = 'Done!'; //Done here not run.
						file_put_contents($FOLDER_PROGRESS.trim($_REQUEST['tmp']).'.html',$accion);

						sleep(2);
						file_put_contents($FOLDER_PROGRESS.trim($_REQUEST['tmp']).'.html','Waiting');	
						flush();
					die;
					} else {
						$cuenta = ftell($result) / $bytes * 100;
						if($cuenta>=100){
							$cuenta = 'Done!';

						} else {
							$cuenta = 'Downloaded '.round($cuenta).'%';
						}
						file_put_contents($FOLDER_PROGRESS.trim($_REQUEST['tmp']).'.html',$cuenta);
						if($cuenta=='Done!'){
							sleep(2);
							file_put_contents($FOLDER_PROGRESS.trim($_REQUEST['tmp']).'.html','Waiting');
							flush();
						}
					}
					//Activate this for delay download.
					//flush();
					//sleep(1);
				}
				fclose($result);
				
			}
			
		}

	break;
		
	case 'tmp':			
					
		//create file control
		
		//$temp = '__'.time();
		$temp = '__'.$_REQUEST['nf'];
		$fp = fopen($FOLDER_PROGRESS.$temp.'.html','w');
		fwrite($fp,'Waiting');
		fclose($fp);							
		
		echo trim($temp);
		
	break;						   
 
} 
?>         