<?php

$numeros = [10, 25, 30, 45, 60];

$suma = array_sum($numeros);
$cantidad = count($numeros);
$promedio = $suma / $cantidad;

echo "Suma total: $suma\n";
echo "Cantidad de elementos: $cantidad\n";
echo "Promedio: $promedio\n";

?>
