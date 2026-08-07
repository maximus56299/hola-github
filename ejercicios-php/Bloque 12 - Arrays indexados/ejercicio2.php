<?php

$nombres = ["Ana", "Luis", "Marta", "Pedro", "Sofía"];

for ($i = 0; $i < count($nombres); $i++) {
    echo $nombres[$i] . "\n";
}

echo "---\n";

foreach ($nombres as $nombre) {
    echo $nombre . "\n";
}

?>
