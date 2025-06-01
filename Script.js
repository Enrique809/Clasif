document.addEventListener('DOMContentLoaded', () => {
    const toolsContainer = document.querySelector('.tools-container');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const clearFiltersButton = document.getElementById('clear-filters');

    // Función para renderizar las herramientas
    function renderTools(filteredTools) {
        toolsContainer.innerHTML = ''; // Limpia el contenedor antes de renderizar
        if (filteredTools.length === 0) {
            toolsContainer.innerHTML = '<p class="no-results">No se encontraron herramientas con los filtros seleccionados.</p>';
            return;
        }

        filteredTools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.classList.add('tool-card');

            let tagsHtml = '';
            tool.tags.forEach(tag => {
                tagsHtml += `<span class="tag">${tag}</span>`;
            });

            toolCard.innerHTML = `
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <div class="tags">
                    <span class="tag">${tool.pago}</span>
                    <span class="tag">${tool.categoria}</span>
                    ${tagsHtml}
                </div>
                <a href="${tool.link}" target="_blank">Visitar Herramienta</a>
            `;
            toolsContainer.appendChild(toolCard);
        });
    }

    // Función para filtrar las herramientas
    function filterTools() {
        let selectedPagoFilters = Array.from(document.querySelectorAll('.filter-checkbox[data-filter-type="pago"]:checked')).map(cb => cb.value);
        let selectedCategoriaFilters = Array.from(document.querySelectorAll('.filter-checkbox[data-filter-type="categoria"]:checked')).map(cb => cb.value);

        let filtered = tools; // 'tools' viene de data.js

        if (selectedPagoFilters.length > 0) {
            filtered = filtered.filter(tool => selectedPagoFilters.includes(tool.pago));
        }

        if (selectedCategoriaFilters.length > 0) {
            filtered = filtered.filter(tool => selectedCategoriaFilters.includes(tool.categoria));
        }

        renderTools(filtered);
    }

    // Escuchar cambios en los checkboxes de filtro
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterTools);
    });

    // Limpiar filtros
    clearFiltersButton.addEventListener('click', () => {
        filterCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        filterTools(); // Vuelve a renderizar con todos los filtros desactivados
    });

    // Cargar todas las herramientas al inicio
    renderTools(tools);
});
