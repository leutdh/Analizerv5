document.addEventListener("DOMContentLoaded", function () {
    const searchButtons = document.querySelectorAll(".navbar-button");
    const dataTableBody = document.querySelector("#data-table tbody");

    searchButtons.forEach(searchButton => {
        searchButton.addEventListener("click", async function () {
            const dniInput = document.getElementById("dni-input").value;
            const excelName = searchButton.getAttribute("data-excel");

            try {
                const response = await fetch(`/buscar-datos?excelName=${excelName}&dni=${dniInput}`);
                const jsonData = await response.json();

                // Limpia la tabla antes de agregar nuevas filas
                dataTableBody.innerHTML = "";

                if (jsonData.length === 0) {
                    const noResultsRow = document.createElement("tr");
                    noResultsRow.innerHTML = `
                        <td colspan="9">El cliente no está registrado</td>
                    `;
                    dataTableBody.appendChild(noResultsRow);
                } else {
                    jsonData.forEach(person => {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                            <td>${person.Apellido}</td>
                            <td>${person.Nombre}</td>
                            <td>${person.Concepto}</td>
                            <td>${person.FormaCobro}</td>
                            <td>${person.Dependencia}</td>
                            <td>${person.ImporteEnviado}</td>
                            <td>${person.ImporteCobrado}</td>
                            <td>${person.Estado}</td>
                            <td>${person.Observaciones}</td>
                        `;
                        dataTableBody.appendChild(row);
                    });
                }
            } catch (error) {
                console.error('Error al buscar en el archivo Excel:', error);
            }
        });
    });
});
