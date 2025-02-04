const options = [
    { id: "option1", text: "Javascript", votes: 0 },
    { id: "option2", text: "Python", votes: 0 },
    { id: "option3", text: "C++", votes: 0 },
    { id: "option4", text: "Java", votes: 0 },
];

function submitVote() {
    const selectedOption = document.querySelector('input[type="radio"][name="poll"]:checked');

    if (!selectedOption) {
        alert("Please Select an option");
        return;
    }
    const optionId = selectedOption.value;
    const selectedOptionObj = options.find(option => option.id === optionId);

    if (selectedOptionObj) {
        selectedOptionObj.votes++;
        displayResult();
    }
}

function displayResult() {
    const result = document.getElementById('result');
    result.innerHTML = "";
    options.forEach(option => {
        const percentage = ((option.votes / getTotalVotes()) * 100).toFixed(2) || 0;
        const barWidth = percentage > 0 ? percentage + "%" : "0%";

        const optionResult = document.createElement("div");
        optionResult.className = "option-result";
        optionResult.innerHTML = `
            <span class="option-text">${option.text}</span>
            <div class="bar-container">
                <div class="bar" style="width: ${barWidth};"></div>
            </div>
            <span class="percentage">${percentage}%</span>
        `;

        result.appendChild(optionResult);
    });
}

function getTotalVotes() {
    return options.reduce((total, option) => total + option.votes, 0);
}
displayResult();