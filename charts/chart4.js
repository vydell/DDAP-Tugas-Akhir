const ctx4 = document.getElementById('bar1');
new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Desa Begawan', 'Desa Lampau', 'Desa Cikarung    '],
        datasets: [{
            label: '2021', 
            data: [12, 6, 20],
            backgroundColor: [
                'rgba(51, 87, 51, 1)',
                'rgba(51, 87, 51, 1)',
                'rgba(51, 87, 51, 1)'
            ]
        },
        {
            label: '2022', 
            data: [23, 8, 25],
            backgroundColor: [
                'rgba(118, 165, 117, 1)',
                'rgba(118, 165, 117, 1)',
                'rgba(118, 165, 117, 1)'
            ]
        },
        {
            label: '2023', 
            data: [20, 12, 26],
            backgroundColor: [
                'rgba(222, 139, 62, 1)',
                'rgba(222, 139, 62, 1)',
                'rgba(222, 139, 62, 1)'
            ]
        }],
        
    },
    
    options: {
        animation: {
            duration: 3000,
        },
        scales: {
            y: {
            beginAtZero: true
            }
        },
    },

  });