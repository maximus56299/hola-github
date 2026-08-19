<?php

$usuarios = [
    ["id" => 1, "nombre" => "Julia", "usuario" => "julia01", "contraseña" => "abc123", "rol" => "administrador", "activo" => true],
    ["id" => 2, "nombre" => "Bruno", "usuario" => "bruno22", "contraseña" => "xyz789", "rol" => "docente", "activo" => false]
];

$usuarioIngresado = "julia01";
$contraseñaIngresada = "abc123";

$usuarioEncontrado = null;

foreach ($usuarios as $usuario) {
    if ($usuario['usuario'] == $usuarioIngresado) {
        $usuarioEncontrado = $usuario;
    }
}

if ($usuarioEncontrado === null) {
    echo "Usuario no encontrado";
} elseif ($usuarioEncontrado['contraseña'] != $contraseñaIngresada) {
    echo "Contraseña incorrecta";
} elseif (!$usuarioEncontrado['activo']) {
    echo "El usuario no está activo";
} else {
    echo "Acceso correcto\n";

    switch ($usuarioEncontrado['rol']) {
        case "administrador":
            echo "Bienvenido, administrador";
            break;
        case "docente":
            echo "Bienvenido, docente";
            break;
        default:
            echo "Bienvenido";
            break;
    }
}

?>
