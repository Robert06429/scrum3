<?php

session_start();
session_destroy();

if (empty($_SESSION)) {
    echo  json_encode("Session is destroyed of leeg");
} else {
    echo  json_encode("Session bestaat nog");
}

exit();
?>