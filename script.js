function calculateDays() {
    const date1 = document.getElementById('date1').value;
    const date2 = document.getElementById('date2').value;

    if (date1 === '' || date2 === '') {
        document.getElementById('result').innerText = 'Please select both dates.';
        return;
    }

    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const formattedDate1 = firstDate.toLocaleDateString('en-US', options);
    const formattedDate2 = secondDate.toLocaleDateString('en-US', options);

    const timeDifference = Math.abs(secondDate - firstDate);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('result').innerText = `There are ${daysDifference} days between ${formattedDate1} and ${formattedDate2}.`;
}
