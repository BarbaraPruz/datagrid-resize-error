import React from 'react';
import {
    GridToolbarExport,
} from '@mui/x-data-grid-pro';

function TableToolbar({ fileName }) {
    return (
        <div className="d-flex w-100 justify-content-end bg-white">
            <GridToolbarExport
                csvOptions={{
                    fileName: fileName,
                    delimiter: ',',
                    utf8WithBom: true,
                }}
            />
        </div>
    );
}

export default TableToolbar;
