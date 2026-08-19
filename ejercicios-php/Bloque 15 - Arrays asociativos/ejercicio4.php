<?php

$producto = [
    "nombre" => "Monitor",
    "precio" => 15000,
    "stock" => 8
];

$cantidadSolicitada = 3;

if ($cantidadSolicitada <= $producto['stock']) {
    $total = $producto['precio'] * $cantidadSolicitada;
    $producto['stock'] -= $cantidadSolicitada;

    echo "Venta realizada\n";
    echo "Producto: {$producto['nombre']}\n";
    echo "Total: $total\n";
    echo "Stock restante: {$producto['stock']}\n";
} else {
    echo "No hay suficiente stock";
}

?>
