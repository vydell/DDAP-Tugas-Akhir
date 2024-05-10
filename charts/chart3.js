const ctx3 = document.getElementById('doughnut3');

new Chart(ctx3, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [79, 126, 225],
            borderColor: 'rgba(0, 0, 0, 0)',
            backgroundColor: [
                'rgba(51, 87, 51, 1)',
                'rgba(118, 165, 117, 1)',
                'rgba(222, 139, 62, 1)'
            ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            '2021',
            '2022',
            '2023'
        ]
    },

    options: {
        animation: {
            duration: 3000,
        },
    },
});
