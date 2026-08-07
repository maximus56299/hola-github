<?php

$numero = 10;
$texto = "10";

echo "Comparación con ==: ";
echo ($numero == $texto) ? "true\n" : "false\n";

echo "Comparación con ===: ";
echo ($numero === $texto) ? "true\n" : "false\n";

echo "El operador == solo compara el valor, mientras que === también compara el tipo de dato. Por eso el primer número (entero) y el texto (string) son iguales con == pero no con ===.\n";

?>
