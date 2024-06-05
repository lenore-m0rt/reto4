import React from 'react';
import { Chart } from 'react-google-charts';
import { data } from '../data/data';

function renderChart(data, chartType) {
    const sumarizarPorMetodo = (data) => {
        // Creamos un objeto para almacenar las sumas por método
        const sumaPorMetodo = data.reduce((acc, curr) => {
            const { method, total } = curr;
            // Si el método ya está en el objeto, sumamos el total, de lo contrario, inicializamos la suma
            acc[method] = (acc[method] || 0) + total;
            return acc;
        }, {});

        // Convertimos el objeto en una matriz de pares clave-valor y mapeamos para formatear los resultados
        return Object.entries(sumaPorMetodo).map(([method, total]) => [
            method,
            total
        ]);
    };

    const sumarizarPorEstado = (data) => {
        // Creamos un objeto para almacenar las sumas por estado
        const sumaPorEstado = data.reduce((acc, curr) => {
            const { status, total } = curr;
            // Si el estado ya está en el objeto, sumamos el total, de lo contrario, inicializamos la suma
            acc[status] = (acc[status] || 0) + total;
            return acc;
        }, {});

        // Convertimos el objeto en una matriz de pares clave-valor y mapeamos para formatear los resultados
        return Object.entries(sumaPorEstado).map(([status, total]) => [
            status,
            total
        ]);
    };

    const sumarizado = chartType === 'pie' ? sumarizarPorMetodo(data) : sumarizarPorEstado(data);

    const chartData = [['Estado','Total'], ...sumarizado];
    const barOptions = {
        title: 'Ventas por Estado',
        titleTextStyle: {
            fontName: 'Verdana',
            fontSize: 15,
        },
        backgroundColor: 'white',
        hAxis: {
            title: 'Ganancias Totales', 
            titleTextStyle: {
                fontName: 'Verdana',
            },
            },
        colors: ['#ef9995'],
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
    };

    const pieOptions = {
        title:'Ventas por Método',
        titleTextStyle: {
            fontName: 'Verdana',
            fontSize: 15,
        },
        backgroundColor: 'white',
        colors: ['#a4cbb4','#ef9995','#dc8850','#d6c89e'],
        pointSize: 6,
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
    }

    return (
        <div>
            <Chart chartType={chartType === 'pie' ? 'PieChart' : 'BarChart'} data={chartData} options={chartType === 'pie' ? pieOptions : barOptions}/>
        </div>
    );
}

function ChartComponent() {
    return (
        <div className='w-full col-span-1 relative lg:h-[70vh] m-auto p-4 border rounded-lg bg-white overflow-scroll my-4'>
            {renderChart(data, 'bar')}
            {renderChart(data, 'pie')}
        </div>
    );
}

export default ChartComponent;
