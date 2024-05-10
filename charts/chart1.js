const ctx1 = document.getElementById('doughnut1');

new Chart(ctx1, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [3950000, 5300000, 6180000],
            borderColor: 'rgba(0, 0, 0, 0)',
            backgroundColor: [
                'rgba(51, 87, 51, 1)',
                'rgba(118, 165, 117, 1)',
                'rgba(222, 139, 62, 1)'
            ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            '2020',
            '2021',
            '2022'
        ],
    },

    options: {
        animation: {
            duration: 3000,
        },
    },
});

