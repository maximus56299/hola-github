<?php

function calcularPromedio($nota1, $nota2, $nota3) {
    return ($nota1 + $nota2 + $nota3) / 3;
}

function estaAprobado($promedio) {
    return $promedio >= 6 ? "Aprobado" : "Desaprobado";
}

$promedio = calcularPromedio(7, 8, 5);
echo "Promedio: $promedio\n";
echo estaAprobado($promedio);

?>
