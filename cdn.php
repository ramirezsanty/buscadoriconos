<?php
// Configuración central de URLs de CDN.
// Para paquetes publicados en npm/jsdelivr se usa @latest para que el navegador
// reciba siempre la última versión disponible.
// Boxicons v3 se obtiene a través del paquete @boxicons/core en jsDelivr.
return [
    'boxicons-v3-basic'  => 'https://cdn.jsdelivr.net/npm/@boxicons/core@latest/fonts/basic/boxicons.min.css',
    'boxicons-v3-filled' => 'https://cdn.jsdelivr.net/npm/@boxicons/core@latest/fonts/filled/boxicons-filled.min.css',
    'boxicons-v3-brands' => 'https://cdn.jsdelivr.net/npm/@boxicons/core@latest/fonts/brands/boxicons-brands.min.css',
    'boxicons-v2'        => 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css',
    'bootstrap-icons'    => 'https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/font/bootstrap-icons.css',
    'remixicon'          => 'https://cdn.jsdelivr.net/npm/remixicon@latest/fonts/remixicon.css',
    'tabler-icons'       => 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css',

    'datatables-css'             => 'https://cdn.jsdelivr.net/npm/datatables.net-dt@latest/css/dataTables.dataTables.min.css',
    'datatables-js'              => 'https://cdn.jsdelivr.net/npm/datatables.net@latest/js/dataTables.min.js',
    'datatables-fixedheader-css' => 'https://cdn.jsdelivr.net/npm/datatables.net-fixedheader-dt@latest/css/fixedHeader.dataTables.min.css',
    'datatables-fixedheader-js'  => 'https://cdn.jsdelivr.net/npm/datatables.net-fixedheader@latest/js/dataTables.fixedHeader.min.js',
];
