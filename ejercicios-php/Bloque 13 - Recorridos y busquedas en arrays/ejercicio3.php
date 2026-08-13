<?php

$nombres = ["Ana", "Luis", "Marta", "Pedro", "Sofía"];
$buscado = "Marta";

$encontrado = false;

foreach ($nombres as $nombre) {
    if ($nombre == $buscado) {
        $encontrado = true;
    }
}

echo $encontrado ? "El nombre fue encontrado\n" : "El nombre no existe\n";

echo in_array($buscado, $nombres) ? "El nombre fue encontrado" : "El nombre no existe";

?>
