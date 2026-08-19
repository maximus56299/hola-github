<?php

$productos = [
    ["nombre" => "Teclado", "precio" => 1200],
    ["nombre" => "Mouse", "precio" => 800],
    ["nombre" => "Monitor", "precio" => 15000]
];

foreach ($productos as $producto) {
    echo "{$producto['nombre']} - \${$producto['precio']}\n";
}

?>
