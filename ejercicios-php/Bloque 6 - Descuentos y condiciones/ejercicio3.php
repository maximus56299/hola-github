<?php

$total = 3500;
$descuento = 0;

if ($total >= 5000) {
    $descuento = $total * 0.20;
} elseif ($total >= 1000) {
    $descuento = $total * 0.10;
}

$totalFinal = $total - $descuento;

echo "Total original: $total\n";
echo "Descuento: $descuento\n";
echo "Total final: $totalFinal\n";

?>
