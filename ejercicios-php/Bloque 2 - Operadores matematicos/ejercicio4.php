<?php

$minutosTotales = 135;

$horas = intdiv($minutosTotales, 60);
$minutos = $minutosTotales % 60;

echo "$minutosTotales minutos equivalen a $horas horas y $minutos minutos.";

?>
