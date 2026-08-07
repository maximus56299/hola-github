<?php

$numeros = [4, 8, 15, 16, 23, 42];

$sumaManual = 0;
for ($i = 0; $i < count($numeros); $i++) {
    $sumaManual += $numeros[$i];
}

echo "Suma manual: $sumaManual\n";
echo "Suma con array_sum(): " . array_sum($numeros);

?>
