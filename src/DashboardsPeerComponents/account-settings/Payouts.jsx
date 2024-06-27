import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Card,
	Table,
	Badge,
	Alert,
	Spinner, // Import Spinner component
	Container
} from 'react-bootstrap';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import ProfileLayout from '../../Components/marketing/student/ProfileLayout';
import Pagination from '../../Components/elements/advance-table/Pagination';
import { numberWithCommas } from '../../helper/utils';
// import StudentProfileLayout from '../StudentProfileLayout';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const day = date.getDate();
    const suffix = ['st', 'nd', 'rd'][((day + 90) % 100 - 10) % 10 - 1] || 'th';
    return formattedDate.replace(/\b(\d{1,2})\b/g, `$1${suffix}`);
};

const Payouts = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filtering, setFiltering] = useState('');
	const [rowSelection, setRowSelection] = useState({});
	
	// useEffect(() => {
	// 	axios.get(`https://remsana-backend-testing.azurewebsites.net/api/v1/transactions/${userId}`)
	// 		.then(response => {
	// 			setData(response.data);
	// 			setLoading(false); // Set loading to false after data is fetched
	// 		})
	// 		.catch(error => {
	// 			console.error('Error fetching data:', error);
	// 			setLoading(false); // In case of error, still set loading to false
	// 		});
	// }, []);

	const columns = [
		{ accessorKey: 'id', header: 'ID', cell: ({ getValue }) => '#' + getValue() },
		{ accessorKey: 'paymentMethod', header: 'Method' },
		{ accessorKey: 'course_title', header: 'Course Title' },
		{
			accessorKey: 'amount',
			header: 'Amount',
			cell: ({ getValue }) => '₦' + numberWithCommas(getValue())
		},
		{ accessorKey: 'transactionDate', header: 'Date', cell: ({ getValue }) => formatDate(getValue()) },
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ getValue }) => (
				<Badge bg={getValue() === 'success' ? 'success' : 'danger'}>
					{getValue()}
				</Badge>
			)
		},
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			globalFilter: filtering,
			rowSelection
		},
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		onGlobalFilterChange: setFiltering,
		debugTable: false,
	});

	return (
		<Container>
			<Card className="border-0 mt-4">
				<Card.Header>
					<h3 className="mb-0 h4">Payment History</h3>
				</Card.Header>
				<Card.Body className="p-0 pb-4">
					{loading ? ( // Display spinner if loading is true
						<div className="text-center my-4">
							<Spinner animation="border" variant="primary" />
						</div>
					) : (
						<>
							<Table hover responsive className="text-nowrap table-centered">
								<thead>
									{table.getHeaderGroups().map(headerGroup => (
										<tr key={headerGroup.id}>
											{headerGroup.headers.map(header => (
												<th key={header.id}>
													{header.isPlaceholder
														? null
														: flexRender(
															header.column.columnDef.header,
															header.getContext()
														)}
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody>
									{table.getRowModel().rows.map(row => (
										<tr key={row.id}>
											{row.getVisibleCells().map(cell => (
												<td key={cell.id}>
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</Table>
							{/* Pagination @ Footer */}
							<div className="mt-4">
								<Pagination table={table} />
							</div>
						</>
					)}
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Payouts;
