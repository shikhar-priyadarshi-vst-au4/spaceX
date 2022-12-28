export const tableSchema = [
    {
        columnLabel: "Title",
        render: (row) => <span>{row.title || 'N/A'}</span>
    },
    {
        columnLabel: "Details",
        render: (row) => <span>{row.details}</span>
    },
    {
        columnLabel: "Ref. Links",
        render: (row) => <div>
            <a href={row.links.reddit}>Reddit</a>
            <a href={row.links.article}>Article</a>
            <a href={row.links.wikipedia}>Wikipedia</a>
        </div>
    },
]