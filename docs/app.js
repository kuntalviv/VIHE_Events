    let loaded_template = "";
    const templates = {
        rally : [
            {
                item_name: "Wooden Steps",
                item_count: 1
            },
            {
                item_name: "Floor Mat",
                item_count: 1
            },
            {
                item_name: "Tall Standing Speaker and Mic for Speech",
                item_count: 1
            },
            {
                item_name: "Speakers and Mics for changing slogans",
                item_count: 3
            },
            {
                item_name: "Pooja Items - Arati",
                item_count: 1
            },
            {
                item_name: "Pooja Items - Ghanta",
                item_count: 1
            },
            {
                item_name: "Pooja Items - Karpooram",
                item_count: 1
            },
            {
                item_name: "Pooja Items - Big Matchbox",
                item_count: 1
            },
            {
                item_name: "Pooja Items - Agarbatti with Stand",
                item_count: 1
            },
            {
                item_name: "Pooja Items - Loose Flowers Petals",
                item_count: 1
            },
            {
                item_name: "Pooja Items - Garlands for Holy Trio",
                item_count: 3
            },
            {
                item_name: "Pooja Items - Garlands for Swamiji Feet",
                item_count: 5
            },
            {
                item_name: "Pooja Items - Bhajan Mala books",
                item_count: 50
            },
            {
                item_name: "Momento",
                item_count: "As per requirement"
            },
            {
                item_name: "Quotation Placards",
                item_count: 20 
            },
            {
                item_name: "Quotation Banners",
                item_count: 10
            },
            {
                item_name: "Math Logo Flags",
                item_count: 10
            },
            {
                item_name: "Big National Flags",
                item_count: 2
            },
            {
                item_name: "Small National Flags",
                item_count: 6
            },
            {
                item_name: "Rally Theme Banner",
                item_count: 6
            },
            {
                item_name: "Charged Portable Mic with Pendrive",
                item_count: 1
            },
            {
                item_name: "Charged Camera",
                item_count: 1
            },
            {
                item_name: "Copy of Speech - English",
                item_count: 20
            },
            {
                item_name: "Copy of Speech - Telugu",
                item_count: 20
            },
            {
                item_name: "Sweet box for distribution",
                item_count: 50
            },
            {
                item_name: "Ratham and Narayan Seva Auto",
                item_count: 1
            },
            {
                item_name: "Garlands for Ratham Swamiji Statue and Auto Swamiji Statue",
                item_count: 1
            },
            {
                item_name: "First Aid Box",
                item_count: 1
            },
            {
                item_name: "Armless Chairs",
                item_count: "As per Requirement"
            },
            {
                item_name: "Big Y Shaped Stick to remove wires on road",
                item_count: "1"
            },
            {
                item_name: "Big Extension Switch Box",
                item_count: 1
            },
            {
                item_name: "Holy Trio Photo from Temple Store Room",
                item_count: 3
            },
            {
                item_name: "Rally Sequence Copy",
                item_count: 1
            },
        ],

        auditorium : [
            {
                item_name: "Holy Trio Photo with Stands",
                item_count: 3
            },
            {
                item_name: "Deep Prajwalan Lamp",
                item_count: 1
            },
            {
                item_name: "Wicks",
                item_count: 5
            },
            {
                item_name: "Karpooram",
                item_count: "1 packet"
            },
            {
                item_name: "Oil",
                item_count: "1 bottle"
            },
            {
                item_name: "Agarbatti",
                item_count: "4"
            },
            {
                item_name: "Loose Petals",
                item_count: "1 basket"
            },
            {
                item_name: "Matchbox",
                item_count: "1"
            },
            {
                item_name: "Holy Trio Garlands",
                item_count: "3"
            },
            {
                item_name: "Guest Nameplates",
                item_count: "as per requirement"
            },
            {
                item_name: "Water Bottles/Glass with Lid",
                item_count: "as per requirement"
            },
            {
                item_name: "Event Schedule Copies",
                item_count: "as per requirement"
            },
            {
                item_name: "Momentos/Books/Cloth/Photo Frame",
                item_count: "as per requirement"
            },
            {
                item_name: "Carry Bags",
                item_count: "as per requirement"
            },
            {
                item_name: "Carry Bags",
                item_count: "as per requirement"
            },
            {
                item_name: "Fibre Trays",
                item_count: "2"
            },
            {
                item_name: "Wooden Bamboo Trays",
                item_count: "3"
            },
            {
                item_name: "Tea/Lemon Tea with cups",
                item_count: "as per requirement"
            },
            {
                item_name: "Badam/Pista/Cashew for Guest",
                item_count: "as per requirement"
            },
            {
                item_name: "T Pie",
                item_count: "as per requirement"
            },
        ]
    }

    const addTemplate = (template_type) => {

    if (!templates[template_type]) return;

    const tbody = document.querySelector("#itemsTable tbody");
    tbody.innerHTML = "";

    templates[template_type].forEach(item => {
        addRow(item);
    });

    loaded_template = template_type;

    // Remove active from all tabs
    document.querySelectorAll("#template_links a")
        .forEach(link => link.classList.remove("active"));

    // Add active to clicked tab
    if (template_type === "auditorium") {
        document.getElementById("auditoriumLink")
            .classList.add("active");
    } else {
        document.getElementById("rallyLink")
            .classList.add("active");
    }
};
      
function addRow(item = { item_name: "", item_count: "" }) {

    const tbody = document.querySelector("#itemsTable tbody");

    const row = document.createElement("tr");

   row.innerHTML = `
    <td><input type="text" value="${item.item_name}"></td>
    <td><input type="text" value="${item.item_count}"></td>

    <td>
        <label>
            <input type="radio" name="status-${Date.now()}" value="none" checked onchange="updateRowStatus(this)">
            None
        </label>
        <label>
            <input type="radio" name="status-${Date.now()}" value="taken" onchange="updateRowStatus(this)">
            Taken
        </label>
        <label>
            <input type="radio" name="status-${Date.now()}" value="returned" onchange="updateRowStatus(this)">
            Returned
        </label>
    </td>

    <td>
        <button onclick="addRow()">+</button>
        <button onclick="deleteRow(this)">Delete</button>
    </td>
`;

    tbody.appendChild(row);
}

function deleteRow(button) {
    const row = button.closest("tr");
    row.remove();
}        
function filterTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll("#itemsTable tbody tr");

    rows.forEach(row => {
        const name = row.cells[0].querySelector("input").value.toLowerCase();
        const count = row.cells[1].querySelector("input").value.toLowerCase();

        const combined = name + " " + count;

        row.style.display = combined.includes(filter) ? "" : "none";
    });
}
function updateRowStatus(input) {
    const row = input.closest("tr");
    const status = input.value;

    if (status === "returned") {
        row.style.backgroundColor = "#d4edda";
    } 
    else if (status === "taken") {
        row.style.backgroundColor = "#f8d7da";
    } 
    else {
        row.style.backgroundColor = "";
    }
}


document.getElementById("auditoriumLink")
    .addEventListener("click", function (e) {
        e.preventDefault();
        addTemplate("auditorium");
    });

document.getElementById("rallyLink")
    .addEventListener("click", function (e) {
        e.preventDefault();
        addTemplate("rally");
    });

document.getElementById("searchInput")
    .addEventListener("keyup", filterTable);


    