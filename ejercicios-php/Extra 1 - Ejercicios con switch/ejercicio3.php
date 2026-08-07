<?php

$numero1 = 8;
$numero2 = 4;
$opcion = 3;

switch ($opcion) {
    case 1:
        echo $numero1 + $numero2;
        break;
    case 2:
        echo $numero1 - $numero2;
        break;
    case 3:
        echo $numero1 * $numero2;
        break;
    case 4:
        echo $numero1 / $numero2;
        break;
    default:
        echo "Opción incorrecta.";
        break;
}

?>
