<?php

$productos = [
    ["nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["nombre" => "Mouse", "precio" => 800, "stock" => 10],
    ["nombre" => "Monitor", "precio" => 15000, "stock" => 3]
];

$valorTotal = 0;

foreach ($productos as $producto) {
    $valorProducto = $producto['precio'] * $producto['stock'];
    echo "{$producto['nombre']}: $valorProducto\n";
    $valorTotal += $valorProducto;
}

echo "Valor total del inventario: $valorTotal";

?>
