const form = document.querySelector(".contact-form");
const clearButton = document.querySelector(".clear-button");

const validateField = (field) => {
    const wrapper = field.closest(".field-wrapper");
    const errorElement = wrapper.querySelector(".error-message");
    const value = field.value.trim();
    let errorMessage = "";

    if (field.id === "nome" && value.length < 4) {
        errorMessage = "Nome deve ter pelo menos 4 caracteres";
    }
    if (field.id === "email" && (!value.includes("@") || !value.includes("."))) {
        errorMessage = "Email inválido";
    }
    if (field.id === "mensagem" && value.length < 10) {
        errorMessage = "Mensagem deve ter pelo menos 10 caracteres";
    }

    if (errorMessage) {
        wrapper.classList.add("error");
        errorElement.textContent = errorMessage;
        return false;
    }

    wrapper.classList.remove("error");
    errorElement.textContent = "";
    return true;
};

clearButton?.addEventListener("click", () => {
    form.reset();
    form.querySelectorAll(".field-wrapper").forEach((wrapper) => {
        wrapper.classList.remove("error");
        wrapper.querySelector(".error-message").textContent = "";
    });
});

form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll("input, textarea");
    const validations = Array.from(fields).map((field) => validateField(field));
    const isValid = validations.every((valid) => valid === true);

    if (!isValid) return;

    const formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value,
    };

    console.log("Dados do formulário:", formData);
    alert("Dados enviados! Confira o console.");
    form.reset();
    form.querySelectorAll(".field-wrapper").forEach((wrapper) => {
        wrapper.classList.remove("error");
        wrapper.querySelector(".error-message").textContent = "";
    });
});
