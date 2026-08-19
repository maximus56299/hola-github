<?php

$productos = [
    ["id" => 1, "nombre" => "Teclado", "precio" => 1200, "stock" => 5, "categoria" => "Periféricos"],
    ["id" => 2, "nombre" => "Mouse", "precio" => 800, "stock" => 0, "categoria" => "Periféricos"],
    ["id" => 3, "nombre" => "Monitor", "precio" => 15000, "stock" => 3, "categoria" => "Pantallas"]
];

function mostrarProductos($productos) {
    foreach ($productos as $producto) {
        echo "{$producto['nombre']} - \${$producto['precio']} - Stock: {$producto['stock']} - {$producto['categoria']}\n";
    }
}

function mostrarConStock($productos) {
    foreach ($productos as $producto) {
        if ($producto['stock'] > 0) {
            echo "{$producto['nombre']}\n";
        }
    }
}

function buscarPorId($productos, $id) {
    foreach ($productos as $producto) {
        if ($producto['id'] == $id) {
            return $producto;
        }
    }
    return null;
}

function valorTotalInventario($productos) {
    $total = 0;
    foreach ($productos as $producto) {
        $total += $producto['precio'] * $producto['stock'];
    }
    return $total;
}

function productoMasCaro($productos) {
    $masCaro = $productos[0];
    foreach ($productos as $producto) {
        if ($producto['precio'] > $masCaro['precio']) {
            $masCaro = $producto;
        }
    }
    return $masCaro;
}

echo "--- Todos los productos ---\n";
mostrarProductos($productos);

echo "--- Con stock ---\n";
mostrarConStock($productos);

echo "--- Búsqueda por ID 2 ---\n";
$encontrado = buscarPorId($productos, 2);
echo $encontrado['nombre'] . "\n";

echo "--- Valor total del inventario ---\n";
echo valorTotalInventario($productos) . "\n";

echo "--- Producto más caro ---\n";
$masCaro = productoMasCaro($productos);
echo $masCaro['nombre'];

?>
