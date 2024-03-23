"use client";
import React from "react";
import { useTable } from "react-table";

const awards = [
  {
    id: 1,
    award: "Site Of The Day",
    type: "Readability",
    project: "technoWorld",
    year: 2020

  },
  {
    id: 2,
    award: "Motion Graphics",
    type: "Animation",
    project: "Motion Lab",
    year: 2021

  },

  {
    id: 3,
    award: "Bussiness Model",
    type: "New Strategy",
    project: "Market Life",
    year: 2022

  },
  {
    id: 4,
    award: "Video Design",
    type: "Vizualization",
    project: "Live Cam Project",
    year: 2023

  },

]

const Awards = () => {
  const data = React.useMemo(() => awards, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Award",
        accessor: "award",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Project",
        accessor: "project",
      },
      {
        Header: "Year",
        accessor: "year",
      },
    ],
    []
  );
  const table1 = useTable({ columns, data });
  const data2 = React.useMemo(() => awards, []);
  const columns2 = React.useMemo(
    () => [
      {
        Header: "",
        accessor: (row) => ({
          award: row.award,
          type: row.type,
          project: row.project,
        }),
        id: "awardTypeProject",
        minWidth: 320,
        Cell: ({ value }) => (
          <div>
            <p>{value.award}</p>
            <p>{value.type}</p>
            <p>{value.project}</p>
          </div>
        ),
      },
      {
        Header: "",
        accessor: "year",
      },
    ],
    []
  );

  const table2 = useTable({ columns: columns2, data: data2 });

  return (
    <>
      <div className="h-52 w-full"></div>
      {/* <section className="py-24 md:block hidden px-4 md:px-10">
        <div className="heading flex flex-col gap-4">
          <p className="font-semibold">ACHIEVEMENTS</p>
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-5">
            <p className="md:text-6xl text-4xl font-bold">Our awards</p>
            <a href="#viewmoreawards" className="viewgroup flex items-center gap-1">
              <p className="font-semibold">View More</p>
              <IoArrowForwardSharp className="arrow1 w-6 h-6 md:w-[24px] md:h-[24px]" />
              <IoArrowForwardSharp className="arrow2 w-6 h-6 md:w-[24px] md:h-[24px]" />
            </a>
          </div>
        </div>

        <div className="table-wrapper overflow-x-auto py-10">
          <table {...table1.getTableProps()} className="w-full border-collapse">
            <thead>
              {table1.headerGroups.map((headerGroup, index) => (
                <tr key={`header-group-${index}`} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, columnIndex) => (
                    <th
                      key={`header-${index}-${columnIndex}`}
                      {...column.getHeaderProps()}
                      className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-300 text-left text-sm md:text-md text-black font-bold uppercase"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...table1.getTableBodyProps()}>
              {table1.rows.map((row, index) => {
                table1.prepareRow(row);
                return (
                  <tr key={`row-${index}`} {...row.getRowProps()}>
                    {row.cells.map((cell, cellIndex) => (
                      <td
                        key={`cell-${index}-${cellIndex}`}
                        className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm md:text-md border-b-2 font-semibold border-gray-300"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section className="py-24 block md:hidden px-4 md:px-10">
        <div className="heading flex flex-col gap-4">
          <p className="font-semibold">ACHIEVEMENTS</p>
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-5">
            <p className="md:text-6xl text-4xl font-bold">Our awards</p>
            <a href="#viewmoreawards" className="viewgroup flex items-center gap-3">
              <p className="font-semibold">View More</p>
              <IoArrowForwardSharp className="arrow1 w-6 h-6 md:w-[24px] md:h-[24px]" />
              <IoArrowForwardSharp className="arrow2 w-6 h-6 md:w-[24px] md:h-[24px]" />
            </a>
          </div>
        </div>

        <div className="table-wrapper py-10 overflow-x-auto">
          <table {...table2.getTableProps()} className="w-full border-collapse">
            <thead>
              {table2.headerGroups.map((headerGroup, index) => (
                <tr key={`header-group-${index}`} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, columnIndex) => (
                    <th
                      key={`header-${index}-${columnIndex}`}
                      {...column.getHeaderProps()}
                      className="px-4 py-2 md:px-6 md:py-3 border-b-2 border-gray-300 text-left text-sm md:text-md text-black font-bold uppercase"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...table2.getTableBodyProps()}>
              {table2.rows.map((row, index) => {
                table2.prepareRow(row);
                return (
                  <tr key={`row-${index}`} {...row.getRowProps()}>
                    {row.cells.map((cell, cellIndex) => (
                      <td
                        key={`cell-${index}-${cellIndex}`}
                        className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm md:text-md border-b-2 font-semibold border-gray-300"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section> */}
    </>
  );
};

export default Awards;
