import React, { useMemo, useState } from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import TableToolbar from '../tableToolbar/index.js';
import { formatDateMMDDYY } from '../../utilities/dateHelpers.js';
import { datagridsx } from '../../constants/datagridsx.js';

function dateFormatter(params) {
    return params ? formatDateMMDDYY(new Date(params)) : '';
}

const DesignColumnDefinitions = [
    {
        field: 'Number',
        headerName: 'Project Number',
        type: 'text',
    },
    {
        field: 'Name',
        headerName: 'Project Name',
        type: 'text',
        width: 120,
    },
    {
        field: 'City',
        headerName: 'City',
        type: 'text',
    },
    {
        field: 'Serial Number',
        headerName: 'Serial Number',
        type: 'text',
    },
    {
        field: 'Project Status',
        headerName: 'Project Status',
        type: 'text',
    },
    {
        field: 'NTA Version',
        headerName: 'NTA Version',
        type: 'text',
    },
    {
        field: 'NTA Permit Submission',
        headerName: 'NTA Permit Submission',
        type: 'date',
    },
    {
        field: 'Submit Building Permit',
        headerName: 'Submit Building Permit',
        type: 'date',
    },
    {
        field: 'Foundation FID',
        headerName: 'Foundation FID',
        type: 'date',
    },
    {
        field: 'Shops / Kits / FIDs / Sub',
        headerName: 'Shops / Kits / FIDs / Sub',
        type: 'date',
    },
    {
        field: 'Mfg Start',
        headerName: 'Mfg Start',
        type: 'date',
    },
    {
        field: 'Ship Mods',
        headerName: 'Ship Mods',
        type: 'date',
    },
    {
        field: 'CofO',
        headerName: 'C of O',
        type: 'date',
    },
];

const DesignTable = ({ projects }) => {
    const [columnVisibilityModel, setColumnVisibilityModel] = useState({
        id: false,
    });

    const columns = useMemo(() => {
        let cols = [];
        if (projects) {
            cols = DesignColumnDefinitions.map((c) =>
                c.type === 'date'
                    ? { ...c, valueFormatter: dateFormatter, width: 125 }
                    : { ...c }
            );
        }
        return cols;
    }, [projects]);

    const tableRows = useMemo(
        () =>
            projects
                .map((p, index) => {
                    const row = { ...p, id: index };
                    for (let f in row) {
                        const col = DesignColumnDefinitions.find((c) => c.field === f);
                        if (col && col.type === 'date' && row[f]) {
                            row[f] = new Date(row[f]);
                        }
                    }
                    return row;
                })
                .sort(
                    (a, b) =>
                        new Date(b['Manufacturing Start']) -
            new Date(a['Manufacturing Start'])
                ),
        [projects]
    );

    return (
        <DataGridPro
            rows={tableRows}
            columns={columns}
            slots={{
                toolbar: TableToolbar,
            }}
            slotProps={{
                pagination: {
                    showFirstButton: true,
                    showLastButton: true,
                },
                toolbar: { fileName: 'design' },
            }}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>
                setColumnVisibilityModel(newModel)
            }
            getRowHeight={() => 'auto'}
            sx={{
                ...datagridsx,
            }}
        />
    );
};
//             getRowHeight={() => 'auto'}
export default DesignTable;
