import { Button, TableCell } from '@material-ui/core';
import React from 'react';

const Prescriptions = ({row, index}) => {
    return (
        <>
            <TableCell >
                {index + 1}
            </TableCell>
            <TableCell >{row.name}</TableCell>
            <TableCell >{row.prescription}</TableCell>
            <TableCell >{row.phone}</TableCell>
            <TableCell >
                <Button variant="contained">View</Button>
            </TableCell>
        </>
    );
};

export default Prescriptions;