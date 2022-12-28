export const tableSchema = [
    {
        columnLabel: "Payload Id",
        render: (row) => <span>{row.payload_id || 'N/A'}</span>
    },
    {
        columnLabel: 'Nationality',
        render: (row) => <span>{row.nationality || 'N/A'}</span>
    },
    {
        columnLabel: "Manufacturer",
        render: (row) => <span>{row.manufacturer}</span>
    },
    {
        columnLabel: "Payload Type",
        render: (row) => <span>{row.payload_type}</span>
    },
]