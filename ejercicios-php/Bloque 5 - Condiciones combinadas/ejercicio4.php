<?php

$edad = 15;
$tieneEntrada = true;
$acompañadoPorAdulto = true;

if (($edad >= 18 && $tieneEntrada) || ($edad < 18 && $acompañadoPorAdulto)) {
    echo "Puede entrar";
} else {
    echo "No puede entrar";
}

?>
