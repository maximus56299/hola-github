<?php

$producto = [
    "nombre" => "Mouse",
    "precio" => 800,
    "stock" => 10
];

echo "Producto: {$producto['nombre']}\n";
echo "Precio: \${$producto['precio']}\n";
echo "Stock: {$producto['stock']}\n";

$producto['precio'] += 100;
$producto['stock'] -= 2;
$producto['categoria'] = "Periféricos";

echo "---\n";
echo "Producto: {$producto['nombre']}\n";
echo "Precio: \${$producto['precio']}\n";
echo "Stock: {$producto['stock']}\n";
echo "Categoría: {$producto['categoria']}\n";

?>
