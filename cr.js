document.addEventListener("DOMContentLoaded", function() {
    /*const printButton = document.createElement("button");
    printButton.textContent = "Imprimir Currículo";
    printButton.style.display = "block";
    printButton.style.margin = "20px auto";
    printButton.onclick = function() {
        window.print();
    };
    document.body.appendChild(printButton);*/
});


document.querySelectorAll('.button_more_info').forEach((button)=>{
    button.addEventListener('click', (e)=>{
    
    const data_ul = button.getAttribute('data-ul');
    
    const ul = document.querySelector(`ul[data-ul="${data_ul}"]`);

    ul.classList.toggle('active');

    button.classList.toggle('active');
    })
});
