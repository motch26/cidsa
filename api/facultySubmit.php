<?php
include('./conn.php');

extract($_POST);
extract($_FILES);

$directory = './../files/faculty/' . $campus . '/';
$insert = false;


$pictureTmp = $picture['tmp_name'];
$pictureName = $picture['name'];

$signatureTmp = $signature['tmp_name'];
$signatureName = $signature['name'];

$movePicture = move_uploaded_file($pictureTmp, $directory . 'pictures/' . $pictureName);
$moveSignature = move_uploaded_file($signatureTmp, $directory . 'signatures/' . $signatureName);

if ($movePicture && $moveSignature) {
  $insert = $conn->exec("INSERT INTO faculty(idNo, lastName, firstName, mi, dob, contact, bloodType, gsis, tin, philHealth, pagibig, address, city, province, cFullName, cContact, campus, office , picture, signature)
VALUES ('$idNo', '$lastName', '$firstName', '$mi', '$dob', '$contact', '$bloodType', '$gsis', '$tin', '$philHealth', '$pagibig', '$address', '$city', '$province', '$cFullName', '$cContact', '$campus', '$office','$pictureName', '$signatureName')
");
}

echo $insert;
