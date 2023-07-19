import { useState } from "react"
import { Table, TableContainer, TableHead, TableRow, TableCell, TablePagination } from "@mui/material"

const useContactTable = (contactListData, headCells ) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const TblContainer = props => (
        <TableContainer sx={{ maxHeight: '65vh' }}>
            <Table stickyHeader>
                {props.children}
            </Table>
        </TableContainer>
    )

    const TblHead = () => {
        return (
            <TableHead>
                <TableRow>
                {headCells.map((column) => (
                    <TableCell
                        sx={{backgroundColor: "#22d3ee", color: "#F4FEFD"}}
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                <TableCell sx={{backgroundColor: "#22d3ee", color: "#F4FEFD"}}>
                  {"Actions"}
                </TableCell>
                </TableRow>
            </TableHead>
        )
    }

    const TblPagination = () => {
        return (
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={contactListData?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        )
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        page,
        rowsPerPage
    }
}

export default useContactTable