<?php

function contarAprobados($notas) {
    $contador = 0;
    foreach ($notas as $nota) {
        if ($nota >= 6) {
            $contador++;
        }
    }
    return $contador;
}

$notas = [4, 7, 8, 5, 9, 6];
echo contarAprobados($notas);

?>
