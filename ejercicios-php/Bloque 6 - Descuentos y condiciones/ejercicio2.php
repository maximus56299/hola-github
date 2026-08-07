<?php

$precioUnitario = 200;
$cantidad = 6;

$subtotal = $precioUnitario * $cantidad;
$descuento = 0;

if ($cantidad >= 5) {
    $descuento = $subtotal * 0.10;
}

$total = $subtotal - $descuento;

echo "Subtotal: $subtotal\n";
echo "Descuento: $descuento\n";
echo "Total final: $total\n";

?>
