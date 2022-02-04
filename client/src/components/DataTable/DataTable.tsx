import useStyles from './useStyles';
import { DataGrid, GridColumns, GridRowData, GridToolbar } from '@material-ui/data-grid';
import { Box } from '@material-ui/core';

interface Props {  
    rows: GridRowData[];
    columns: GridColumns;
}
export default function DataTable({ rows, columns }: Props): JSX.Element {
    const classes = useStyles();

    
    return (
      <Box className={classes.root}>
        <DataGrid
          components={{ Toolbar: GridToolbar }}
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          disableColumnMenu={true}
          disableDensitySelector={true}
          classes={{ columnHeader: classes.columnHeader }}
        />
      </Box>
    );
  }
