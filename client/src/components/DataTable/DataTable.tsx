import useStyles from './useStyles';
import { DataGrid, GridColumns, GridRowData } from '@material-ui/data-grid';

interface Props {  
    rows: GridRowData[];
    columns: GridColumns
}

export default function DataTable({ rows, columns }: Props): JSX.Element {
    const classes = useStyles();
    return (
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          disableColumnMenu={true}
          classes={{columnHeader: classes.columnHeader}}
        />
      </div>
    );
  }
