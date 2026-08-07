<?php

$metodoPago = "transferencia";
$descuento = 0;

switch ($metodoPago) {
    case "efectivo":
        $descuento = 10;
        break;
    case "tarjeta":
        $descuento = 0;
        break;
    case "transferencia":
        $descuento = 5;
        break;
}

echo "Método de pago: $metodoPago\n";
echo "Descuento: $descuento%\n";

?>
