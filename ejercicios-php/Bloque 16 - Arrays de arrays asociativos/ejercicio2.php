<?php

$productos = [
    ["nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["nombre" => "Mouse", "precio" => 800, "stock" => 0],
    ["nombre" => "Monitor", "precio" => 15000, "stock" => 3]
];

foreach ($productos as $producto) {
    if ($producto['stock'] > 0) {
        echo "{$producto['nombre']} - \${$producto['precio']} - Stock: {$producto['stock']}\n";
    }
}

?>
