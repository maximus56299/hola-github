<?php

$numeros = [14, 7, 32, 9, 18, 25, 6];

$suma = 0;
$mayor = $numeros[0];
$menor = $numeros[0];
$pares = 0;
$impares = 0;

foreach ($numeros as $numero) {
    echo "$numero\n";
    $suma += $numero;

    if ($numero > $mayor) {
        $mayor = $numero;
    }

    if ($numero < $menor) {
        $menor = $numero;
    }

    if ($numero % 2 == 0) {
        $pares++;
    } else {
        $impares++;
    }
}

$promedio = $suma / count($numeros);

echo "Suma: $suma\n";
echo "Promedio: $promedio\n";
echo "Mayor: $mayor\n";
echo "Menor: $menor\n";
echo "Pares: $pares\n";
echo "Impares: $impares\n";

?>
