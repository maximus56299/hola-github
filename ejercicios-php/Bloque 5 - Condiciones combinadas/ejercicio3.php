<?php

$precio = 500;
$presupuesto = 3000;
$stock = 10;
$cantidadSolicitada = 4;

$total = $precio * $cantidadSolicitada;

if ($stock >= $cantidadSolicitada && $presupuesto >= $total) {
    echo "Compra realizada con éxito";
} else {
    echo "No se puede realizar la compra";
}

?>
