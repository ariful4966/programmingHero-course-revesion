import { TableCell } from '@material-ui/core';
import React from 'react';

const Patients = ({row, index}) => {
    const {village, upoZila, dist}=row.address;
    return (
        <>
            <TableCell >
                {index + 1}
            </TableCell>
            <TableCell >{row.name}</TableCell>
            <TableCell >{row.gender}</TableCell>
            <TableCell >{row.age}</TableCell>
            <TableCell >{row.weight}kg</TableCell>
            <TableCell >
                {row.phone}
            </TableCell>
            <TableCell >
                {village}, {upoZila}, {dist}
            </TableCell>
        </>
    );
};

export default Patients;