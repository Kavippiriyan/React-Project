import initialData from './data';
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

    // State variables for March data
    const [area1marchData, setArea1MarchData] = useState<MonthData>(initialData.area1.march);
    const [area2marchData, setArea2MarchData] = useState<MonthData>(initialData.area2.march);

    const [area1AprilData, setArea1AprilData] = useState<MonthData>(initialData.area1.april);
    const [area2AprilData, setArea2AprilData] = useState<MonthData>(initialData.area2.april);

    // State variables for May data
    const [area1MayData, setArea1MayData] = useState<MonthData>(initialData.area1.may);
    const [area2MayData, setArea2MayData] = useState<MonthData>(initialData.area2.may);

    const [area1JunData, setArea1JunData] = useState<MonthData>(initialData.area1.jun);
    const [area2JunData, setArea2JunData] = useState<MonthData>(initialData.area2.jun);

    // State variables for July data
    const [area1JulData, setArea1JulData] = useState<MonthData>(initialData.area1.jul);
    const [area2JulData, setArea2JulData] = useState<MonthData>(initialData.area2.jul);


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
                        <td><input type="text" value={`${calculateSum(area1marchData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area1marchData)}%</td>
                        <td><input type="text" value={`${calculateSum(area1AprilData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area1AprilData)}%</td>
                        <td><input type="text" value={`${calculateSum(area1MayData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area1MayData)}%</td>
                        <td><input type="text" value={`${calculateSum(area1JunData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area1JunData)}%</td>
                        <td><input type="text" value={`${calculateSum(area1JulData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area1JulData)}%</td>

                    </tr>
                    {showValues1 && (
                        <>
                            <tr>
                                <td>Value 1</td>
                                <td><input type="text" value={area1FebData.values.value1} onChange={(e) => setArea1FebData({ ...area1FebData, values: { ...area1FebData.values, value1: e.target.value } })} /></td>
                                <td>{area1FebData.recordedValues.recordedValue1}</td>
                                <td><input type="text" value={area1marchData.values.value1} onChange={(e) => setArea1MarchData({ ...area1marchData, values: { ...area1marchData.values, value1: e.target.value } })} /></td>
                                <td>{area1marchData.recordedValues.recordedValue1}</td>
                                <td><input type="text" value={area1AprilData.values.value1} onChange={(e) => setArea1AprilData({ ...area1AprilData, values: { ...area1AprilData.values, value1: e.target.value } })} /></td>
                                <td>{area1AprilData.recordedValues.recordedValue1}</td>
                                <td><input type="text" value={area1MayData.values.value1} onChange={(e) => setArea1MayData({ ...area1MayData, values: { ...area1MayData.values, value1: e.target.value } })} /></td>
                                <td>{area1MayData.recordedValues.recordedValue1}</td>
                                <td><input type="text" value={area1JunData.values.value1} onChange={(e) => setArea1JunData({ ...area1JunData, values: { ...area1JunData.values, value1: e.target.value } })} /></td>
                                <td>{area1JunData.recordedValues.recordedValue1}</td>
                                <td><input type="text" value={area1JulData.values.value1} onChange={(e) => setArea1JulData({ ...area1JulData, values: { ...area1JulData.values, value1: e.target.value } })} /></td>
                                <td>{area1JulData.recordedValues.recordedValue1}</td>
                            </tr>

                            <tr>
                                <td>Value 2</td>
                                <td><input type="text" value={area1FebData.values.value2} onChange={(e) => setArea1FebData({ ...area1FebData, values: { ...area1FebData.values, value2: e.target.value } })} /></td>
                                <td>{area1FebData.recordedValues.recordedValue2}</td>
                                <td><input type="text" value={area1marchData.values.value2} onChange={(e) => setArea1MarchData({ ...area1marchData, values: { ...area1marchData.values, value2: e.target.value } })} /></td>
                                <td>{area1marchData.recordedValues.recordedValue2}</td>
                                <td><input type="text" value={area1AprilData.values.value2} onChange={(e) => setArea1AprilData({ ...area1AprilData, values: { ...area1AprilData.values, value2: e.target.value } })} /></td>
                                <td>{area1AprilData.recordedValues.recordedValue2}</td>
                                <td><input type="text" value={area1MayData.values.value2} onChange={(e) => setArea1MayData({ ...area1MayData, values: { ...area1MayData.values, value2: e.target.value } })} /></td>
                                <td>{area1MayData.recordedValues.recordedValue2}</td>
                                <td><input type="text" value={area1JunData.values.value2} onChange={(e) => setArea1JunData({ ...area1JunData, values: { ...area1JunData.values, value2: e.target.value } })} /></td>
                                <td>{area1JunData.recordedValues.recordedValue2}</td>
                                <td><input type="text" value={area1JulData.values.value2} onChange={(e) => setArea1JulData({ ...area1JulData, values: { ...area1JulData.values, value2: e.target.value } })} /></td>
                                <td>{area1JulData.recordedValues.recordedValue2}</td>
                            </tr>
                            <tr>
                                <td>Value 3</td>
                                <td><input type="text" value={area1FebData.values.value3} onChange={(e) => setArea1FebData({ ...area1FebData, values: { ...area1FebData.values, value3: e.target.value } })} /></td>
                                <td>{area1FebData.recordedValues.recordedValue3}</td>
                                <td><input type="text" value={area1marchData.values.value3} onChange={(e) => setArea1MarchData({ ...area1marchData, values: { ...area1marchData.values, value3: e.target.value } })} /></td>
                                <td>{area1marchData.recordedValues.recordedValue3}</td>
                                <td><input type="text" value={area1AprilData.values.value3} onChange={(e) => setArea1AprilData({ ...area1AprilData, values: { ...area1AprilData.values, value3: e.target.value } })} /></td>
                                <td>{area1AprilData.recordedValues.recordedValue3}</td>
                                <td><input type="text" value={area1MayData.values.value3} onChange={(e) => setArea1MayData({ ...area1MayData, values: { ...area1MayData.values, value3: e.target.value } })} /></td>
                                <td>{area1MayData.recordedValues.recordedValue3}</td>
                                <td><input type="text" value={area1JunData.values.value3} onChange={(e) => setArea1JunData({ ...area1JunData, values: { ...area1JunData.values, value3: e.target.value } })} /></td>
                                <td>{area1JunData.recordedValues.recordedValue3}</td>
                                <td><input type="text" value={area1JulData.values.value3} onChange={(e) => setArea1JulData({ ...area1JulData, values: { ...area1JulData.values, value3: e.target.value } })} /></td>
                                <td>{area1JulData.recordedValues.recordedValue3}</td>
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
                        <td><input type="text" value={`${calculateSum(area2marchData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area2marchData)}%</td>
                        <td><input type="text" value={`${calculateSum(area2AprilData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area2AprilData)}%</td>
                        <td><input type="text" value={`${calculateSum(area2MayData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area2MayData)}%</td>
                        <td><input type="text" value={`${calculateSum(area2JunData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area2JunData)}%</td>
                        <td><input type="text" value={`${calculateSum(area2JulData)}%`} readOnly /></td>
                        <td>{calculateRecordedSum(area2JulData)}%</td>

                    </tr>
                    {showValues2 && (
                        <>
                            <tr>
                                <td>Value 1</td>
                                <td><input type="text" value={area2FebData.values.value1} onChange={(e) => setArea2FebData({ ...area2FebData, values: { ...area2FebData.values, value1: e.target.value } })} /></td>
                                <td>{area2FebData.recordedValues.recordedValue1}</td>
                                <td><input type="text" value={area2marchData.values.value1} onChange={(e) => setArea2MarchData({ ...area2marchData, values: { ...area2marchData.values, value1: e.target.value } })} /></td>
                                <td>{area2marchData.recordedValues.recordedValue1}</td>
                                <td><input type="text" value={area2AprilData.values.value1} onChange={(e) => setArea2AprilData({ ...area2AprilData, values: { ...area2AprilData.values, value1: e.target.value } })} /></td>
                                <td>{area2AprilData.recordedValues.recordedValue1}</td>
                                <td><input type="text" value={area2MayData.values.value1} onChange={(e) => setArea2MayData({ ...area2MayData, values: { ...area2MayData.values, value1: e.target.value } })} /></td>
                                <td>{area2MayData.recordedValues.recordedValue1}</td>
                                <td><input type="text" value={area2JunData.values.value1} onChange={(e) => setArea2JunData({ ...area2JunData, values: { ...area2JunData.values, value1: e.target.value } })} /></td>
                                <td>{area2JunData.recordedValues.recordedValue1}</td>
                                <td><input type="text" value={area2JulData.values.value1} onChange={(e) => setArea2JulData({ ...area2JulData, values: { ...area2JulData.values, value1: e.target.value } })} /></td>
                                <td>{area2JulData.recordedValues.recordedValue1}</td>
                            </tr>
                            <tr>
                                <td>Value 2</td>
                                <td><input type="text" value={area2FebData.values.value2} onChange={(e) => setArea2FebData({ ...area2FebData, values: { ...area2FebData.values, value2: e.target.value } })} /></td>
                                <td>{area2FebData.recordedValues.recordedValue2}</td>
                                <td><input type="text" value={area2marchData.values.value2} onChange={(e) => setArea2MarchData({ ...area2marchData, values: { ...area2marchData.values, value2: e.target.value } })} /></td>
                                <td>{area2marchData.recordedValues.recordedValue2}</td>
                                <td><input type="text" value={area2AprilData.values.value2} onChange={(e) => setArea2AprilData({ ...area2AprilData, values: { ...area2AprilData.values, value2: e.target.value } })} /></td>
                                <td>{area2AprilData.recordedValues.recordedValue2}</td>
                                <td><input type="text" value={area2MayData.values.value2} onChange={(e) => setArea2MayData({ ...area2MayData, values: { ...area2MayData.values, value2: e.target.value } })} /></td>
                                <td>{area2MayData.recordedValues.recordedValue2}</td>
                                <td><input type="text" value={area2JunData.values.value2} onChange={(e) => setArea2JunData({ ...area2JunData, values: { ...area2JunData.values, value2: e.target.value } })} /></td>
                                <td>{area2JunData.recordedValues.recordedValue2}</td>
                                <td><input type="text" value={area2JulData.values.value2} onChange={(e) => setArea2JulData({ ...area2JulData, values: { ...area2JulData.values, value2: e.target.value } })} /></td>
                                <td>{area2JulData.recordedValues.recordedValue2}</td>
                            </tr>
                            <tr>
                                <td>Value 3</td>
                                <td><input type="text" value={area2FebData.values.value3} onChange={(e) => setArea2FebData({ ...area2FebData, values: { ...area2FebData.values, value3: e.target.value } })} /></td>
                                <td>{area2FebData.recordedValues.recordedValue3}</td>
                                <td><input type="text" value={area2marchData.values.value3} onChange={(e) => setArea2MarchData({ ...area2marchData, values: { ...area2marchData.values, value3: e.target.value } })} /></td>
                                <td>{area2marchData.recordedValues.recordedValue3}</td>
                                <td><input type="text" value={area2AprilData.values.value3} onChange={(e) => setArea2AprilData({ ...area2AprilData, values: { ...area2AprilData.values, value3: e.target.value } })} /></td>
                                <td>{area2AprilData.recordedValues.recordedValue3}</td>
                                <td><input type="text" value={area2MayData.values.value3} onChange={(e) => setArea2MayData({ ...area2MayData, values: { ...area2MayData.values, value3: e.target.value } })} /></td>
                                <td>{area2MayData.recordedValues.recordedValue3}</td>
                                <td><input type="text" value={area2JunData.values.value3} onChange={(e) => setArea2JunData({ ...area2JunData, values: { ...area2JunData.values, value3: e.target.value } })} /></td>
                                <td>{area2JunData.recordedValues.recordedValue3}</td>
                                <td><input type="text" value={area2JulData.values.value3} onChange={(e) => setArea2JulData({ ...area2JulData, values: { ...area2JulData.values, value3: e.target.value } })} /></td>
                                <td>{area2JulData.recordedValues.recordedValue3}</td>
                            </tr>


                        </>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{calculateSum(area1FebData) + calculateSum(area2FebData)}</td>
                        <td>{calculateRecordedSum(area1FebData) + calculateRecordedSum(area2FebData)}%</td>
                        <td>{calculateSum(area1marchData) + calculateSum(area2marchData)}</td>
                        <td>{calculateRecordedSum(area1marchData) + calculateRecordedSum(area2marchData)}%</td>
                        <td>{calculateSum(area1AprilData) + calculateSum(area2AprilData)}</td>
                        <td>{calculateRecordedSum(area1AprilData) + calculateRecordedSum(area2AprilData)}%</td>
                        <td>{calculateSum(area1MayData) + calculateSum(area2MayData)}</td>
                        <td>{calculateRecordedSum(area1MayData) + calculateRecordedSum(area2MayData)}%</td>
                        <td>{calculateSum(area1JunData) + calculateSum(area2JunData)}</td>
                        <td>{calculateRecordedSum(area1JunData) + calculateRecordedSum(area2JunData)}%</td>
                        <td>{calculateSum(area1JulData) + calculateSum(area2JulData)}</td>
                        <td>{calculateRecordedSum(area1JulData) + calculateRecordedSum(area2JulData)}%</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
