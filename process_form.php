<?php
$servername = "31.200.246.160";
$username = "takeaq592_prueba4";
$password = "0plI9gf7b0pbJ9";
$dbname = "takeaq592_prueba4";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $conn->real_escape_string($_POST['name']);
    $apellido = $conn->real_escape_string($_POST['lastname']);
    $email = $conn->real_escape_string($_POST['email']);
    $telefono = $conn->real_escape_string($_POST['phone']);

    $sql = "INSERT INTO usuarios (nombre, apellido, email, telefono) VALUES ('$nombre', '$apellido', '$email', '$telefono')";

    if ($conn->query($sql) === TRUE) {
        echo "Nuevo registro creado exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}


$conn->close();
?>
