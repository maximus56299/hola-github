<?php

$productos = [
    ["nombre" => "Teclado", "precio" => 1200],
    ["nombre" => "Mouse", "precio" => 800],
    ["nombre" => "Monitor", "precio" => 15000],
    ["nombre" => "Auriculares", "precio" => 950]
];

$masCaro = $productos[0];

foreach ($productos as $producto) {
    if ($producto['precio'] > $masCaro['precio']) {
        $masCaro = $producto;
    }
}

echo "Producto más caro: {$masCaro['nombre']} - \${$masCaro['precio']}";

?>
