<?php

function calcularPromedio($notas) {
    return array_sum($notas) / count($notas);
}

function obtenerMayor($notas) {
    $mayor = $notas[0];
    foreach ($notas as $nota) {
        if ($nota > $mayor) {
            $mayor = $nota;
        }
    }
    return $mayor;
}

function obtenerMenor($notas) {
    $menor = $notas[0];
    foreach ($notas as $nota) {
        if ($nota < $menor) {
            $menor = $nota;
        }
    }
    return $menor;
}

function contarAprobados($notas) {
    $contador = 0;
    foreach ($notas as $nota) {
        if ($nota >= 6) {
            $contador++;
        }
    }
    return $contador;
}

function contarDesaprobados($notas) {
    $contador = 0;
    foreach ($notas as $nota) {
        if ($nota < 6) {
            $contador++;
        }
    }
    return $contador;
}

$notas = [8, 4, 6, 9, 3, 7, 5];

foreach ($notas as $nota) {
    echo "$nota\n";
}

echo "Promedio: " . calcularPromedio($notas) . "\n";
echo "Nota más alta: " . obtenerMayor($notas) . "\n";
echo "Nota más baja: " . obtenerMenor($notas) . "\n";
echo "Aprobados: " . contarAprobados($notas) . "\n";
echo "Desaprobados: " . contarDesaprobados($notas) . "\n";

?>
