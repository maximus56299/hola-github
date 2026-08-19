<?php

$productos = [
    ["id" => 1, "nombre" => "Teclado", "precio" => 1200, "stock" => 5],
    ["id" => 2, "nombre" => "Mouse", "precio" => 800, "stock" => 10],
    ["id" => 3, "nombre" => "Monitor", "precio" => 15000, "stock" => 3]
];

$idBuscado = 3;

foreach ($productos as $producto) {
    if ($producto['id'] == $idBuscado) {
        echo "ID: {$producto['id']}\n";
        echo "Nombre: {$producto['nombre']}\n";
        echo "Precio: {$producto['precio']}\n";
        echo "Stock: {$producto['stock']}\n";
    }
}

?>
