<?php

$notas = [4, 8, 5, 9, 3, 7];

foreach ($notas as $nota) {
    $estado = ($nota >= 5) ? "Aprobada" : "Desaprobada";
    echo "Nota: $nota - $estado\n";
}

?>
