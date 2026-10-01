const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});




document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});




const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const loanTenure = document.getElementById("loanTenure");

const loanAmountValue = document.getElementById("loanAmountValue");
const interestValue = document.getElementById("interestValue");
const tenureValue = document.getElementById("tenureValue");

const monthlyEMI = document.getElementById("monthlyEMI");
const totalInterest = document.getElementById("totalInterest");
const totalPayment = document.getElementById("totalPayment");


// Format Indian currency

function formatCurrency(number) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(number);

}


// Calculate EMI

function calculateEMI() {

    const principal = Number(loanAmount.value);

    const annualInterest = Number(interestRate.value);

    const years = Number(loanTenure.value);

    const monthlyInterest = annualInterest / 12 / 100;

    const months = years * 12;


    let emi;


    // If interest rate is zero

    if (monthlyInterest === 0) {

        emi = principal / months;

    } else {

        emi =
            principal *
            monthlyInterest *
            Math.pow(1 + monthlyInterest, months) /
            (Math.pow(1 + monthlyInterest, months) - 1);

    }


    const totalAmount = emi * months;

    const interest = totalAmount - principal;


    // Update UI

    loanAmountValue.textContent =
        formatCurrency(principal);

    interestValue.textContent =
        annualInterest.toFixed(1) + "%";

    tenureValue.textContent =
        years + (years === 1 ? " Year" : " Years");


    monthlyEMI.textContent =
        formatCurrency(emi);

    totalInterest.textContent =
        formatCurrency(interest);

    totalPayment.textContent =
        formatCurrency(totalAmount);

}


// Run calculator whenever input changes

loanAmount.addEventListener("input", calculateEMI);

interestRate.addEventListener("input", calculateEMI);

loanTenure.addEventListener("input", calculateEMI);


// Initial calculation

calculateEMI();


// ================= APPLY BUTTON =================

const applyBtn = document.getElementById("applyBtn");

applyBtn.addEventListener("click", () => {

    alert(
        "Thank you for your interest!\n\n" +
        "Your loan application process will start soon."
    );

});