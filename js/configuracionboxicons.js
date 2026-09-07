// Configuración de las tres fuentes
const cdn = window.__CDN_URLS || {};

const sources = [{
    tab: 'basic',
    prefix: 'bx',
    url: cdn['boxicons-v3-basic'] || 'https://cdn.jsdelivr.net/npm/@boxicons/core@latest/fonts/basic/boxicons.min.css',
    status: 'status-basic',
    body: 'body-basic'
},
{
    tab: 'filled',
    prefix: 'bxf',
    url: cdn['boxicons-v3-filled'] || 'https://cdn.jsdelivr.net/npm/@boxicons/core@latest/fonts/filled/boxicons-filled.min.css',
    status: 'status-filled',
    body: 'body-filled'
},
{
    tab: 'brands',
    prefix: 'bxl',
    url: cdn['boxicons-v3-brands'] || 'https://cdn.jsdelivr.net/npm/@boxicons/core@latest/fonts/brands/boxicons-brands.min.css',
    status: 'status-brands',
    body: 'body-brands'
},
{
    tab: 'v2',
    prefix: 'bx',
    url: cdn['boxicons-v2'] || 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css',
    status: 'status-v2',
    body: 'body-v2'
},
{
    tab: 'v2-solid',
    prefix: 'bxs',
    url: cdn['boxicons-v2'] || 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css',
    status: 'status-v2-solid',
    body: 'body-v2-solid'
},
{
    tab: 'v2-logos',
    prefix: 'bxl',
    url: cdn['boxicons-v2'] || 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css',
    status: 'status-v2-logos',
    body: 'body-v2-logos'
},
{
    tab: 'bootstrap',
    prefix: 'bi',
    url: cdn['bootstrap-icons'] || 'https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/font/bootstrap-icons.css',
    status: 'status-bootstrap',
    body: 'body-bootstrap'
},
{
    tab: 'remix',
    prefix: 'ri',
    url: cdn['remixicon'] || 'https://cdn.jsdelivr.net/npm/remixicon@latest/fonts/remixicon.css',
    status: 'status-remix',
    body: 'body-remix'
},
{
    tab: 'tabler',
    prefix: 'ti',
    url: cdn['tabler-icons'] || 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css',
    status: 'status-tabler',
    body: 'body-tabler'
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
        } else if (prefix === 'bi') {
            // Bootstrap Icons: .bi-nombre::before{content:"\fXXX";}
            regex = new RegExp(`\\.${prefix}-([a-z0-9-]+)::before\\s*{\\s*content:\\s*"\\\\([a-f0-9]{3,})"`, 'gi');
        } else if (prefix === 'ri') {
            // Remix Icon: .ri-nombre:before{content:"\eXXX";}
            regex = new RegExp(`\\.${prefix}-([a-z0-9-]+):before\\s*{\\s*content:\\s*"\\\\([a-f0-9]{3,})"`, 'gi');
        } else if (prefix === 'ti') {
            // Tabler Icons: .ti-nombre:before{content:"\fXXX";}
            regex = new RegExp(`\\.${prefix}-([a-z0-9-]+):before\\s*{\\s*content:\\s*"\\\\([a-f0-9]{3,})"`, 'gi');
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

        // Crear y añadir el link CSS con botón de copiar
        const linkContainer = document.createElement('div');
        linkContainer.className = 'css-link-container';
        linkContainer.innerHTML = `
            <div class="css-link-content">
                <code class="css-link-text">&lt;link href="${url}" rel="stylesheet"&gt;</code>
                <button class="copy-css-link-btn" onclick="copyToClipboard('<link href=\\'${url}\\' rel=\\'stylesheet\\'>', this)" title="Copiar link CSS">
                    <i class="bx bx-copy"></i>
                </button>
            </div>
        `;
        
        // Insertar después del statusEl
        statusEl.parentNode.insertBefore(linkContainer, statusEl.nextSibling);

        // Guardar los iconos para la búsqueda universal
        source.icons = icons;

        // Preparar datos para DataTables.net
        const tableData = icons.map(icon => {
            const iconClass = prefix === 'bxf' || (prefix === 'bxl' && source.tab === 'brands')
                ? `${prefix} bx-${icon.name}`
                : prefix === 'ti'
                    ? `ti ti-${icon.name}`
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
            order: [[1, 'asc']],
            initComplete: function () {
                this.api().columns().every(function () {
                    const column = this;

                    // La primera columna (icono) no lleva input de búsqueda
                    if (column.index() === 0) {
                        return;
                    }

                    const title = column.header().textContent.replace(/\s+/g, ' ').trim();

                    // Crear contenedor para el input
                    const searchContainer = document.createElement('div');
                    searchContainer.className = 'column-search-container';

                    // Crear input de búsqueda para la columna
                    const input = document.createElement('input');
                    input.placeholder = 'Buscar en ' + title;
                    input.className = 'column-search';
                    input.setAttribute('data-column', column.index());

                    // Agregar icono de búsqueda
                    const searchIcon = document.createElement('i');
                    searchIcon.className = 'bx bx-search column-search-icon';

                    searchContainer.appendChild(input);
                    searchContainer.appendChild(searchIcon);

                    // Insertar el contenedor debajo del header
                    column.header().appendChild(searchContainer);

                    // Evitar que el click/focus en el input dispare el ordenamiento del th
                    const stopPropagation = (e) => e.stopPropagation();
                    input.addEventListener('click', stopPropagation);
                    input.addEventListener('mousedown', stopPropagation);
                    input.addEventListener('touchstart', stopPropagation);
                    input.addEventListener('keydown', stopPropagation);

                    // Evento para filtrar la columna
                    input.addEventListener('keyup', function () {
                        if (column.search() !== this.value) {
                            column.search(this.value).draw();
                        }
                    });

                    // Evento para mostrar/ocultar icono
                    input.addEventListener('input', function() {
                        searchIcon.style.opacity = this.value ? '0.8' : '0.5';
                    });
                });
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

    // Marcar el tab inicial como activo visualmente
    const activeButton = document.querySelector('.tab-button[aria-selected="true"]');
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // Actualizar tab activo cuando se cambia
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar tab activo
            currentActiveTab = btn.dataset.tab;

            // Cambiar pestañas y estados ARIA
            document.querySelectorAll('.tab-button').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
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

    // Selector responsive de categorías
    const tabSelect = document.getElementById('tab-select');
    if (tabSelect) {
        tabSelect.addEventListener('change', () => {
            const tab = tabSelect.value;
            if (!tab) return;
            const btn = document.querySelector(`.tab-button[data-tab="${tab}"]`);
            if (btn) {
                btn.click();
                tabSelect.blur();
            }
        });
    }

});
