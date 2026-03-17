// Configuración de las tres fuentes
const sources = [{
    tab: 'basic',
    prefix: 'bx',
    url: 'https://cdn.boxicons.com/3.0.8/fonts/basic/boxicons.min.css',
    status: 'status-basic',
    body: 'body-basic'
},
{
    tab: 'filled',
    prefix: 'bxf',
    url: 'https://cdn.boxicons.com/3.0.8/fonts/filled/boxicons-filled.min.css',
    status: 'status-filled',
    body: 'body-filled'
},
{
    tab: 'brands',
    prefix: 'bxl',
    url: 'https://cdn.boxicons.com/3.0.8/fonts/brands/boxicons-brands.min.css',
    status: 'status-brands',
    body: 'body-brands'
},
{
    tab: 'v2',
    prefix: 'bx',
    url: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
    status: 'status-v2',
    body: 'body-v2'
},
{
    tab: 'v2-solid',
    prefix: 'bxs',
    url: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
    status: 'status-v2-solid',
    body: 'body-v2-solid'
},
{
    tab: 'v2-logos',
    prefix: 'bxl',
    url: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
    status: 'status-v2-logos',
    body: 'body-v2-logos'
}
];

// Función para copiar al portapapeles
async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="bx bx-check"></i>';
        button.style.color = '#22c55e';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.color = '';
        }, 1500);
    } catch (err) {
        console.error('Error al copiar:', err);
        button.innerHTML = '<i class="bx bx-x"></i>';
        button.style.color = '#ef4444';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.color = '';
        }, 1500);
    }
}

// Funcionalidad de modo oscuro
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeToggle = document.getElementById('theme-toggle');

    // Aplicar tema guardado
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Event listener para alternar tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');

    if (theme === 'dark') {
        icon.className = 'bx bx-sun';
    } else {
        icon.className = 'bx bx-moon';
    }
}

async function loadAndParse(source) {
    const {
        prefix,
        url,
        status: statusId,
        body: bodyId
    } = source;
    const statusEl = document.getElementById(statusId);
    const tbody = document.getElementById(bodyId);

    statusEl.textContent = 'Descargando y parseando CSS...';

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const css = await res.text();

        // Regex específicas para cada formato
        let regex;
        if (prefix === 'bx') {
            // Basic: .bx-nombre:before{content:"\fXXX";}
            regex = new RegExp(`\\.${prefix}-([a-z0-9-]+):before\\s*{\\s*content:\\s*"\\\\([a-f0-9]{3,})"`, 'gi');
        } else if (prefix === 'bxs') {
            // V2 Solid: .bxs-nombre:before{content:"\fXXX";}
            regex = new RegExp(`\\.${prefix}-([a-z0-9-]+):before\\s*{\\s*content:\\s*"\\\\([a-f0-9]+)"`, 'gi');
        } else if (prefix === 'bxl') {
            // V2 Logos: .bxl-nombre:before{content:"\fXXX";} o V3 Brands: .bxl.bx-nombre:before{content:"\fXXX";}
            if (source.tab === 'v2-logos') {
                regex = new RegExp(`\\.${prefix}-([a-z0-9-]+):before\\s*{\\s*content:\\s*"\\\\([a-f0-9]+)"`, 'gi');
            } else {
                // V3 Brands
                regex = new RegExp(`\\.${prefix}\\.bx-([a-z0-9-]+):before\\s*{\\s*content:\\s*"\\\\([a-f0-9]{3,})"`, 'gi');
            }
        } else {
            // Filled v3: .bxf.bx-nombre:before{content:"\fXXX";}
            regex = new RegExp(`\\.${prefix}\\.bx-([a-z0-9-]+):before\\s*{\\s*content:\\s*"\\\\([a-f0-9]{3,})"`, 'gi');
        }

        console.log(`Tab: ${source.tab}, Prefix: ${prefix}, Regex: ${regex}`);

        const icons = [];
        let match;
        while ((match = regex.exec(css)) !== null) {
            icons.push({
                name: match[1],
                hex: match[2]
            });
        }

        if (icons.length === 0) {
            throw new Error('No se encontraron iconos (quizá cambio de formato en el CSS)');
        }

        statusEl.textContent = `Cargados ${icons.length} iconos.`;

        // Guardar los iconos para la búsqueda universal
        source.icons = icons;

        // Preparar datos para DataTables.net
        const tableData = icons.map(icon => {
            const iconClass = prefix === 'bxf' || (prefix === 'bxl' && source.tab === 'brands')
                ? `${prefix} bx-${icon.name}`
                : `${prefix}-${icon.name}`;

            return [
                `<i class="${iconClass}"></i>`,
                `${icon.name}<a class="copy-btn" onclick="copyToClipboard('${icon.name}', this)" title="Copiar nombre"><i class="bx bx-copy"></i></a>`,
                `<code>${iconClass}</code><a class="copy-btn" onclick="copyToClipboard('${iconClass}', this)" title="Copiar clase"><i class="bx bx-copy"></i></a>`,
                `\\${icon.hex}<a class="copy-btn" onclick="copyToClipboard('\\\\${icon.hex}', this)" title="Copiar unicode"><i class="bx bx-copy"></i></a>`
            ];
        });

        // Inicializar DataTables.net
        const tableId = `table-${source.tab}`;
        const table = document.getElementById(tableId);

        // Destruir DataTable existente si hay una
        if ($.fn.DataTable.isDataTable(table)) {
            $(table).DataTable().destroy();
        }

        // Determinar headerOffset según el tamaño de pantalla
        let headerOffset = 110; // desktop
        if (window.innerWidth <= 768) {
            headerOffset = 160; // tablets y móviles
        }

        // Inicializar nuevo DataTable
        source.datatable = $(table).DataTable({
            data: tableData,
            pageLength: 10,
            lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
            searching: true,
            ordering: true,
            info: true,
            paging: true,
            responsive: true,
            scrollX: true,
            scrollCollapse: true,
            fixedHeader: {
                header: true,
                headerOffset: headerOffset,
                footer: false
            },
            order: [[1, 'asc']],
            initComplete: function() {
                // Agregar la fila de búsqueda después del header
                const tableNode = this.api().table().node();
                const header = $(tableNode).find('thead');
                
                // Crear fila de búsqueda si no existe
                if (!document.getElementById(`search-row-${source.tab}`)) {
                    const searchRow = document.createElement('tr');
                    searchRow.id = `search-row-${source.tab}`;
                    searchRow.className = 'search-row';
                    
                    // Agregar celdas vacías para mantener estructura
                    for (let i = 0; i < this.api().columns().count(); i++) {
                        const cell = document.createElement('th');
                        cell.className = 'search-cell';
                        searchRow.appendChild(cell);
                    }
                    
                    // Insertar fila después del header existente
                    header.append(searchRow);
                    
                    // Volver a ejecutar para agregar los inputs ahora que la fila existe
                    this.api().columns().every(function(index) {
                        const column = this;
                        const title = column.header().textContent;
                        
                        // Crear input de búsqueda
                        const input = document.createElement('input');
                        input.placeholder = `Buscar ${title}...`;
                        input.className = 'column-search';
                        
                        // Agregar evento de búsqueda
                        input.addEventListener('keyup', function() {
                            if (column.search() !== this.value) {
                                column.search(this.value).draw();
                            }
                        });
                        
                        // Agregar input a la celda correspondiente
                        const searchCell = searchRow.children[index];
                        searchCell.appendChild(input);
                    });
                    
                    // Forzar a FixedHeader a actualizar y reconocer la nueva estructura
                    setTimeout(() => {
                        if (this.fixedHeader) {
                            this.fixedHeader.enable();
                            this.fixedHeader.update();
                        }
                    }, 100);
                }
            },
            language: {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ resultados",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "Mostrando resultados _START_-_END_ de  _TOTAL_",
                "sInfoEmpty": "Mostrando resultados del 0 al 0 de un total de 0 registros",
                "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                },
            },
            columns: [
                { title: "Icono", className: "icon-preview", orderable: false },
                { title: "Nombre", className: "name" },
                { title: "Clase CSS", className: "class" },
                { title: "Unicode (hex)", className: "unicode" }
            ]
        });

    } catch (err) {
        statusEl.classList.add('error');
        statusEl.textContent = `Error: ${err.message}`;
        console.error(err);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    let currentActiveTab = 'basic';

    // Cargar las tres pestañas en paralelo
    sources.forEach(loadAndParse);

    // Actualizar tab activo cuando se cambia
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar tab activo
            currentActiveTab = btn.dataset.tab;

            // Cambiar pestañas
            document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');

            // Forzar redraw del DataTable para ajustar headers
            setTimeout(() => {
                const source = sources.find(s => s.tab === currentActiveTab);
                if (source && source.datatable) {
                    source.datatable.columns.adjust().draw();
                }
            }, 100);
        });
    });

    // Listener para resize - actualizar headerOffset de todos los DataTables
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const headerOffset = window.innerWidth <= 768 ? 65 : 110;

            sources.forEach(source => {
                if (source && source.datatable) {
                    // Actualizar fixedHeader
                    if (source.datatable.fixedHeader) {
                        source.datatable.fixedHeader.headerOffset(headerOffset);
                        source.datatable.fixedHeader.update();
                    }
                }
            });
        }, 250);
    });
});
