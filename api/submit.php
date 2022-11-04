<?php
include('./conn.php');

extract($_POST);
extract($_FILES);

$directory = './../files/staff/' . $campus . '/';
$insert = false;


$pictureTmp = $picture['tmp_name'];
$pictureName = $picture['name'];

$signatureTmp = $signature['tmp_name'];
$signatureName = $signature['name'];

$movePicture = move_uploaded_file($pictureTmp, $directory . 'pictures/' . $pictureName);
$moveSignature = move_uploaded_file($signatureTmp, $directory . 'signatures/' . $signatureName);

if ($movePicture && $moveSignature) {
  $insert = $conn->exec("INSERT INTO entries(sID, sLastName, sFirstName, sMI, cLastName, cFirstName, cMI, cContact, cRelationship, cAddress, cCity, cZip, cProvince, campus, college, program, major, level, section, picture, signature)
VALUES ('$sID', '$sLastName', '$sFirstName', '$sMI', '$cLastName', '$cFirstName', '$cMI', '$cContact', '$cRelationship', '$cAddress', '$cCity', '$cZip', '$cProvince', '$campus', '$college', '$program', '$major', '$level', ' $section','$pictureName', '$signatureName')
");
}

echo $insert;
