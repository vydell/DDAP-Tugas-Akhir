const ctx5 = document.getElementById('progress1');

new Chart(ctx5, {
    type: 'bar',
    data: {
        datasets: [{
            data: [80%],
            borderColor: 'rgba(0, 0, 0, 0)',
            backgroundColor: [
                'rgba(51, 87, 51, 1)',
            ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            '2020',
        ],
    },

    options: {
        indexAxis: 'y'
    },
});