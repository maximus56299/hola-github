<?php

$notas = [4, 7, 8, 3, 6, 9, 5];

$contador = 0;

foreach ($notas as $nota) {
    if ($nota >= 6) {
        $contador++;
    }
}

echo "Cantidad de notas aprobadas: $contador";

?>
