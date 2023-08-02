import React, { useState } from 'react'
import './Teacher.css'
import {useReactToPrint} from 'react-to-print'
import { useRef } from 'react';
const Teacher = (props) => {
    console.log(props.mon);
    console.log(props.tue);
    console.log(props.wed);
    console.log(props.thurs);
    console.log(props.fri);
    console.log(props.x);
    const [show, setShow] = useState(0);
    let monday = [];
    let tuesday = [];
    let wednesday = [];
    let thursday = [];
    let friday = [];
    for (let i = 0; i < props.x; i++) {
        for (let j = 0; j < 8; j++) {
            let see = props.mon[i][j];
            let convert = see.split(',');
            if (convert[0] === props.teacher) {
                if (j === 0) {
                    convert[0] = '09-10 AM';
                } else if (j === 1) {
                    convert[0] = '10-11 AM';
                } else if (j === 2) {
                    convert[0] = '11-12 PM';
                } else if (j === 3) {
                    convert[0] = '12-01 PM';
                } else if (j === 4) {
                    convert[0] = '02-03 PM';
                } else if (j === 5) {
                    convert[0] = '03-04 PM';
                } else if (j === 6) {
                    convert[0] = '04-05 PM';
                } else {
                    convert[0] = '05-06 PM';
                }
                convert.push(props.which.get(i));
                monday.push(convert);
            }
        }
    }
    for (let i = 0; i < props.x; i++) {
        for (let j = 0; j < 8; j++) {
            let see = props.tue[i][j];
            let convert = see.split(',');
            if (convert[0] === props.teacher) {
                if (j === 0) {
                    convert[0] = '09-10 AM';
                } else if (j === 1) {
                    convert[0] = '10-11 AM';
                } else if (j === 2) {
                    convert[0] = '11-12 PM';
                } else if (j === 3) {
                    convert[0] = '12-01 PM';
                } else if (j === 4) {
                    convert[0] = '02-03 PM';
                } else if (j === 5) {
                    convert[0] = '03-04 PM';
                } else if (j === 6) {
                    convert[0] = '04-05 PM';
                } else {
                    convert[0] = '05-06 PM';
                }
                convert.push(props.which.get(i));
                tuesday.push(convert);
            }
        }
    }
    for (let i = 0; i < props.x; i++) {
        for (let j = 0; j < 8; j++) {
            let see = props.wed[i][j];
            let convert = see.split(',');
            if (convert[0] === props.teacher) {
                if (j === 0) {
                    convert[0] = '09-10 AM';
                } else if (j === 1) {
                    convert[0] = '10-11 AM';
                } else if (j === 2) {
                    convert[0] = '11-12 PM';
                } else if (j === 3) {
                    convert[0] = '12-01 PM';
                } else if (j === 4) {
                    convert[0] = '02-03 PM';
                } else if (j === 5) {
                    convert[0] = '03-04 PM';
                } else if (j === 6) {
                    convert[0] = '04-05 PM';
                } else {
                    convert[0] = '05-06 PM';
                }
                convert.push(props.which.get(i));
                wednesday.push(convert);
            }
        }
    }

    for (let i = 0; i < props.x; i++) {
        for (let j = 0; j < 8; j++) {
            let see = props.thurs[i][j];
            let convert = see.split(',');
            if (convert[0] === props.teacher) {
                if (j === 0) {
                    convert[0] = '09-10 AM';
                } else if (j === 1) {
                    convert[0] = '10-11 AM';
                } else if (j === 2) {
                    convert[0] = '11-12 PM';
                } else if (j === 3) {
                    convert[0] = '12-01 PM';
                } else if (j === 4) {
                    convert[0] = '02-03 PM';
                } else if (j === 5) {
                    convert[0] = '03-04 PM';
                } else if (j === 6) {
                    convert[0] = '04-05 PM';
                } else {
                    convert[0] = '05-06 PM';
                }
                convert.push(props.which.get(i));
                thursday.push(convert);
            }
        }
    }
    for (let i = 0; i < props.x; i++) {
        for (let j = 0; j < 8; j++) {
            let see = props.fri[i][j];
            let convert = see.split(',');
            if (convert[0] === props.teacher) {
                if (j === 0) {
                    convert[0] = '09-10 AM';
                } else if (j === 1) {
                    convert[0] = '10-11 AM';
                } else if (j === 2) {
                    convert[0] = '11-12 PM';
                } else if (j === 3) {
                    convert[0] = '12-01 PM';
                } else if (j === 4) {
                    convert[0] = '02-03 PM';
                } else if (j === 5) {
                    convert[0] = '03-04 PM';
                } else if (j === 6) {
                    convert[0] = '04-05 PM';
                } else {
                    convert[0] = '05-06 PM';
                }
                convert.push(props.which.get(i));
                friday.push(convert);
            }
        }
    }
    console.log(props.teacher, monday, tuesday, wednesday, thursday, friday);
    const handleClickMe = () => {
        setShow(1);
    }
    const close=()=>{
        setShow(0);
    }
    const componentref=useRef();
    const generateTeacherPdf=useReactToPrint({
        content:()=>componentref.current
      });
    return (
        <div>
            <div className='teacher-flex'>
                <div>
                    {props.teacher}
                </div>
                {
                    show===0 &&
                    <div>
                        <button className='gen generate' onClick={handleClickMe}>Generate</button>
                    </div>
                }
                {
                    show===1 &&
                    <div>
                        <button className='generate' onClick={close}>Close</button>
                    </div>
                }
                
                {
                    show === 1 &&
                    <div>
                        <button className='pdf' onClick={generateTeacherPdf}>Generate PDF</button>
                    </div>
                }
            </div>

            {
                show === 1 &&
                <div id='targetpdf' ref={componentref}>
                    <div className='days'>Monday</div>
                    <div className='timeTable'>
                        <tr>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Time Slot</th>
                            <th>Room Number</th>
                        </tr>

                        {monday.map(function (data) {
                            return (
                                <tr>
                                    <td>{data[3]}</td>
                                    <td>{data[1]}</td>
                                    <td>{data[0]}</td>
                                    <td>{data[2]}</td>
                                </tr>
                            )
                        })}
                    </div>

                    <div className='days'>Tuesday</div>
                    <div className='timeTable'>
                        <tr>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Time Slot</th>
                            <th>Room Number</th>
                        </tr>

                        {tuesday.map(function (data) {
                            return (
                                <tr>
                                    <td>{data[3]}</td>
                                    <td>{data[1]}</td>
                                    <td>{data[0]}</td>
                                    <td>{data[2]}</td>
                                </tr>
                            )
                        })}
                    </div>

                    <div className='days'>Wednesday</div>
                    <div className='timeTable'>
                        <tr>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Time Slot</th>
                            <th>Room Number</th>
                        </tr>

                        {wednesday.map(function (data) {
                            return (
                                <tr>
                                    <td>{data[3]}</td>
                                    <td>{data[1]}</td>
                                    <td>{data[0]}</td>
                                    <td>{data[2]}</td>
                                </tr>
                            )
                        })}
                    </div>

                    <div className='days'>Thursday</div>
                    <div className='timeTable'>
                        <tr>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Time Slot</th>
                            <th>Room Number</th>
                        </tr>

                        {thursday.map(function (data) {
                            return (
                                <tr>
                                    <td>{data[3]}</td>
                                    <td>{data[1]}</td>
                                    <td>{data[0]}</td>
                                    <td>{data[2]}</td>
                                </tr>
                            )
                        })}
                    </div>

                    <div className='days'>Friday</div>
                    <div className='timeTable'>
                        <tr>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Time Slot</th>
                            <th>Room Number</th>
                        </tr>

                        {friday.map(function (data) {
                            return (
                                <tr>
                                    <td>{data[3]}</td>
                                    <td>{data[1]}</td>
                                    <td>{data[0]}</td>
                                    <td>{data[2]}</td>
                                </tr>
                            )
                        })}
                    </div>
                </div>
            }


        </div>
    )
}

export default Teacher
