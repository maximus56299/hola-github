<?php

$producto = "Mouse";
$precio = 800;
$stock = 15;
$cantidadSolicitada = 12;

if ($cantidadSolicitada <= $stock) {
    $total = $precio * $cantidadSolicitada;

    if ($cantidadSolicitada >= 10) {
        $total = $total - ($total * 0.15);
    }

    echo "Producto: $producto\n";
    echo "Total a pagar: $total\n";
} else {
    echo "No hay suficiente stock";
}

?>
