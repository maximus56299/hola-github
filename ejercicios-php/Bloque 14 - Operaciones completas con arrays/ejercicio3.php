<?php

$notas = [6, 3, 9, 5, 8, 4, 7];

$suma = 0;
$aprobados = 0;
$desaprobados = 0;

foreach ($notas as $nota) {
    echo "$nota\n";
    $suma += $nota;

    if ($nota >= 6) {
        $aprobados++;
    } else {
        $desaprobados++;
    }
}

$promedio = $suma / count($notas);

echo "Promedio: $promedio\n";
echo "Aprobados: $aprobados\n";
echo "Desaprobados: $desaprobados\n";

?>
