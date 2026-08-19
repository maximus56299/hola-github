<?php

function calcularSubtotal($precio, $cantidad) {
    return $precio * $cantidad;
}

function calcularTotal($carrito) {
    $total = 0;
    foreach ($carrito as $item) {
        $total += calcularSubtotal($item['precio'], $item['cantidad']);
    }
    return $total;
}

function aplicarDescuento($total) {
    if ($total > 10000) {
        return $total - ($total * 0.15);
    }
    return $total;
}

$carrito = [
    ["nombre" => "Teclado", "precio" => 1200, "cantidad" => 2],
    ["nombre" => "Monitor", "precio" => 15000, "cantidad" => 1],
    ["nombre" => "Mouse", "precio" => 800, "cantidad" => 3]
];

foreach ($carrito as $item) {
    $subtotal = calcularSubtotal($item['precio'], $item['cantidad']);
    echo "{$item['nombre']} x{$item['cantidad']} - Subtotal: $subtotal\n";
}

$total = calcularTotal($carrito);
$totalFinal = aplicarDescuento($total);

echo "Total: $total\n";
echo "Total final: $totalFinal";

?>
