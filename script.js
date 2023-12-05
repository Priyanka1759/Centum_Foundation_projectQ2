function calculateLoan() {
    // Get form inputs
    var employeeID = document.getElementById('employeeID').value;
    var employeeName = document.getElementById('employeeName').value;
    var employeeDesignation = document.getElementById('employeeDesignation').value;
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    
    // Check designation and calculate interest
    var interest = 0;
    switch (employeeDesignation) {
        case 'developer':
            interest = loanAmount * 0.1;
            break;
        case 'manager':
            interest = loanAmount * 0.15;
            break;
        case 'analyst':
            interest = loanAmount * 0.12;
            break;
        default:
            interest = loanAmount * 0.1;
    }

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h3>Loan Details for ${employeeName}</h3>
                               <p>Employee ID: ${employeeID}</p>
                               <p>Designation: ${employeeDesignation}</p>
                               <p>Loan Amount: $${loanAmount.toFixed(2)}</p>
                               <p>Interest Payable: $${interest.toFixed(2)}</p>`;
}
