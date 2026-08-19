<?php

function obtenerProductosConStock($productos) {
    $disponibles = [];
    foreach ($productos as $producto) {
        if ($producto['stock'] > 0) {
            $disponibles[] = $producto;
        }
    }
    return $disponibles;
}

$productos = [
    ["nombre" => "Teclado", "stock" => 5],
    ["nombre" => "Mouse", "stock" => 0],
    ["nombre" => "Monitor", "stock" => 3]
];

$disponibles = obtenerProductosConStock($productos);

foreach ($disponibles as $producto) {
    echo $producto['nombre'] . "\n";
}

?>
