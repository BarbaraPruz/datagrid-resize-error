import { colors } from './index';

export const datagridsx = {
    '& .MuiDataGrid-columnHeaderTitle': {
        fontWeight: '700',
        whiteSpace: 'normal',
        lineHeight: 'normal',
        color: colors.skyfallDark,
    },
    '& .MuiDataGrid-virtualScrollerContent': {
        background: '#fcfcfc', //'#f8f8f6',
    },
    '& .MuiDataGrid-columnHeader': {
        paddingTop: '10px',
        paddingBottom: '10px',
        // Forced to use important since overriding inline styles
        height: 'unset !important',
    },
    '& .MuiDataGrid-columnHeader:focus': {
        outlineOffset: '-2px',
    },
    '& .MuiDataGrid-root': {
        whiteSpace: 'normal !important',
        wordWrap: 'break-word !important',
    },
    // '& .MuiDataGrid-cell': {
    //     whiteSpace: 'normal !important',
    //     wordWrap: 'break-word !important',
    // },
    '& .MuiDataGrid-cell:focus': {
        outlineOffset: '-2px',
    },
    '& .MuiDataGrid-columnHeaders': {
    // Forced to use important since overriding inline styles
        maxHeight: '168px !important',
    },
};
