function AddNote() {
    let row = document.getElementById("row");
    let note = document.getElementById("input_notes");
    let list = document.createElement("div");
    let remove_btn = document.createElement("button");
    list.className = "col-md-9 border border-info bg-info text-white rounded mr-md-4 mt-md-4 note";
    list.style.paddingTop = "0.4em";
    remove_btn.type = "button";
    remove_btn.className = "btn btn-outline-danger mt-md-4 remove";
    remove_btn.textContent  ="Remove";
    list.innerHTML = note.value;

    if(note.value){
        row.appendChild(list);
        row.appendChild(remove_btn);
        note.value = '';

        remove_btn.addEventListener("click", () => {
            list.remove();
            remove_btn.remove();
        });
    }

    list.addEventListener("click", function change() {
        let input_group = document.createElement("div");
        input_group.className = "input-group input-group-sm mb-1";
        let input_form = document.createElement("input");
        input_form.className = "form-control";
        input_group.style.marginTop = "0";
        input_group.style.marginBottom = "0";
        input_form.style.pointerEvents = "all";
        input_form.type = "text";
        input_form.setAttribute("aria-label", "Small");
        input_form.value = list.innerHTML;
        input_group.appendChild(input_form);
        list.innerHTML = "";
        list.appendChild(input_group);
        list.removeEventListener("click", change);
        input_group.addEventListener('keypress', (e) => {
            let key = e.which || e.keyCode;
            if (key === 13) {
                let val = input_form.value;
                input_group.remove();
                list.innerHTML = val;
                list.addEventListener("click", change);
            }
        });
    });
}

document.addEventListener('keypress', (e) => {
    let key = e.which || e.keyCode;
    if (key === 13) {
        AddNote();
    }
});

document.body.querySelector("#button-addon").addEventListener("click", AddNote);