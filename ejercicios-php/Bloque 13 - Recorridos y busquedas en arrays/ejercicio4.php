<?php

$numeros = [12, 45, 3, 78, 29, 61];

$mayor = $numeros[0];

foreach ($numeros as $numero) {
    if ($numero > $mayor) {
        $mayor = $numero;
    }
}

echo "Mayor (manual): $mayor\n";
echo "Mayor (max()): " . max($numeros);

?>
