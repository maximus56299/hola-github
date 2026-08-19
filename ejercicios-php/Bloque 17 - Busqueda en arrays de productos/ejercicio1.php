<?php

$productos = [
    ["nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["nombre" => "Mouse", "precio" => 800, "stock" => 10],
    ["nombre" => "Monitor", "precio" => 15000, "stock" => 3]
];

$buscado = "Mouse";

foreach ($productos as $producto) {
    if ($producto['nombre'] == $buscado) {
        echo "Nombre: {$producto['nombre']}\n";
        echo "Precio: {$producto['precio']}\n";
        echo "Stock: {$producto['stock']}\n";
    }
}

?>
