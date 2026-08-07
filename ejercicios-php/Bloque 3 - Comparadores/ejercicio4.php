<?php

$stockDisponible = 8;
$cantidadSolicitada = 5;
$precio = 350;
$presupuestoCliente = 2000;

$total = $precio * $cantidadSolicitada;

echo "¿Hay stock suficiente?: ";
echo ($stockDisponible >= $cantidadSolicitada) ? "Sí\n" : "No\n";

echo "¿El cliente tiene presupuesto suficiente?: ";
echo ($presupuestoCliente >= $total) ? "Sí\n" : "No\n";

?>
