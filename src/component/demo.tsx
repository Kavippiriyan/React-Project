import initialData from './data.json';
import React, { useState } from 'react';
import './table.css'

interface MonthData {
    values: {
        value1: string;
        value2: string;
        value3: string;
    };
    recordedValues: {
        recordedValue1: string;
        recordedValue2: string;
        recordedValue3: string;
    };
}

export const Demo = () => {
    // State variables for February data
    const [area1FebData, setArea1FebData] = useState<MonthData>(initialData.area1.feb);
    const [area2FebData, setArea2FebData] = useState<MonthData>(initialData.area2.feb);



    // State variables for toggling visibility of values
    const [showValues1, setShowValues1] = useState(false);
    const [showValues2, setShowValues2] = useState(false);

    // Function to toggle showing values for area1
    const toggleValues1 = () => {
        setShowValues1(!showValues1);
    };

    // Function to toggle showing values for area2
    const toggleValues2 = () => {
        setShowValues2(!showValues2);
    };

    const calculateSum = (data: MonthData) => {
        const { values } = data;
        const { value1, value2, value3 } = values;
        const num1 = parseFloat(value1) || 0;
        const num2 = parseFloat(value2) || 0;
        const num3 = parseFloat(value3) || 0;
        return num1 + num2 + num3;
    };

    // Function to calculate the sum of recorded values for a specific area
    const calculateRecordedSum = (data: MonthData) => {
        const { recordedValues } = data;
        const { recordedValue1, recordedValue2, recordedValue3 } = recordedValues;
        const num1 = parseFloat(recordedValue1) || 0;
        const num2 = parseFloat(recordedValue2) || 0;
        const num3 = parseFloat(recordedValue3) || 0;
        return num1 + num2 + num3;
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th rowSpan={2}>Forecast Category</th>
                        <th colSpan={2}>Feb 2024  100%(168hours)</th>
                        <th colSpan={2}>March 2024  100%(168hours)</th>
                        <th colSpan={2}>April 2024  100%(168hours)</th>
                        <th colSpan={2}>May 2024  100%(168hours)</th>
                        <th colSpan={2}>June 2024  100%(168hours)</th>
                        <th colSpan={2}>July 2024  100%(168hours)</th>
                    </tr>
                    <tr>
                        <th>Forecast</th>
                        <th>Recorded</th>
                        <th>Forecast</th>
                        <th>Recorded</th>
                        <th>Forecast</th>
                        <th>Recorded</th>
                        <th>Forecast</th>
                        <th>Recorded</th>
                        <th>Forecast</th>
                        <th>Recorded</th>
                        <th>Forecast</th>
                        <th>Recorded</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span onClick={toggleValues1} className="arrow">
                                {showValues1 ? "▲" : "▼"}
                            </span>
                            Area 1
                        </td>
                        <td><input type="text" value={`${calculateSum(area1FebData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area1FebData)}%</td>

                    </tr>
                    {showValues1 && (
                        <>
                            <tr>
                                <td>Value 1</td>
                                <td><input type="text" value={area1FebData.values.value1} onChange={(e) => setArea1FebData({ ...area1FebData, values: { ...area1FebData.values, value1: e.target.value } })} /></td>
                                <td>{area1FebData.recordedValues.recordedValue1}</td>

                            </tr>

                            <tr>
                                <td>Value 2</td>
                                <td><input type="text" value={area1FebData.values.value2} onChange={(e) => setArea1FebData({ ...area1FebData, values: { ...area1FebData.values, value2: e.target.value } })} /></td>
                                <td>{area1FebData.recordedValues.recordedValue2}</td>

                            </tr>
                            <tr>
                                <td>Value 3</td>
                                <td><input type="text" value={area1FebData.values.value3} onChange={(e) => setArea1FebData({ ...area1FebData, values: { ...area1FebData.values, value3: e.target.value } })} /></td>
                                <td>{area1FebData.recordedValues.recordedValue3}</td>

                            </tr>

                        </>
                    )}
                    <tr>
                        <td>
                            <span onClick={toggleValues2} className="arrow">
                                {showValues2 ? "▲" : "▼"}
                            </span>
                            Area 2
                        </td>
                        <td><input type="text" value={`${calculateSum(area2FebData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area2FebData)}%</td>

                    </tr>
                    {showValues2 && (
                        <>
                            <tr>
                                <td>Value 1</td>
                                <td><input type="text" value={area2FebData.values.value1} onChange={(e) => setArea2FebData({ ...area2FebData, values: { ...area2FebData.values, value1: e.target.value } })} /></td>
                                <td>{area2FebData.recordedValues.recordedValue1}</td>

                            </tr>
                            <tr>
                                <td>Value 2</td>
                                <td><input type="text" value={area2FebData.values.value2} onChange={(e) => setArea2FebData({ ...area2FebData, values: { ...area2FebData.values, value2: e.target.value } })} /></td>
                                <td>{area2FebData.recordedValues.recordedValue2}</td>

                            </tr>
                            <tr>
                                <td>Value 3</td>
                                <td><input type="text" value={area2FebData.values.value3} onChange={(e) => setArea2FebData({ ...area2FebData, values: { ...area2FebData.values, value3: e.target.value } })} /></td>
                                <td>{area2FebData.recordedValues.recordedValue3}</td>

                            </tr>
                        </>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{calculateSum(area1FebData) + calculateSum(area2FebData)}</td>
                        <td>{calculateRecordedSum(area1FebData) + calculateRecordedSum(area2FebData)}%</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
