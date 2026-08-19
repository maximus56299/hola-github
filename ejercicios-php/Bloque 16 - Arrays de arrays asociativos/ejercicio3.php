<?php

$productos = [
    ["nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["nombre" => "Mouse", "precio" => 800, "stock" => 10],
    ["nombre" => "Monitor", "precio" => 15000, "stock" => 3],
    ["nombre" => "Auriculares", "precio" => 950, "stock" => 7]
];

foreach ($productos as $producto) {
    if ($producto['precio'] > 1000) {
        echo "{$producto['nombre']} - \${$producto['precio']}\n";
    }
}

?>
