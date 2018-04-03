<?php 
$data = file_get_contents('http://gmc.lingotek.com/language');
$json = json_decode($data);
$versionandcode=explode(" ", $http_response_header[0]);
$code=$versionandcode[1];
if ($code==200){
foreach($json as $obj)
{
	echo $obj->language, "\n";
}
}
else
{
	echo "error";
}
?>